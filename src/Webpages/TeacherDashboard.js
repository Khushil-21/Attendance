import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
// import { Background } from "../Components/Background";

export const TeacherDashboard = () => {
	const batch = ["Batch-1", "Batch-2", "Batch-3", "Batch-4"];
	const [student, setStudent] = useState([]);
	const GetStudentDetails = async (index) => {
		console.log(batch[batch.length - 1]);
		var x = document.getElementsByClassName("checkbox");
		for(let i=0; i<x.length; i++) {
		   x[i].checked = false;
		 }  
		const res = await fetch("http://localhost:5001/GetStudentDetails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				start: index * 35 + 1,
				end: (index + 1) * 35 + 1,
			}),
		});
		const json = await res.json();
		setStudent(json.student);
	};

	return (
		<div>
			<Navbar />
			<h1 align="center">
				Teacher<span className="letter-1">'s&nbsp;</span> Dash
				<span className="letter-1">Board</span>
			</h1>
			<div className="teacherdashboard">
				<div className="sidebar">
					<div>
					{batch.map((item, index) => {
						return (
							<div>
								<button
									className="tabs"
									onClick={() => {
										GetStudentDetails(index);
									}}
								>
									{item}
								</button>
							</div>
						);
					})}
					</div>
				</div>
				<div className="main">
					<form >
						{student.map((item, index) => {
							return (
								<div>
									<input className="checkbox" type="checkbox"></input>
									{item.roll}&nbsp;&nbsp;{item.name}
								</div>
							);
						})}
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
};
