import { Navbar } from "../Components/Navbar";
import { Background } from "../Components/Background";
import { Footer } from "../Components/Footer";

export const Teacher = () => {
	
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
					<form className="form" method="post" >
						<input
							className="form-input"
							type="text"
							placeholder="Teacher Short Name"
							
						/>
						<input
							className="form-input"
							type="password"
							placeholder="Teacher password"
							
						/>
						<input type="submit" className="submit-btn" defaultValue="Submit" />
					</form>
				</div>
            </div>
            <Footer/>
		</div>
	);
};
