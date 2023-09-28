const fs = require("fs");
const { RoleModel } = require("./MySchemas");

var path = require("path");
path = path.join(__dirname, "/DataFiles/RoleDetails.json");

const AddStudentsToDB = async () => {
	const data = fs.readFileSync(path, "utf-8");
	const rolelist = JSON.parse(data);
	await RoleModel.deleteMany({})
	await RoleModel.insertMany(rolelist);
	// console.log(result)
};
AddStudentsToDB();
