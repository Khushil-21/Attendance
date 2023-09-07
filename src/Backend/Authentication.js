const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const RoleCredentials = [
	{
		usesername: "Admin",
		password: "123",
		role: "ADMIN",
	},
	{
		usesername: "Teacher",
		password: "321",
		role: "TEACHER",
	},
];

app.post("/UserAuthentication", (req, res) => {
	// console.log(req.body.username);
	// console.log(req.body.password);
	// console.log(req.body.role);
	let AuthenticationStatus = "";
	for (var user of RoleCredentials) {
		console.log(user.usesername + user.password + user.role);
		if (
			req.body.username === user.usesername &&
			req.body.password === user.password &&
			req.body.role === user.role
		) {
			AuthenticationStatus = "Successful";
			break;
		} else {
			AuthenticationStatus = "Error";
		}
	}
	console.log(AuthenticationStatus);
	res.json({ AuthenticationStatus });
});

app.post("/GetStudentDetails", (req, res) => {
	console.log(req.body.start);
	let start = req.body.start;
	console.log(req.body.end);
	let end = req.body.end;
	var students = [];
	for (let i = 0; i <= 750; i++) {
		students.push({ roll: i, name: "Khushil Shah" });
	}

	res.json({ student: students.slice(start, end) });
});

app.listen(5001, () => {
	console.log("Server Started -- ");
});
