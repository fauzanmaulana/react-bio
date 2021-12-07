import React, { Component } from "react";
import profileImage from "../../../images/profiles.png";

const containerStyle = {
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

class BioInlineCssStyle extends Component {
	render() {
		return (
			<div
				// container class style
				style={containerStyle}
			>
				<div
					// bio-card class style
					style={{
						display: "inline-block",
						textAlign: "center",
						boxShadow: "10px 10px 45px rgba(0, 0, 0, 0.45)",
						padding: "30px",
						borderRadius: "10px",
					}}
				>
					<img src={profileImage} alt="profile" width="200" />

					<h1>Nama : {this.props.nama}</h1>
					<h1>Umur : {this.props.umur}</h1>
					<h1>Hobby : </h1>
					<ul>
						{/* list-hobby class style */}
						{this.props.hobby.map((item, idx) => (
							<li style={{ fontSize: "25px", textAlign: "left" }} key={idx}>
								{item}
							</li>
						))}

						{this.props.hobby.map((item) => {
							return <li>{item}</li>;
						})}
					</ul>
					<h1>Menikah: {this.props.menikah ? "sudah" : "belum"}</h1>

					<button onClick={() => this.props.sayHello(this.props.nama)}>
						Say Hello
					</button>
				</div>
			</div>
		);
	}
}

export default BioInlineCssStyle;
