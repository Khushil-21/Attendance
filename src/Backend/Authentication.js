const express = require("express");
const app = express();
const cors = require("cors");
const UserAuthentication = require("../Database/DatabaseConnection");
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

app.listen(port, () => {
	console.log(`-------------- Server Started on port : ${port} --------------\n\n`);
});
