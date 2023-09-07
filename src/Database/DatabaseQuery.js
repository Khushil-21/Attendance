const Authentication = require("./DatabaseConnection");

const hi = async () => {
	const result = await Authentication("Admin", "123", "ADMIN");
	console.log(result);
};
hi();
