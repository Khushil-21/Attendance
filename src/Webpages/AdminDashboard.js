import React from "react";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import AdminIcon from "../Icons/AdminIcon";
import { Preloader } from "../Components/Preloader";

export const AdminDashboard = () => {
	return (
		<div>
			<Preloader/>
			{/* <Navbar /> */}
			<Background />
			<div className="admindashboard">
				<div>
						<AdminIcon width="100px" height="100px" />
					<h1>
						Admin <span className="letter-1">Dash</span>Board
					</h1>
					<div>
					<div>
						<i class="fa-solid fa-star fa-lg"></i> Can Add and Edit TimeTable{" "}
					</div>
					<div>
						{" "}
						<i class="fa-solid fa-star fa-lg"></i> Can Fill Attendance{" "}
					</div>
					<div>
						{" "}
						<i class="fa-solid fa-star fa-lg"></i> Can Add New Teacher{" "}
					</div>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};
