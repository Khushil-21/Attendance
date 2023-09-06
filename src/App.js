import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin } from "./Webpages/Admin";
import { AdminDashboard } from "./Webpages/AdminDashboard";
import { Home } from "./Webpages/Home";
import { Student } from "./Webpages/Student";
import { Teacher } from "./Webpages/Teacher";
import { TeacherDashboard } from "./Webpages/TeacherDashboard";


function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Admin" element={<Admin />}></Route>
					<Route path="/Teacher" element={<Teacher />}></Route>
					<Route path="/Student" element={<Student />}></Route>
					<Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
					<Route path="/TeacherDashboard" element={<TeacherDashboard />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
