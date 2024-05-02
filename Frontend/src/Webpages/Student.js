import React, { useState } from "react";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import { Preloader } from "../Components/Preloader";
import { Link } from "react-router-dom";
import { EyeIcon } from "../Icons/EyeIcon";
import { DailyIcon } from "../Icons/DailyIcon";
import axios from "axios";

export const Student = () => {
	const FSD_Total = 100;
	const PYTHON_Total = 100;
	const COA_Total = 100;
	const DM_Total = 100;
	const [query, setQuery] = useState();
	const [er, seter] = useState("");
	const [err, seterror] = useState("");
	const [OneStudent, setOneStudet] = useState();
	const clickhandle = (e) => {
		e.preventDefault();
		// console.log(query)
		if (query === undefined || query==="202100217121")  {
			seter();
			setOneStudet();
			seterror("Enter EnrollMent Number First");

			return;
		}
		
		if (/^\d{16}$/.test(query)) {
			seterror();
			seter();
			axios
				.post("http://localhost:5001/GetOneStudent", { query })
				.then((response) => {
					if (response.data.OneStudent) {
						// console.log(response.data.OneStudent);
						setOneStudet(response.data.OneStudent);
					} else {
						setOneStudet();
						seterror("Data Not Found");
					}
				});
		} else {
			setOneStudet();
			seterror();
			seter("Enter Valid 4 Digit Number");
		}
		// console.log(er);
	};
	return (
		<div>
			<Preloader />
			{/* <Navbar /> */}
			{/* <Background /> */}
			<br></br>
			<h1 align="center" className="h">
				Student <span className="letter-1">Portal</span>
			</h1>
			<br></br>
			<div className="student-section">
				<div>
					<div className="function">
						<div className="name">Search </div>
						<div className="search-box-con">
							<form
								class="search-box"
								onSubmit={clickhandle}
								onReset={() => {
									setOneStudet();
									seter();
									seterror();
								}}
							>
								<input
									id="s"
									onChange={(e) => {
										setQuery("202100217121"+e.target.value);
										console.log(query)
									}}
									type="text"
									maxLength="4"
									// pattern="[0-9]{4}"
									// title="Enter Valid 4 Digit Number"
									placeholder="Enter Your Last 4 Digits of EnrollMent Number"
								/>
								<button
									type="reset"
									onClick={() => {
										seterror();
									}}
								></button>
							</form>
						</div>
						<div className="searchbutton">
							<div class="btn-conteiner">
								<div class="btn-content" onClick={clickhandle}>
									<span class="btn-title">NEXT</span>
									<span class="icon-arrow">
										<svg
											width="66px"
											height="43px"
											viewBox="0 0 66 43"
											version="1.1"
										>
											<g
												id="arrow"
												stroke="none"
												stroke-width="1"
												fill="none"
												fill-rule="evenodd"
											>
												<path
													id="arrow-icon-one"
													d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
													fill="#FFFFFF"
												></path>
												<path
													id="arrow-icon-two"
													d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
													fill="#FFFFFF"
												></path>
												<path
													id="arrow-icon-three"
													d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
													fill="#FFFFFF"
												></path>
											</g>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<br></br>
					{er && (
						<h5 align="center" className="er">
							{er}
						</h5>
					)}
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
				</div>
				<div className="studentdata">
					{OneStudent !== undefined && (
						<div>
							<hr className="hr"></hr>
							<h1 className="question">
								ROLL NO : <span className="answer">{OneStudent.RollNo}</span>
							</h1>
							<h1 className="question">
								ENROLL. NO :{" "}
								<span className="answer">{OneStudent.EnrollNo}</span>
							</h1>
							<h1 className="question">
								NAME :{" "}
								<span className="answer">{OneStudent.Name.toUpperCase()}</span>
							</h1>
							<hr className="hr"></hr>
							<h1 className="question">
								Attended <span className="answer">{OneStudent.FSD}</span>{" "}
								lectures of FSD out of{" "}
								<span className="answer">{FSD_Total}</span>
							</h1>
							<h1 className="question">
								Attended <span className="answer">{OneStudent.PYTHON}</span>{" "}
								lectures of PYTHON out of{" "}
								<span className="answer">{PYTHON_Total}</span>
							</h1>
							<h1 className="question">
								Attended <span className="answer">{OneStudent.COA}</span>{" "}
								lectures of COA out of{" "}
								<span className="answer">{COA_Total}</span>
							</h1>
							<h1 className="question">
								Attended <span className="answer">{OneStudent.DM}</span>{" "}
								lectures of DM out of <span className="answer">{DM_Total}</span>
							</h1>
						</div>
					)}
					{err && <h1 className="er">{err}</h1>}
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};
