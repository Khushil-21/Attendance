import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Background } from "../Components/Background";
import { Footer } from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
	const [Data, setData] = useState({});
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const ChangeHandler = (e) => {
		setData({ ...Data, [e.target.name]: e.target.value });
	};

	const Submit = async (e) => {
		e.preventDefault();
		const { username, password } = Data;
		const res = await fetch("http://localhost:5001/UserAuthentication", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password, role: "ADMIN" }),
		});
		const json = await res.json();
		console.log(json.AuthenticationStatus);

		if (json.AuthenticationStatus === "Successful") {
			navigate("/AdminDashboard");
		}
		else {
			setError("Invalid Credentials")
		}
	};
	return (
		<div>
			<Navbar />
			<Background />
			<div className="container-fluid section-2">
				<div className="form-container">
					<h1 className="form-heading">
						<span className="letter-1">A</span>dmin
						<span className="letter-1">L</span>og-
						<span className="letter-1">I</span>n
					</h1>
					<form method="post" onSubmit={Submit} className="form">
						<input
							className="form-input"
							type="text"
							placeholder="Admin Name"
							name="username"
							onChange={ChangeHandler}
						/>
						<input
							className="form-input"
							type="password"
							name="password"
							placeholder="Admin password"
							onChange={ChangeHandler}
						/>
						<p className="red">{error}</p>
						<input type="submit" className="submit-btn" value={"Submit"} />
					</form>
					{/* {JSON.stringify(Data)} */}
				</div>
			</div>
			<Footer />
		</div>
	);
};
