import React from "react";

export const Footer = () => {
	return (
		<div>
			{/* ! footer Starting */}
			<footer className="footer">
				<div className="f1"></div>
				<div className="f2">
					<i className="fa-solid fa-copyright fa-lg" style={{}} />
					CopyRight : Developed By <span className="letter-1">Khushil</span>
				</div>
			</footer>
			{/* ! footer Ending */}
			<div className="error container-fluid">
				<i className="fa-solid fa-triangle-exclamation" />
				<br />
				Your Screen is Smaller Than 279px. This Webpage Can't Work Under 279px
			</div>
		</div>
	);
};
