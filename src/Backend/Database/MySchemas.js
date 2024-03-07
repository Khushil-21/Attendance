const mg = require("mongoose");
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

try {
	if (!MONGODB_URI) {
		throw new Error(
			"Please define the MONGODB_URI environment variable inside .env"
		);
	}
	mg.connect(MONGODB_URI)
		.then(() => {
			console.log("Connected to MongoDB Successfully!");
		})
		.catch((error) => {
			console.error("Error connecting to MongoDB:", error);
		});
} catch (error) {
	console.error("Error connecting to MongoDB:", error);
}

const StudentSchema = mg.Schema({
	RollNo: String,
	EnrollNo: String,
	Name: String,
	Batch: String,
	FSD: {
		type: Number,
		min: [0, "Can't Be Negative"],
	},
	PYTHON: {
		type: Number,
		min: [0, "Can't Be Negative"],
	},
	COA: {
		type: Number,
		min: [0, "Can't Be Negative"],
	},
	DM: {
		type: Number,
		min: [0, "Can't Be Negative"],
	},
});
const StudentModel = new mg.model("Student-Details", StudentSchema);

const RoleSchema = mg.Schema({
	username: String,
	password: String,
	role: String,
});
const RoleModel = new mg.model("Role-Authentications", RoleSchema);

const TimeTableSchema = mg.Schema({
	Batch: String,
	"Lecture-1": Array,
	"Lecture-2": Array,
	"Lecture-3": Array,
	"Lecture-4": Array,
});
const TimeTableModel = new mg.model("Time-Table", TimeTableSchema);

module.exports = { StudentModel, RoleModel, TimeTableModel };

// mg.connect("mongodb://127.0.0.1:27017/Attendance-Calculator")
// 	.then(() => {
// 		console.log("Connected Successfully");
// 	})
// 	.catch(() => {
// 		console.log("error");
// 	});
