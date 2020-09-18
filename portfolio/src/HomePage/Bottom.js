import React, { Component } from 'react';
import emailjs from "emailjs-com"
import './css/BottomStyle/Bottom.css'
import LetsChat from "./LetsChat.js"
class Bottom extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="background">
                    <div className="profile-image-container"></div>
                </div>
                <div className="about-me-container">
                    Hey again, my name is Johnny Li , a software developer, born in Chong Qing China . Currently based in Auckland. I am majoring in software engineering and game programming at Auckland University of Technology. I have done projects in multi-disciplines, including web app, software, game, mobile app, etc. But the journey of debugging and creativity does not end here…
                <br></br><br></br><br></br>Also, a lover of photography, cooking, fitness, anime, and gaming of course.
                </div>

                <LetsChat></LetsChat>
            </React.Fragment>
        );
    }
}

export default Bottom;