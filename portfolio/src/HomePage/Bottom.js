import React, { Component } from 'react';
import './css/BottomStyle/Bottom.css'
import LetsChat from "./LetsChat.js"
class Bottom extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="bottom-section" id ="about-me">
                <div className="background" >
                    <div className="profile-image-container"></div>
                </div>
                <div className="about-me-container">
                    Hey again , my name is Johnny Li. 
                <br></br><br></br><br></br>Also, a lover of photography, cooking, fitness, anime, and gaming of course.
                </div>
                <LetsChat></LetsChat>
                </div>
            </React.Fragment>
        );
    }
}

export default Bottom;