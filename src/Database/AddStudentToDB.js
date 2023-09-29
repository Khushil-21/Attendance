const fs = require("fs");
const { StudentModel } = require("./MySchemas");


var path = require("path");
path = path.join(__dirname, "/DataFiles/StudentsDetails.json");



const AddStudentsToDB = async () => {
	const data = fs.readFileSync(path, "utf-8");
	const studentlist = JSON.parse(data);
	await StudentModel.deleteMany({})
	try {
		await StudentModel.insertMany(studentlist);
	} catch(error){
		console.log(error.message)
	}
	// console.log(result)
};
AddStudentsToDB();
