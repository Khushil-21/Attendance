const WriteDailyFile = require("../Backend/DailyAbsentFileWriter");
const { RoleModel, StudentModel, TimeTableModel } = require("./MySchemas");
const fs = require("fs");

const RoleAuthentication = async (username, password, role) => {
	let result;
	result = await RoleModel.find({ username, password, role });
	// console.log(result);
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
	try {
		result = StudentModel.find({
			$or: [
				{ Name: new RegExp(query, "i") },
				{ RollNo: new RegExp(query, "i") },
				{ Batch: new RegExp(query, "i") },
			],
		});
	} catch (err) {
		console.log(err);
	}
	return result;
};

const MarkAttendanceToDB = async (absentData, SelectedData) => {
	console.log("-----------data")
	console.log(absentData);
	console.log(SelectedData);
	const { Lecture, Day, Batch } = SelectedData;
	let subject = await TimeTableModel.findOne({ Batch: Batch });
	subject = subject[Lecture][0][Day];
	console.log(subject);
	// for (let i of absentData) {
	// 	// console.log(i);
	// 	const c = await StudentModel.findOne({ RollNo: `${i}` });
	// 	// console.log(c[subject]);
	// 	if (c[subject] > 0) {
	// 		await StudentModel.updateOne(
	// 			{ RollNo: `${i}` },
	// 			{ $inc: { [subject]: -1 } }
	// 		);
	// 	}
	// 	// console.log("---------------------------------");
	// }

	// var path = require("path");
	// path = path.join(__dirname, "/DataFiles/StudentsDetails.json");
	// const data = await StudentModel.find({}, { _id: 0, __v: 0 });
	// fs.writeFileSync(path, JSON.stringify(data));

	// console.log("-----------data puru")

	// WriteDailyFile(absentData, SelectedData);
};

const OneStudentFromDB = async (query) => {
	return await StudentModel.findOne({ EnrollNo: query });
};

module.exports = {
	RoleAuthentication,
	GetStudentsFromDatabase,
	SearchStudentsFromDatabase,
	MarkAttendanceToDB,
	OneStudentFromDB,
};
