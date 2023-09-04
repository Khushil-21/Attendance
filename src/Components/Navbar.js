import React from "react";

export const Navbar = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-sm navbar-dark "
				data-bs-theme="dark"
			>
				<div className="container-fluid ">
					<a className="navbar-brand" href="/">
						Attendance
						<i className="fa-solid fa-calculator" />
					</a>
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
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Link
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
