const mg = require("mongoose");
var data
const UserAuthentication = async (username, password, role) => {
    let er = true
    let result
	await mg.connect("mongodb://127.0.0.1:27017/attendance")
		.then(async() => {
            console.log("-------------- DataBase Connected Successfully --------------\n\n");
            data = await mg.connection.db.collection("role_authentication")
            result = await data.find({username,password,role}).toArray();
            console.log(result)
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

module.exports = UserAuthentication;