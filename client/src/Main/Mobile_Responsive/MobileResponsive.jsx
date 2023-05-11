import "./style.css";
import "../../bootstrap-5.0.2/css/bootstrap.min.css";

import React from "react";
import Home from "../../Home/Home";
import AboutMe from "../../AboutMe/AboutMe";
import Resume from "../../Resume/Resume";
import BriefSocial from "../../Brief_social/Brief_social";

function MobileResponsive() {
	return (
		<div className="mobile-card">
			<BriefSocial />

			<div className="right-card border-0">
				{/* Home subpage */}
				<section id="s-home">
					<Home />
				</section>
				<section id="s-resume">
					<Resume />
				</section>
				<section id="s-about">
					<AboutMe />
				</section>
			</div>
		</div>
	);
}

export default MobileResponsive;
