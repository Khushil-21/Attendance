const Authentication = require("./DatabaseConnection");
const GetStudents = require("./StudentDataBase");

const hi = async () => {
	// const result = await Authentication("Admin", "123", "ADMIN");
	// console.log(result);
	const result = await GetStudents("Batch-2");
	console.log(result);
};
hi();
