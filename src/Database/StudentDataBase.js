const mg = require("mongoose");
var data;
const GetStudentsFromDatabase = async (batch) => {
	let er = true;
	let result;
	await mg
		.connect("mongodb://127.0.0.1:27017/attendance")
		.then(async () => {
			console.log(
				"-------------- DataBase Connected Successfully --------------\n\n"
			);
			data = await mg.connection.db.collection("Student_Details");
			console.log(batch);
			if (batch === "All") {
				result = await data.find().toArray();
			} else {
				result = await data.find({ Batch: batch }).toArray();
			}
			// console.log(result)
			er = false;
		})
		.catch((err) => {
			console.log(err);
		});
	if (!er) {
		return result;
	}
};
const SearchStudentsFromDatabase = async (query) => {
	let er = true;
	let result;
	await mg
		.connect("mongodb://127.0.0.1:27017/attendance")
		.then(async () => {
			console.log(
				"-------------- DataBase Connected Successfully --------------\n\n"
            );
            // console.log(query)
            data = await mg.connection.db.collection("Student_Details");
            
			result = await data.find({$or:[{ Name: new RegExp(query, 'i') },{ RollNo: new RegExp(parseInt(query), 'i') }]}).toArray();  
            er = false;
            // console.log(result)
		})
		.catch((err) => {
			console.log(err);
		});

	if (!er) {
		return result;
	}
};

module.exports = { GetStudentsFromDatabase ,SearchStudentsFromDatabase};
