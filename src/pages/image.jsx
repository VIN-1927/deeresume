
import React, { Component } from "react";
import CoverPage from '../assets/coverpage.png';

class Image extends Component {
	render() {
		const myStyle = {
			backgroundImage: `url(${CoverPage})`,
			height: "100vh",
			marginTop: "110px",
			fontSize: "10px",
			marginLeft: "300px",
			width: "1900px",
			backgroundRepeat: "no-repeat",
		};

		const headingStyle = {
			margin: "0",
			padding: "20px",
			textAlign: "center",  
			color: "#000",      
		};

		return (
			<div style={myStyle}>	
				<h3 style={headingStyle}>IT PROFESSIONAL</h3>
			</div>
		);
	}
}

export default Image;
