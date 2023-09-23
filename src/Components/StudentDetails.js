import React, { useState } from "react";
import AbsentIcon from "../Icons/AbsentIcon";
import PresentIcon from "../Icons/PresentIcon";
import DownloadIcon from "../Icons/DownloadIcon";
import file from "../Backend/DataFiles/StudentsStatus.csv";

export const StudentDetails = () => {
	const [SelectedData, setSelectedData] = useState({});
	const [StudentDetails, setStudentDetails] = useState([]);
	const [roll, setRoll] = useState([]);
	const [error, setError] = useState();
	const [text, settext] = useState("false");
	const [absenties, setAbsenties] = useState([]);

	const activeHandler1 = (e) => {
		const element1 = document.querySelectorAll(
			`input[value=${e.target.value}]`
		);
		setError("");
		setSelectedData({ ...SelectedData, Lecture: e.target.value });

		const element3 = document.getElementsByClassName("lecture-selected");
		for (let i of element3) {
			// if (i !== element1[0]) {
			// 	i.classList.remove("lecture-selected");
			// }
			i.classList.remove("lecture-selected");
		}
		element1[0].classList.toggle("lecture-selected");
	};
	const activeHandler2 = async (e) => {
		let er = false;
		const element1 = document.querySelectorAll(
			`input[value=${e.target.value}]`
		);
		if (SelectedData.Lecture === undefined) {
			setError("Please Select Lecture First");
			return;
		}
		if (SelectedData.Batch !== e.target.value) {
			setStudentDetails([]);
			settext("false");
			setAbsenties([]);
			er = true;
		}
		setSelectedData({ ...SelectedData, Batch: e.target.value });
		const element2 = document.getElementsByClassName("batch-selected");
		for (let i of element2) {
			// if (i !== element1[0]) {
			// 	i.classList.remove("batch-selected");
			// }
			i.classList.remove("batch-selected");
		}
		element1[0].classList.toggle("batch-selected");
		const batch = e.target.value;
		const res = await fetch("http://localhost:5001/GetStudents", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ batch }),
		});
		const json = await res.json();
		// console.log(json.students.length);
		if (json.students.length !== undefined && json.students.length !== 0) {
			setRoll(
				json.students.map((value) => {
					return value.RollNo;
				})
			);
			setStudentDetails(json.students);
			settext("true");
			document
				.getElementsByClassName("student-list")[0]
				.classList.remove("hide");
		} else {
			if (er === true) {
				document
					.getElementsByClassName("student-list")[0]
					.classList.add("hide");
			}
		}
	};
	const checkHandler = (e) => {
		// console.log(e.target.value);
		if (absenties.indexOf(e.target.value) > -1) {
			setAbsenties(
				absenties.filter((stu) => {
					if (stu === e.target.value) {
						return false;
					}
					return true;
				})
			);
		} else {
			setAbsenties([...absenties, e.target.value]);
		}
	};
	const clickHandler = async (e) => {
		if (e.target.name !== "download") {
			// console.log(e.target.name);
			// console.log(roll);
			let operation = e.target.name;
			const res = await fetch("http://localhost:5001/Attendance", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ absenties, StudentDetails, operation, roll }),
			});
			const json = await res.json();
		} 
	};
	return (
		<div>
			<div className="domain">
				<h5 className="red">{error}</h5>
				<h3>Select Lecture</h3>
				<div className="btn-container">
					<input
						className="button"
						type="button"
						value="Lecture-1"
						onClick={activeHandler1}
					></input>
					<input
						className="button"
						type="button"
						value="Lecture-2"
						onClick={activeHandler1}
					></input>
					<input
						className="button"
						type="button"
						value="Lecture-3"
						onClick={activeHandler1}
					></input>
					<input
						className="button"
						type="button"
						value="Lecture-4"
						onClick={activeHandler1}
					></input>
				</div>
				<h3>Select Batch</h3>
				<div className="btn-container">
					<input
						className="button"
						type="button"
						value="Batch-1"
						onClick={activeHandler2}
					></input>
					<input
						className="button"
						type="button"
						value="Batch-2"
						onClick={activeHandler2}
					></input>
					<input
						className="button"
						type="button"
						value="Batch-3"
						onClick={activeHandler2}
					></input>
					<input
						className="button"
						type="button"
						value="Batch-4"
						onClick={activeHandler2}
					></input>
				</div>
			</div>

			<div className="students">
				{/* <h6 align="center">{JSON.stringify(SelectedData)}</h6> */}
				{/* <h6 align="center">{JSON.stringify(StudentDetails)}</h6> */}

				<div className="student-list hide">
					<div>
						<table className="table">
							<tr>
								<th>{text === "true" ? "Roll-No" : ""}</th>
								<th>{text === "true" ? "Enrollment-No" : ""}</th>
								<th className="left">{text === "true" ? "Name" : ""}</th>
								<th>{text === "true" ? "Check" : ""}</th>
							</tr>
							{StudentDetails.map((value) => {
								return (
									<tr>
										<td align="center">
											{text === "true" ? `${value.RollNo}` : ""}
										</td>
										<td>{text === "true" ? `${value.EnrollNo}` : ""}</td>
										<td align="left">
											{text === "true" ? `${value.Name}` : ""}
										</td>
										<td align="center">
											{text === "true" ? (
												<span>
													<input
														id={value.RollNo}
														className="checkbox"
														type="checkbox"
														value={value.RollNo}
														onChange={checkHandler}
													></input>
													<label for={value.RollNo}>
														<div id="tick_mark"></div>
													</label>
												</span>
											) : (
												""
											)}
										</td>
									</tr>
								);
							})}
						</table>
					</div>
					{/* {absenties} */}
					<div className="actions">
						<button className="absent" name="absent" onClick={clickHandler}>
							Absent
							<AbsentIcon />
						</button>
						<button className="present" name="present" onClick={clickHandler}>
							Present
							<PresentIcon />
						</button>
						<a href={file} download={SelectedData.Batch} target="_blank" rel="noreferrer">
							<button className="download" name="download">
								Download
								<DownloadIcon />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
