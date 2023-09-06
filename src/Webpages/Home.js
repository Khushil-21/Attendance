import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<Background/>
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
						Admin
					</Link>
					<Link to="/Teacher" className="login-button">
						Teacher
					</Link>
					<Link to="/student" className="login-button">
						Student
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};
