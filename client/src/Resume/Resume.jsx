import './style.css';
import React from "react";
import Education from './Education/Education';
import ProfessionSkill from './ProfessionSkill/ProfessionSkill'
import Interview from './Interview/Interview'

function Resume() {
    return (
        <div className="resume d-flex flex-column px-0 pb-0 pt-1">
            {/* Navigate */}
            <ul className="nav nav-tabs px-1" id='myTab' role="tablist">
                <li className="nav-item col" role="presentation">
                    <button className="nav-link active" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="true">Education</button>
                </li>
                <li className="nav-item col" role="presentation">
                    <button className="nav-link" id="skill-tab" data-bs-toggle="tab" data-bs-target="#skill" type="button" role="tab" aria-controls="skill" aria-selected="false">Skill</button>
                </li>
                <li className="nav-item col" role="presentation">
                    <button className="nav-link" id="interview-tab" data-bs-toggle="tab" data-bs-target="#interview" type="button" role="tab" aria-controls="interview" aria-selected="true">Interview</button>
                </li>
            </ul>

             {/* Navigate control */}
             <div className="tab-content mt-4" id="myTabContent">
                <div className="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
                    <Education />
                </div>
                <div className="tab-pane fade" id="skill" role="tabpanel" aria-labelledby="skill-tab">
                    <ProfessionSkill />
                </div>
                <div className="tab-pane fade" id="interview" role="tabpanel" aria-labelledby="interview-tab">
                    <Interview />
                </div>
            </div> 
        </div>
    );
}

export default Resume;
