import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import TeacherIcon from "../Icons/TeacherIcon";
import { Preloader } from "../Components/Preloader";
export const Teacher = () => {
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
			body: JSON.stringify({ username, password, role: "TEACHER" }),
		});
		const json = await res.json();
		console.log(json.AuthenticationStatus);

		if (json.AuthenticationStatus === "Successful") {
			navigate("/TeacherDashboard");
		} else {
			setError("Invalid Credentials");
		}
	};
	return (
		<div>	
			<Preloader/>
			<Navbar />
			<Background />
			<div className="container-fluid section-2">
				<div className="form-container">
					<TeacherIcon width="120px" height="120px" />
					<br></br>
					<h1 className="form-heading">
						<span className="letter-1">T</span>eacher{" "}
						<span className="letter-1">L</span>og-
						<span className="letter-1">I</span>n
					</h1>
					<form className="form" method="post" onSubmit={Submit}>
						<input
							className="form-input"
							type="text"
							placeholder="Teacher Short Name"
							name="username"
							onChange={ChangeHandler}
						/>
						<input
							className="form-input"
							type="password"
							placeholder="Teacher password"
							name="password"
							onChange={ChangeHandler}
						/>
						<p className="red">{error}</p>
						<input type="submit" className="submit-btn" defaultValue="Submit" />
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};
