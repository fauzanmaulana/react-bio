import React, { Component } from "react";
import profileImage from "../images/profiles.png";

class ClassCompBio extends Component {
	render() {
		return (
			// 	<div>
			// 		<img src={profileImage} alt="profile" width="200" />
			// 		<h1 style={{ color: "red", fontSize: "50px" }}>
			// 			Nama : {this.props.nama}
			// 		</h1>
			// 		<h1 className={compBioCss.text_danger}>Umur : {this.props.umur}</h1>
			// 		<h1>Hobby : </h1>
			// 		<ul>
			// 			{this.props.hobby.map((item, idx) => (
			// 				<li className="list-hobby" key={idx}>
			// 					{item}
			// 				</li>
			// 			))}

			// 			{this.props.hobby.map((item) => {
			// 				return <li>{item}</li>;
			// 			})}
			// 		</ul>
			// 		<h1>Menikah: {this.props.menikah ? "sudah" : "belum"}</h1>

			// 		<button onClick={() => this.props.sayHello(this.props.nama)}>
			// 			Say Hello
			// 		</button>
			// 	</div>
			// );

			<div className="container">
				<div className="bio-card">
					<img src={profileImage} alt="profile" width="200" />
					<h1>Nama : {this.props.nama}</h1>
					<h1>Umur : {this.props.umur}</h1>
					<h1>Hobby : </h1>
					<ul>
						{this.props.hobby.map((item, idx) => (
							<li className="list-hobby" key={idx}>
								{item}
							</li>
						))}

						{/* {this.props.hobby.map((item) => {
                            return <li>{item}</li>;
                        })} */}
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

export default ClassCompBio;
