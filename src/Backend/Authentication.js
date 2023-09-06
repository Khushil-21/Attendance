const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());



const Admincarendtials = { admin: "Admin", password: "123" };

app.post("/AdminAuthentication", (req, res) => {
	console.log(req.body.name);
	console.log(req.body.password);
	let passworderror = "";
	let nameerror = "";
	if (req.body.name !== Admincarendtials.admin) {
		nameerror = "Wrong Admin Name";
		if (req.body.password !== Admincarendtials.password) {
			passworderror = "Wrong Admin Password";
		}
	} else {
		if (req.body.password !== Admincarendtials.password) {
			passworderror = "Wrong Admin Password";
		}
	}
	console.log(nameerror+passworderror)
	res.json({ nameerror, passworderror });
});



const Techercarendtials = { teacher: "Teacher", password: "123" };

app.post("/TeacherAuthentication", (req, res) => {
	console.log(req.body.name);
	console.log(req.body.password);
	let passworderror = "";
	let nameerror = "";
	if (req.body.name !== Techercarendtials.teacher) {
		nameerror = "Wrong Teacher Name";
		if (req.body.password !== Techercarendtials.password) {
			passworderror = "Wrong Teacher Password";
		}
	} else {
		if (req.body.password !== Techercarendtials.password) {
			passworderror = "Wrong Teacher Password";
		}
	}
	res.json({ nameerror, passworderror });
});



app.post("/GetStudentDetails", (req, res) => {
	console.log(req.body.start);
	let start=req.body.start
	console.log(req.body.end);
	let end = req.body.end;
	var students = []
	for (let i = 0; i <= 750; i++){

		students.push({roll:i,name:"Khushil Shah"})
	}
	// console.log(students)

	res.json({ student : students.slice(start,end)});
});



// app.post("/DataBase", (req, res) => {
	
// 	res.json({roll:"1",name:"khushil"});
// });




app.listen(5001, () => {
	console.log("Server Started -- ");
});
