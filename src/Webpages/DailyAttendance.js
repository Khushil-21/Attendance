import React, { useEffect, useState } from "react";
import { Preloader } from "../Components/Preloader";
import axios from "axios";
import CalculatorIcon from "../Icons/CalculatorIcon";

export const DailyAttendance = () => {
	const [Daily, setData] = useState({
		Day: "",
		Date: "",
		"Lecture-1": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
		"Lecture-2": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
		"Lecture-3": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
		"Lecture-4": { "Batch-1": [], "Batch-2": [], "Batch-3": [], "Batch-4": [] },
	});
	useEffect(() => {
		window.scroll(0, 0);
		axios.post("http://localhost:5001/Studentportal").then(async (response) => {
			await setData({ ...Daily,...response.data.DailyAttendance });
			console.log(response.data.DailyAttendance);
		});
	}, []);

	return (
		<>
			<Preloader />

			<div className="daily-container">
				{
					<h1 className="Day">
						{Daily.Day.slice(0, -3).toUpperCase()}
						<span className="letter-1">
							{Daily.Day.slice(-3).toUpperCase()}
						</span>  Absentees
					</h1>
				}
				{
					<h1 className="Day">
						{Daily.Date.slice(0, 2)}
						<span className="letter-1">{Daily.Date.slice(2, 3)}</span>
						{Daily.Date.slice(3, 5)}
						<span className="letter-1">{Daily.Date.slice(5, 6)}</span>
						{Daily.Date.slice(6, 12)}
					</h1>
				}
				<br></br>
				{
					<table border="1" cellSpacing="0px" className="daily-attendance">
						<thead>
							<th className="m">
								<CalculatorIcon width="50px" height="50px" />
							</th>
							<th className="up">Lecture-1</th>
							<th className="up">Lecture-2</th>
							<th className="up">Lecture-3</th>
							<th className="up">Lecture-4</th>
						</thead>
						<tr>
							<th className="side">Batch-1</th>
							<td
								className={
									Daily["Lecture-1"]["Batch-1"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-1"]["Batch-1"].length !== 0
									? Daily["Lecture-1"]["Batch-1"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-2"]["Batch-1"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-2"]["Batch-1"].length !== 0
									? Daily["Lecture-2"]["Batch-1"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-3"]["Batch-1"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-3"]["Batch-1"].length !== 0
									? Daily["Lecture-3"]["Batch-1"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-4"]["Batch-1"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-4"]["Batch-1"].length !== 0
									? Daily["Lecture-4"]["Batch-1"].join(" , ")
									: "None"}
							</td>
						</tr>
						<tr>
							<th className="side">Batch-2</th>
							<td
								className={
									Daily["Lecture-1"]["Batch-2"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-1"]["Batch-2"].length !== 0
									? Daily["Lecture-1"]["Batch-2"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-2"]["Batch-2"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-2"]["Batch-2"].length !== 0
									? Daily["Lecture-2"]["Batch-2"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-3"]["Batch-2"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-3"]["Batch-2"].length !== 0
									? Daily["Lecture-3"]["Batch-2"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-4"]["Batch-2"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-4"]["Batch-2"].length !== 0
									? Daily["Lecture-4"]["Batch-2"].join(" , ")
									: "None"}
							</td>
						</tr>
						<tr>
							<th className="side">Batch-3</th>
							<td
								className={
									Daily["Lecture-1"]["Batch-3"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-1"]["Batch-3"].length !== 0
									? Daily["Lecture-1"]["Batch-3"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-2"]["Batch-3"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-2"]["Batch-3"].length !== 0
									? Daily["Lecture-2"]["Batch-3"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-3"]["Batch-3"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-3"]["Batch-3"].length !== 0
									? Daily["Lecture-3"]["Batch-3"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-4"]["Batch-3"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-4"]["Batch-3"].length !== 0
									? Daily["Lecture-4"]["Batch-3"].join(" , ")
									: "None"}
							</td>
						</tr>
						<tr>
							<th className="side">Batch-4</th>
							<td
								className={
									Daily["Lecture-1"]["Batch-4"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-1"]["Batch-4"].length !== 0
									? Daily["Lecture-1"]["Batch-4"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-2"]["Batch-4"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-2"]["Batch-4"].length !== 0
									? Daily["Lecture-2"]["Batch-4"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-3"]["Batch-4"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-3"]["Batch-4"].length !== 0
									? Daily["Lecture-3"]["Batch-4"].join(" , ")
									: "None"}
							</td>
							<td
								className={
									Daily["Lecture-4"]["Batch-4"].length !== 0 ? "yes" : "no"
								}
							>
								{Daily["Lecture-4"]["Batch-4"].length !== 0
									? Daily["Lecture-4"]["Batch-4"].join(" , ")
									: "None"}
							</td>
						</tr>
					</table>
				}
			</div>
		</>
	);
};
