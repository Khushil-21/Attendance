const fs = require("fs");
const { StudentModel } = require("./MySchemas");


var path = require("path");
path = path.join(__dirname, "/DataFiles/StudentsDetails.json");



const AddStudentsToDB = async () => {
	const data = fs.readFileSync(path, "utf-8");
	const studentlist = JSON.parse(data).Students;
	await StudentModel.deleteMany({})
	await StudentModel.insertMany(studentlist);
	// console.log(result)
};
AddStudentsToDB();
