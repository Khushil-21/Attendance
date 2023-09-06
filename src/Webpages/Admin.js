import { Navbar } from "../Components/Navbar";
import { Background } from "../Components/Background";
import { Footer } from "../Components/Footer";

export const Admin = () => {
	return (
		<div>
			<Navbar />
			<Background />
			<div className="container-fluid section-2">
				<div className="form-container">
					<h1 className="form-heading">
						<span className="letter-1">A</span>dmin
						<span className="letter-1">L</span>og-
						<span className="letter-1">I</span>n
					</h1>
					<form method="post" className="form">
						<input
							className="form-input"
							type="text"
							placeholder="Admin Name"
							onChange={(e) => {
								console.log(e.target.name)
								console.log(e.target.value)
							}}
                        />
						<input
							className="form-input"
							type="password"
							placeholder="Admin password"
							
                        />

						<input type="submit" className="submit-btn" value={"Submit"} />
					</form>

					{/* <button className="submit-btn">Submit</button> */}
				</div>
			</div>
			<Footer />
		</div>
	);
};
