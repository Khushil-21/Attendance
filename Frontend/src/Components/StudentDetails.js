import React, { useEffect, useState } from "react";
import AbsentIcon from "../Icons/AbsentIcon";
import PresentIcon from "../Icons/PresentIcon";
import DownloadIcon from "../Icons/DownloadIcon";
// import file from "@/Backend/Database/DataFiles/StudentsStatus.csv";
import { DailyIcon } from "../Icons/DailyIcon";
import { EyeIcon } from "../Icons/EyeIcon";
import { Link } from "react-router-dom";
import axios from "axios";
import getBaseUrl from "../../../utils/baseURL";

export const StudentDetails = () => {
	const [SelectedData, setSelectedData] = useState({});
	const [StudentDetails, setStudentDetails] = useState([]);
	const [roll, setRoll] = useState([]);
	const [error, setError] = useState();
	const [text, settext] = useState("false");
	const [absenties, setAbsenties] = useState([]);

	let defaultDate = new Date();
	const [date, setDate] = useState(defaultDate);
	const [Sunday, setsunday] = useState();
	const days = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	};

	const datehandle = (e) => {
		const date = new Date(e.target.value);
		setDate(date);
		setSelectedData({
			...SelectedData,
			Day: days[date.getDay()],
			date: date.toLocaleDateString("en-GB"),
		});
		console.log(SelectedData);
	};

	const activeHandler0 = (e) => {
		const element1 = document.querySelectorAll(
			`input[value=${e.target.value}]`
		);

		if (SelectedData.Lecture === undefined) {
			setError("Please Select Lecture First");
			return;
		}
		setError("");
		setSelectedData({ ...SelectedData, Day: e.target.value });
		const element3 = document.getElementsByClassName("day-selected");
		for (let i of element3) {
			// if (i !== element1[0]) {
			// 	i.classList.remove("lecture-selected");
			// }
			i.classList.remove("day-selected");
		}
		element1[0].classList.toggle("day-selected");
	};

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

		await axios.post(getBaseUrl("GetStudents"), { batch }).then((response) => {
			if (
				response.data.students.length !== undefined &&
				response.data.students.length !== 0
			) {
				setRoll(
					response.data.students.map((value) => {
						return value.RollNo;
					})
				);
				setStudentDetails(response.data.students);
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
		});
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
		console.log(SelectedData);
		console.log(date);
		if (SelectedData.Day !== "Sunday") {
			setsunday();
			await axios
				.post(getBaseUrl("Attendance"), {
					absenties,
					operation: e.target.name,
					roll,
					SelectedData,
				})
				.then((response) => {})
				.catch((er) => {
					console.log(er);
				});
		} else {
			setsunday("Sunday Can't Be Selected");
			console.log(Sunday);
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

				<h3>Select Date</h3>

				<input
					type="date"
					value={date.toLocaleDateString("en-CA")}
					name="dateofbirth"
					id="dateofbirth"
					onChange={datehandle}
				></input>
				<br></br>
				<h5 className="er">{Sunday}</h5>
				{/* <div className="day-container">
					<input
						className="button"
						type="button"
						value="Monday"
						onClick={activeHandler0}
					></input>
					<input
						className="button"
						type="button"
						value="Tuesday"
						onClick={activeHandler0}
					></input>
					<input
						className="button"
						type="button"
						value="Wednesday"
						onClick={activeHandler0}
					></input>
					<input
						className="button"
						type="button"
						value="Thursday"
						onClick={activeHandler0}
					></input>
					<input
						className="button"
						type="button"
						value="Friday"
						onClick={activeHandler0}
					></input>
					<input
						className="button"
						type="button"
						value="Saturday"
						onClick={activeHandler0}
					></input>
				</div> */}

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
			<div className="attendance-container">
				<div className="see-attendance">
					<Link to="/Overall-Attendance">
						<button className="overall" name="overall">
							OverAll
							<EyeIcon />
						</button>
					</Link>
					<Link to="/Daily-Attendance">
						<button className="daily" name="daily">
							Daily
							<DailyIcon />
						</button>
					</Link>
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
													<label className="label-checkbox" for={value.RollNo}>
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
						<a
							// href={file}
							href="/"
							download={SelectedData.Batch}
							target="_blank"
							rel="noreferrer"
						>
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
