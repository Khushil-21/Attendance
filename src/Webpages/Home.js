import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import AdminIcon from "../Icons/AdminIcon";
import TeacherIcon from "../Icons/TeacherIcon";
import StudentIcon from "../Icons/StudentIcon";
export const Home = () => {
	return (
		<div>
			<Navbar />
			<Background />
			<div className="container-fluid section-1">
				<div className="mainsection">
					<p className="heading1">
						{/* <span class="letter-1">W</span>ant to
          <br> */}
						<span className="letter-1">L</span>ogin{" "}
						<span className="letter-1">A</span>s
						<span className="letter-1">....</span>
					</p>
					<Link to="/Admin" className="login-button">
						<AdminIcon width="47px" height="47px"/>
						Admin
					</Link>
					<Link to="/Teacher" className="login-button">
						<TeacherIcon width="45px" height="45px"/>
						Teacher
					</Link>
					<Link to="/student" className="login-button">
						<StudentIcon width="45px" height="45px"/>
						Student
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};
