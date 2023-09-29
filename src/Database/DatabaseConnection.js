const { RoleModel, StudentModel, TimeTableModel } = require("./MySchemas");
const fs = require("fs");

const RoleAuthentication = async (username, password, role) => {
	let result;
	result = await RoleModel.find({ username, password, role });
	console.log(result);
	return result;
};

const GetStudentsFromDatabase = async (batch) => {
	let result;
	if (batch === "All") {
		result = await StudentModel.find();
	} else {
		result = await StudentModel.find({ Batch: batch });
	}
	return result;
};

const SearchStudentsFromDatabase = async (query) => {
	let result;
	result = StudentModel.find({
		$or: [
			{ Name: new RegExp(query, "i") },
			{ RollNo: new RegExp(query, "i") },
			{ Batch: new RegExp(query, "i") },
		],
	});
	return result;
};

const MarkAttendanceToDB = async (absent, subjectdetails) => {
	console.log(absent);
	console.log(subjectdetails);
	const { Lecture, Day, Batch } = subjectdetails;
	let subject = await TimeTableModel.findOne({ Batch: Batch });
	subject = subject[Lecture][0][Day];
	console.log(subject);
	console.log(absent);
	for (let i of absent) {
		console.log(i);
		const c = await StudentModel.findOne({ RollNo: `${i}` });
		// console.log(c[subject]);
		if (c[subject] > 0) {
			await StudentModel.updateOne({ RollNo: `${i}` },{$inc:{[subject]:-1}})
		}
		console.log("---------------------------------");
	}
	var path = require("path");
	path = path.join(__dirname, "/DataFiles/StudentsDetails.json");
	const data = await StudentModel.find({},{_id:0,__v:0})
	fs.writeFileSync(path,JSON.stringify(data))
};

module.exports = {
	RoleAuthentication,
	GetStudentsFromDatabase,
	SearchStudentsFromDatabase,
	MarkAttendanceToDB,
};
