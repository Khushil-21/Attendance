var path = require("path");
var fs = require("fs");
path = path.join(__dirname, "/WrittenFiles/DailyAttendance.Json");
const WriteDailyFile = (absentData, SelectedData) => {
	console.log("-----------file ")
    let data = JSON.parse(fs.readFileSync(path, "utf-8"))

	// console.log(absentData);
    // console.log(SelectedData);
    // console.log(data["Date"]);
    // console.log(data);
    // console.log(SelectedData.date);
    // console.log(data["Date"] !== SelectedData.date)

    if (data["Date"] !== SelectedData.date) {
        console.log("reset")
        data = restFile()
    }
    data["Day"]=SelectedData.Day
    data["Date"]=SelectedData.date
    data[SelectedData.Lecture][SelectedData.Batch]=[...absentData]
    console.log(data)

    fs.writeFileSync(path, JSON.stringify(data))
	console.log("-----------file puru")


};

function restFile() {
    return {
        Day: "",
        Date:"1/1/1900",
		"Lecture-1": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
		"Lecture-2": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
		"Lecture-3": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
		"Lecture-4": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
	}
}
// WriteDailyFile(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
// 	Lecture: "Lecture-1",
// 	Day: "Monday",
// 	Batch: "Batch-1",
// });
module.exports = WriteDailyFile;
