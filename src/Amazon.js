import React from "react";
import './Amazon.css'



function Amazon() {
    return (
        <div className="container-fluid">
            <div className="nav first">
                <div className="col d-flex ">
                    <div className=" name1  ">
                        <div className="name">Amit</div>
                        <span>toggle</span>
                    </div>
                    <div className="name2 ">
                        <div className="list">
                            <ul >
                                <li>Home</li>
                                <li>Service</li>
                                <li>Experience</li>
                                <li>Portfolio</li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                    <button className="button">Contact Us
                    </button>
                </div>
            </div>
            <div className="intro d-flex">
                <div className="txt">
                    <div className="txte1">
                        <span className="txt3">Hy! I Am</span>

                        <span className="txt1">Amit Patel</span>

                        <span className="txt2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's standard dummy text ever since 1500</span>

                    </div>
                    <button className="buttons">Hire Me</button>
                    <div className="images">
                        <img src="/Img/github.png" alt=""></img>
                        <img src="/Img/linkedin.png" alt=""></img>
                        <img src="/Img/instagram.png" alt=""></img>
                    </div>
                </div>
                <div className="i-right">
                    <img src="/Img/Vector1.png" alt="" className="vector1"></img>
                    <img src="/Img/Vector2.png" alt="" className="vector2"></img>
                    <img src="/Img/boy.png" alt="" className="boy"></img>
                   
                </div>
            </div>
        </div>
    );
}

export default Amazon;