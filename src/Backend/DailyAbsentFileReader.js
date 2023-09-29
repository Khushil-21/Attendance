var path = require("path");
var fs = require("fs");
path = path.join(__dirname, "/WrittenFiles/DailyAttendance.Json");
const ReadDailyFile = () => {
    const data = JSON.parse(fs.readFileSync(path))
    console.log(data)
    return data
};

module.exports = ReadDailyFile;
