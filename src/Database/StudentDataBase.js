const mg = require("mongoose");
var data
const GetStudentsFromDatabase = async (batch) => {
    let er = true
    let result
	await mg.connect("mongodb://127.0.0.1:27017/attendance")
		.then(async() => {
            console.log("-------------- DataBase Connected Successfully --------------\n\n");
            data = await mg.connection.db.collection("Student_Details")
            result = await data.find({Batch:batch}).toArray();
            // console.log(result)
            er = false;
		})
		.catch((err) => {
			console.log(err);
        });
    if (er) {
        
    }
    else {
        return result
    }

};

module.exports = GetStudentsFromDatabase;