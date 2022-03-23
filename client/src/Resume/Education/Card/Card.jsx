import './style.css';
import React from "react";


function Card(props) {
    return (
        <div className=" d-flex flex-column p-4 py-3 mb-3">
            <div className="row row-card">
                <div className="col-1 d-flex justify-content-center align-items-center"> 

                    <span className="dot" >
                        <span className="dot-inner" />
                    </span>
                </div>
                <div className="e-card col">
                    <h3 className="title mb-0">{props.title}</h3>
                    <h5 className="milestone mb-3">{props.milestone}</h5>            

                    <p className="brief-content">{props.content}</p>
                </div>
            </div>    

        </div>
    );
}

export default Card;
