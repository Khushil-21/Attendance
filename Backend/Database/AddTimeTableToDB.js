const fs = require("fs");
const { TimeTableModel } = require("./MySchemas");


var path = require("path");
path = path.join(__dirname, "/DataFiles/TimeTable.json");



const AddStudentsToDB = async () => {
	const data = fs.readFileSync(path);
	const timetable = JSON.parse(data);
	console.log(timetable)
	await TimeTableModel.deleteMany({})
	await TimeTableModel.insertMany(timetable);
};
AddStudentsToDB();
