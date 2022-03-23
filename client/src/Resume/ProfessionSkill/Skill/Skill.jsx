import './style.css';
import '../../../bootstrap-5.0.2/css/bootstrap.min.css';
import React from "react";


function Skill(props) {
    return (
        <div className='skill'>
            <h4 className="name m-2 p-3">{props.name}</h4>

        </div>
    );
}

export default Skill;

