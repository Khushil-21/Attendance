const fs = require("fs");
const { TimeTableModel } = require("./MySchemas");


var path = require("path");
path = path.join(__dirname, "/DataFiles/TimeTable.json");



const AddStudentsToDB = async () => {
	const data = fs.readFileSync(path, "utf-8");
	const timetable = JSON.parse(data);
	await TimeTableModel.deleteMany({})
	await TimeTableModel.insertMany(timetable);
	// console.log(result)
};
AddStudentsToDB();
 