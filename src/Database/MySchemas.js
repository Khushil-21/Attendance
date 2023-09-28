const mg = require("mongoose");


mg.connect("mongodb://127.0.0.1:27017/Attendance-Calculator")
	.then(() => {
		console.log("Connected Successfully");
	})
	.catch(() => {
		console.log("error");
	});

    

const StudentSchema = mg.Schema({
    RollNo: String,
    EnrollNo: String,
    Name: String,
    Batch: String,
    FSD: Number,
    PYTHON: Number,
    COA: Number,
    DM: Number
})
const StudentModel = new mg.model("Student-Details", StudentSchema)




const RoleSchema = mg.Schema({
    username: String,
    password: String,
    role: String
})
const RoleModel = new mg.model("Role-Authentications", RoleSchema)


const TimeTableSchema = mg.Schema({
    "Batch": String,
    "Lecture-1": Array,
    "Lecture-2": Array,
    "Lecture-3": Array,
    "Lecture-4": Array
})
const TimeTableModel = new mg.model("Time-Table", TimeTableSchema)




module.exports={StudentModel,RoleModel,TimeTableModel}
