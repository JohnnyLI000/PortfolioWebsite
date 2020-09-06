import React, { Component } from 'react';
import './css/FrontPageStyle/FrontPage.css';
import FadeIn from 'react-fade-in';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

class FrontPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className = "page-body">
                <div className="front-page-background">
                <div className="color-cover"></div>
                <FadeIn>

                 <div className="introduction">
                    <p>Hi , how are you today . </p>
                    <p>I am Johnny Li.</p> 
                </div>
                <div className="direct-area">
                <button className="direct-button">About me</button>
                <button className="direct-button">Projects</button>
                <button className="direct-button">Contact</button>

                </div>

                </FadeIn>
                </div>
             
               
                </div>
            </React.Fragment>
        )
    }
}

export default FrontPage;