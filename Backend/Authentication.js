const express = require("express");
const app = express();
const cors = require("cors");
// const GetStudentList = require("./StudentList");
const AbsentWriter = require("./AbsentMarker");
const {
	RoleAuthentication,
	GetStudentsFromDatabase,
	SearchStudentsFromDatabase,
	OneStudentFromDB,
} = require("./Database/DatabaseConnection");
const ReadDailyFile = require("./DailyAbsentFileReader");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;

app.get("/", async (req, res) => {
	res.json({ message: "Hello From Your  Server!" });
});

app.post("/RoleAuthentication", async (req, res) => {
	// console.log(req.body.username);
	// console.log(req.body.password);
	// console.log(req.body.role);
	let AuthenticationStatus = "";
	const Credentials = await RoleAuthentication(
		req.body.username,
		req.body.password,
		req.body.role
	);

	if (Credentials.length === 0) {
		AuthenticationStatus = "Error";
	} else {
		AuthenticationStatus = "Successful";
	}
	// console.log(AuthenticationStatus);
	res.json({ AuthenticationStatus });
});

app.post("/GetStudents", async (req, res) => {
	const batch = req.body.batch;
	// const students = GetStudentList(batch)
	const students = await GetStudentsFromDatabase(batch);
	// console.log(students)
	// console.log(batch)
	res.json({ students });
});

app.post("/SearchStudents", async (req, res) => {
	const query = req.body.searchQuery;
	// console.log(query)
	const students = await SearchStudentsFromDatabase(query);
	// console.log(students)
	res.json({ students });
});

app.post("/Attendance", async (req, res) => {
	// console.log(req.body)
	await AbsentWriter(req.body);
	res.status(201).send();
});
app.post("/Studentportal", async (req, res) => {
	console.log(req.body);
	const DailyAttendance = await ReadDailyFile();
	console.log(DailyAttendance);
	res.json({ DailyAttendance });
});
app.post("/GetOneStudent", async (req, res) => {
	const query = req.body.query;
	const OneStudent = await OneStudentFromDB(query);
	res.json({ OneStudent });
});

app.listen(port, () => {
	console.log(
		`-------------- Server Started on port : ${port} --------------\n\n`
	);
});
