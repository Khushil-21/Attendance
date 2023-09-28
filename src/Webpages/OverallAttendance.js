/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Preloader } from "../Components/Preloader";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import axios from "axios";
import { BugIcon } from "../Icons/BugIcon";

export const OverallAttendance = () => {
  const [displaystudents, SetDisplayStudents] = useState([]);

	const FSD_Total = 100;
	const PYTHON_Total = 100;
	const COA_Total = 100;
	const DM_Total = 100;

  useEffect(() => {
    window.scrollTo(0, 	0)
		axios
			.post("http://localhost:5001/GetStudents", { batch: "All" })
			.then((response) => {
				// console.log(response.data.students)
				SetDisplayStudents(response.data.students);
			});
  }, []);
  
  const seacrhHandler = async(e) => {
    await axios
			.post("http://localhost:5001/SearchStudents", { searchQuery: e.target.value.trimEnd() })
			.then((response) => {
        // console.log(response.data.students[0])
        if (response.data.students === undefined) {
          
          SetDisplayStudents([]);
        } else {
          SetDisplayStudents(response.data.students);
          
        }
			});
  }
  

	return (
		<div>
			<Preloader />
			{/* <Navbar /> */}
			<div>
				<br></br>
				<h1 align="center">Overall Attendance</h1>
				<div className="search-form">
					<label for="search">Search</label>

					<div className="e">
						<input id="search" type="search" maxLength="100"  required onChange={seacrhHandler} />
						<span className="caret"></span>
					</div>

					<div class="dropdown">
						<a
							className="btn btn-secondary dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Filter Button
						</a>

						<ul className="dropdown-menu">
							<li className="dropdown-item">Attendance Above 75%</li>
							<li className="dropdown-item">Attendance Below 75%</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="overall-data">
				{/* {JSON.stringify(displaystudents)} */}

				{displaystudents.length!==0 && (
					<table border="1" cellSpacing="0px" className="all-attendance">
						<tr className="table-heading">
							<th rowSpan="2">Roll-NO</th>
							<th rowSpan="2">Enrollment-NO</th>
							<th rowSpan="2">Name</th>
							<th rowSpan="2">Batch</th>
							<th colSpan="4">Attended Lectures (Out of 100)</th>
							<th colSpan="4">Total Attendance (%)</th>
							<th rowSpan="2"> Grand Total </th>
							<th rowSpan="2">Action</th>
						</tr>
						<tr className="table-heading">
							<th>FSD</th>
							<th>PYTHON</th>
							<th>COA</th>
							<th>DM</th>
							<th>FSD</th>
							<th>PYTHON</th>
							<th>COA</th>
							<th>DM</th>
						</tr>
						{displaystudents.map((student) => {
							return (
								<tr className="hover">
									<td>{student.RollNo}</td>
									<td>{student.EnrollNo}</td>
									<td>{student.Name}</td>
									<td>{student.Batch}</td>
									<td>{student.FSD}</td>
									<td>{student.PYTHON}</td>
									<td>{student.COA}</td>
									<td>{student.DM}</td>
									<td
										className={
											(student.FSD / FSD_Total) * 100 >= 90
												? "above"
												: (student.FSD / FSD_Total) * 100 <= 75
												? "below"
												: ""
										}
									>
										{(student.FSD / FSD_Total) * 100}%
									</td>
									<td
										className={
											(student.FSD / FSD_Total) * 100 >= 90
												? "above"
												: (student.FSD / FSD_Total) * 100 <= 75
												? "below"
												: ""
										}
									>
										{(student.PYTHON / PYTHON_Total) * 100}%
									</td>
									<td
										className={
											(student.FSD / FSD_Total) * 100 >= 90
												? "above"
												: (student.FSD / FSD_Total) * 100 <= 75
												? "below"
												: ""
										}
									>
										{(student.COA / COA_Total) * 100}%
									</td>
									<td
										className={
											(student.FSD / FSD_Total) * 100 >= 90
												? "above"
												: (student.FSD / FSD_Total) * 100 <= 75
												? "below"
												: ""
										}
									>
										{(student.DM / DM_Total) * 100}%
									</td>
									<td
										className={
											(student.FSD / FSD_Total) * 100 >= 90
												? "above"
												: (student.FSD / FSD_Total) * 100 <= 75
												? "below"
												: ""
										}
									>
										{(((student.DM / DM_Total) * 100 + (student.FSD / FSD_Total) * 100 + (student.COA / COA_Total) * 100 +(student.PYTHON / PYTHON_Total) * 100  ) /4).toFixed(2)}%
									</td>
									<td className="report"> <BugIcon/> Report a Bug</td>
								</tr>
							);
						})}
					</table>
				)}
			</div>

			{/* <Footer /> */}
		</div>
	);
};
