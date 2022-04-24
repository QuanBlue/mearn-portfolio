import './style.css';
import React, { useEffect, useState } from "react";
import Skill from './Skill/Skill';


function ProfessionSkill() {
    const [devSkills, setDevSkill] = useState([{
        _id: '',
        name: '',
    }]);
    
    const [desSkills, setDesSkill] = useState([{
        _id: '',
        name: '',
    }]);

    const [toolkits, setToolkit] = useState([{
        _id: '',
        name: '',
    }]);

    useEffect(() => {
        // fetch dev skill
        fetch('/api/dev-skill').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then((jsonRes) => {
            setDevSkill(jsonRes);
        });

        // fetch des skill
        fetch('/api/des-skill').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then((jsonRes) => {
            setDesSkill(jsonRes);
        });

        // fetch toolkit
        fetch('/api/toolkit').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then((jsonRes) => {
            setToolkit(jsonRes);
        });
    });

    let element_devSkill = devSkills.map((devSkill, index) => {
        return (
            <Skill
                name={devSkill.name}
            />
        );
    });

    let element_toolkit = toolkits.map((toolkit, index) => {
        return (
            <Skill
                name={toolkit.name}
                percent={toolkit.percent}
            />
        );
    });

    let element_desSkill = desSkills.map((desSkill, index) => {
        return (
            <Skill
                name={desSkill.name}
                percent={desSkill.percent}
            />
        );
    });
    return (
        <div className="d-flex flex-column p-4 py-3 mb-3 pt-0">
            <div className="row">
                <div className='col-6'>
                    <div>
                        <h1 className="title-skill">Design Skill</h1>
                        <div className='d-flex flex-wrap'>
                            {element_desSkill}
                        </div>
                    </div>

                    <div>
                        <h1 className="title-skill">Toolkit</h1>
                        <div className='d-flex flex-wrap'>
                            {element_toolkit}
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <div>
                        <h1 className="title-skill">Development Skill</h1>
                        <div className='d-flex flex-wrap'>
                            {element_devSkill}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionSkill;
