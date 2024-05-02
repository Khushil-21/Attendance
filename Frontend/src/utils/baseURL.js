export default function getBaseUrl(url) {
	console.log(process.env.NODE_ENV);
	console.log(process.env.BACKEND_URL);
	console.log(`${process.env.BACKEND_URL}/${url}`);
	// Assuming you have different base URLs for development, staging, and production environments
	if (process.env.NODE_ENV === "development") {
		return `http://localhost:5001/${url}`; // Update this with your local server URL
	} else if (process.env.NODE_ENV === "staging") {
		return `https://staging.example.com/${url}`; // Update this with your staging server URL
	} else {
		return `https://production-attendance-backend.vercel.app/${url}`; // Update this with your production server URL
	}
}
