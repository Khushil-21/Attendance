const fs = require("fs");
var path = require('path');
path=path.join(__dirname,"/DataFiles/StudentsDetails.json")
const GetStudentList = (batch) => {

	let rawdata = fs.readFileSync(path);
    let student = JSON.parse(rawdata);
    let share=[]
    for (var i of student.Students) {
        if (i.Batch === batch) {
            share.push(i)
        }
    }
    return share
};
// const c = GetStudentList("Batch-2");
// console.log(c)
module.exports = GetStudentList;

// ,
// {
// 	"RollNo": 31,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 32,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 33,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 34,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 35,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 36,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 37,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 38,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 39,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// },
// {
// 	"RollNo": 40,
// 	"EnrollNo": 2021002171210189,
// 	"Name": "Dumy",
// 	"Batch": "Batch-4",
// 	"FSD": 100,
// 	"PYTHON": 100,
// 	"COA": 100,
// 	"DM": 100
// }