import React from "react";
import CalculatorIcon from "../Icons/CalculatorIcon";
import HomeIcon from "../Icons/HomeIcon";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div>
			<nav
				className="navbar navbar-expand-sm navbar-dark "
				data-bs-theme="dark"
			>
				<div className="container-fluid ">
					<Link className="navbar-brand" to="/">
						Attendance
						<CalculatorIcon/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul
							className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
							style={{ "--bs-scroll-height": "100px" }}
						>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									<HomeIcon/>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" onClick={() => { navigate(-1) }}>
									Go Back
								</Link>
							</li>
							
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
