const express = require("express");
const app = express();
const cors = require("cors");
const UserAuthentication = require("../Database/DatabaseConnection");
const GetStudentList = require("./StudentList");
const AbsentWriter = require("./AbsentMarker");
const GetStudentsFromDatabase = require("../Database/StudentDataBase");

app.use(express.json());
app.use(cors());
const port = 5001


app.post("/UserAuthentication", async(req, res) => {
	// console.log(req.body.username);
	// console.log(req.body.password);
	// console.log(req.body.role);
	let AuthenticationStatus = "";
	const Credentials = await UserAuthentication(req.body.username, req.body.password, req.body.role)
	if (Credentials.length === 0) {
		AuthenticationStatus = "Error";
		
	} else {
		AuthenticationStatus = "Successful";
	}
	// console.log(AuthenticationStatus);
	res.json({ AuthenticationStatus });
});
app.post("/GetStudents", async(req, res) => {
	const batch = req.body.batch
	// const students = GetStudentList(batch)
	const students = await GetStudentsFromDatabase(batch)
	// console.log(students)
	res.json({ students });
});
app.post("/Attendance", async(req, res) => {
	const absenties = req.body.absenties
	const StudentDetails = req.body.StudentDetails
	const operation = req.body.operation
	const roll = req.body.roll
	// console.log(absenties)
	// console.log(StudentDetails)
	AbsentWriter(absenties, StudentDetails,operation,roll);
});



app.listen(port, () => {
	console.log(`-------------- Server Started on port : ${port} --------------\n\n`);
});
