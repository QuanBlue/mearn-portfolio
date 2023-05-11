import "./style.css";
import React from "react";
import avatar from "../../src/pic/Avatar.jpg";

function Home() {
	return (
		<div className="brief-card d-flex flex-column justify-content-center align-items-center pt-5">
			<div className="avatar mt-4 mx-4">
				<img src={avatar} alt="avatar" />
			</div>

			<h3 className="myname mb-0 mt-3">Thanh Quân</h3>
			<h4 className="mb-5">S&nbsp;t&nbsp;u&nbsp;d&nbsp;e&nbsp;n&nbsp;t</h4>

			<div className="icons row p-2 mt-5 d-flex justify-content-center">
				<a
					href="https://github.com/QuanBlue"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-github-alt icon-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/quanblue/"
					rel="noreferrer"
					target="_blank"
				>
					<i
						className="fab fa-linkedin-in icon-linkedin"
						aria-hidden="true"
					></i>
				</a>

				<a
					href="https://www.facebook.com/QuanBlueee/"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-facebook-f icon-fb"></i>
				</a>
				<a
					href="https://www.instagram.com/quanblueee/"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-instagram icon-insta"></i>
				</a>
			</div>
		</div>
	);
}

export default Home;
