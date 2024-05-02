import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin } from "./Webpages/Admin";
import { AdminDashboard } from "./Webpages/AdminDashboard";
import { Home } from "./Webpages/Home";
import { Student } from "./Webpages/Student";
import { Teacher } from "./Webpages/Teacher";
import { TeacherDashboard } from "./Webpages/TeacherDashboard";
import { OverallAttendance } from "./Webpages/OverallAttendance";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { DailyAttendance } from "./Webpages/DailyAttendance";
import { useState } from "react";

function App() {

	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Routes>
					<Route path="" element={<Home />}>
					</Route>
					<Route path="Admin" element={<Admin />}></Route>
					<Route path="AdminDashboard" element={ <AdminDashboard />}></Route>

					<Route path="Teacher" element={<Teacher />}></Route>
					<Route path="TeacherDashboard" element={<TeacherDashboard />}></Route>

					<Route path="Student" element={<Student />}></Route>

					<Route path="Overall-Attendance" element={<OverallAttendance />}></Route>
					<Route path="Daily-Attendance" element={<DailyAttendance />}></Route>
				</Routes>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
