import React from "react";
import { Footer } from "../Components/Footer";
import { Background } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import { Preloader } from "../Components/Preloader";
export const Student = () => {
	return (
		<div>
			<Preloader/>
			{/* <Navbar /> */}
			<Background />
			<h1>We will Think Some Thing</h1>
			{/* <Footer /> */}
		</div>
	);
};
