import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Background } from "../Components/Background";
import { Footer } from "../Components/Footer";
import {useNavigate} from 'react-router-dom'

export const Teacher = () => {
	const [Data, setData] = useState({});
    const [nameerror, setNameerror] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const navigate = useNavigate()
	const Submit = async (e) => {
        e.preventDefault();
        const {name,password}=Data
        const res = await fetch("http://localhost:5001/TeacherAuthentication", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,password})
        })
        const json = await res.json()
        console.log(json.nameerror)
        console.log(json.passworderror)
        if (json.nameerror === "" && json.passworderror === "") {
            
            navigate("/TeacherDashboard")
        }
        else {
            setNameerror(json.nameerror)
            setPassworderror(json.passworderror)
        }
	};
	return (
        <div>
            <Navbar />
            <Background/>
			<div className="container-fluid section-2">
				<div className="form-container">
					<h1 className="form-heading">
						<span className="letter-1">T</span>eacher{" "}
						<span className="letter-1">L</span>og-
						<span className="letter-1">I</span>n
					</h1>
					<form className="form" method="post" onSubmit={Submit} >
						<input
							className="form-input"
							type="text"
							placeholder="Teacher Short Name"
							onChange={(e) => {
								setData({...Data,"name":e.target.value});
							}}
						/>
						<span className="red">{nameerror}</span>
						<input
							className="form-input"
							type="password"
							placeholder="Teacher password"
							onChange={(e) => {
								setData({...Data,"password":e.target.value});
							}}
						/>
						<span className="red">{passworderror}</span>
						<input type="submit" className="submit-btn" defaultValue="Submit" />
					</form>
				</div>
            </div>
            <Footer/>
		</div>
	);
};