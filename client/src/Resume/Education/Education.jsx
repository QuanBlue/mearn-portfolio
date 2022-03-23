import './style.css';
import React, { useState, useEffect } from "react";
import Card from './Card/Card';


function Education() {
    const [educations, setEducation] = useState([{
        title: '',
        milestone: '',
        content:''
    }])

    useEffect(() => {
        // fetch education
        fetch('/api/education').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then((jsonRes) => {
            setEducation(jsonRes);
        });
    });

    let element_education = educations.map((education, index) => {
        return (
            <Card 
                title = {education.title}
                milestone = {education.milestone}
                content = {education.content}
            /> 
        );
    });

    return (
        <div className="education d-flex flex-column p-3 pt-0">
            <h4 className="time mt-3 mb-0">2020 - 2024</h4>
            <h2 className="stage mb-3">Education milestone</h2>

            { element_education }
        </div>
    );
}

export default Education;
