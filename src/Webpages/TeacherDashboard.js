import { StudentDetails } from "../Components/StudentDetails";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import TeacherIcon from "../Icons/TeacherIcon";
import { Preloader } from "../Components/Preloader";

export const TeacherDashboard = () => {
	return (
		<div>
			<Preloader />
			{/* <Navbar /> */}
			<div className="teacher">
				<h1 align="center" className="heading">
					<TeacherIcon width="75px" height="75px" />
					Teacher<span className="letter-1">'s&nbsp;</span> Dash
					<span className="letter-1">Board</span>
				</h1>
				<StudentDetails />
			</div>

			{/* <Footer /> */}
		</div>
	);
};
