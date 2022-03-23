import './style.css';
import React from "react";

function Home() {
    let age = new Date().getFullYear() - 2001;

    return (
        <div className="d-flex flex-column p-4 pt-0">
            <h1 className="my-4 title-aboutme">About me</h1>
            <div className="row mt-2">
                <div className="col-6">
                    <p> 
                        <b>First Name:</b>
                        &nbsp; Nguyen Thanh
                    </p>
                    <p> 
                        <b>Last Name:</b>
                        &nbsp; Quan
                    </p>
                    <p> 
                        <b>Age:</b>
                        &nbsp;{age} Years old
                    </p>
                    <p> 
                        <b>Address:</b>
                        &nbsp; Cam Ranh city, Khanh Hoa province
                    </p>              
                </div>

                <div className="col-6">    
                    <p> 
                        <b>Nationality:</b>
                        &nbsp; Viet Nam
                    </p>
                    <p> 
                        <b>Language:</b>
                        &nbsp; Vietnamese, English
                    </p>
                    <p className='email'> 
                        <b>Email:</b>
                        &nbsp; quannguyenthanh558@gmail.com
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <p className="message"> 
                    Have a nice day, my friend &nbsp;
                    <i class="far fa-heart"></i>
                </p>
            </div>
        </div>
    );
}

export default Home;
