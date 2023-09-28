const mg = require("mongoose");
const { RoleModel, StudentModel } = require("./MySchemas");


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

module.exports = { RoleAuthentication,GetStudentsFromDatabase, SearchStudentsFromDatabase };

