import React from "react";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import { Preloader } from "../Components/Preloader";
import { Link } from "react-router-dom";
import { EyeIcon } from "../Icons/EyeIcon";
import { DailyIcon } from "../Icons/DailyIcon";
export const Student = () => {
	return (
		<div>
			<Preloader/>
			{/* <Navbar /> */}
			<Background />
			<h1>We will Think Some Thing</h1>
			<div className="attendance-container">
				<div className="see-attendance">
					<Link to="/Overall-Attendance">
						<button className="overall" name="overall">
							OverAll
							<EyeIcon />
						</button>
					</Link>
					<button className="daily" name="daily">
						Daily
						<DailyIcon />
					</button>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};
