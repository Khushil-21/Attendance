var path = require("path");
const { MarkAttendanceToDB } = require("../Database/DatabaseConnection");
path = path.join(__dirname, "./DataFiles/StudentsStatus.csv");

const AbsentWriter = async(alldata) => {
	let { absenties , operation, roll, SelectedData} = alldata;
	let temp = [];
	if (operation === "present") {
		for (let i of roll) {
			if (absenties.indexOf(`${i}`) === -1) {
				temp.push(`${i}`);
			}
		}
		absenties = temp;
	}
	
	
    // console.log("-------ab")
	// console.log(absenties);
    // console.log("-------sel")
	// console.log(SelectedData);
    // console.log("-------op")
	// console.log(operation);
    // console.log("-------Rol")
	// console.log(roll);
    // console.log("----------")

    await MarkAttendanceToDB(absenties,SelectedData)
};
module.exports = AbsentWriter;
