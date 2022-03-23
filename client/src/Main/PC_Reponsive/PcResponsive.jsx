import './style.css';
import '../../bootstrap-5.0.2/css/bootstrap.min.css';
import React from "react";
import { useState } from 'react';
import Home from '../../Home/Home';
import AboutMe from '../../AboutMe/AboutMe'
import Resume from '../../Resume/Resume';
import Brief_social from '../../Brief_social/Brief_social';


function PcResponsive() {
    function navRightCard(stage) {
        console.log('--stage:', stage);

        if (stage === "home") {
            setElement_rightCard(<Home />);
            document.getElementById("home").style.color = "#FF014F";
            document.getElementById("about").style.color = "gray";
            document.getElementById("resume").style.color = "gray";
        }
        else if (stage === "about me") {
            setElement_rightCard(<AboutMe />);
            document.getElementById("home").style.color = "gray";
            document.getElementById("about").style.color = "#FF014F";
            document.getElementById("resume").style.color = "gray";
        }
        else if (stage === "resume") {
            setElement_rightCard(<Resume />);
            document.getElementById("home").style.color = "gray";
            document.getElementById("about").style.color = "gray";
            document.getElementById("resume").style.color = "#FF014F";
        }
    }

    const [element_rightCard, setElement_rightCard] = useState(<Home />);

    return (
        <div className="main-container d-flex flex-column justify-content-center align-items-center">
            {/* Main-menu */}
            <div className="main-menu d-flex justify-content-around mb-3">
                <button className="" onClick={() => navRightCard("home")}>
                    <i className="fas fa-home icon" id="home">
                        <span class="tooltiptext">Home</span>
                    </i>
                </button>

                <button className="" onClick={() => navRightCard("resume")}>
                    <i className="fas fa-graduation-cap icon" id="resume">
                        <span class="tooltiptext">Resume</span>
                    </i>
                </button>

                <button className="" onClick={() => navRightCard("about me")}>
                    <i className="fas fa-user icon" id="about">
                        <span class="tooltiptext">About me</span>
                    </i>
                </button>


            </div>

            {/* card */}
            <div className="container rounded">
                <div className="d-flex flex-row card">
                    <Brief_social />

                    <div className="right-card">
                        {/* Home subpage */}
                        { element_rightCard }
                    </div>

                </div>
            </div>


        </div>
    );
}

export default PcResponsive;
