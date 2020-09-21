import React, { Component } from 'react';
import './css/FrontPageStyle/FrontPage.css';
import FadeIn from 'react-fade-in';
import { Link, animateScroll } from "react-scroll";
class FrontPage extends Component {
    state = {}
    render() {
        return (

            <React.Fragment>

                <div className="page-body">

                    <div className="color-cover"></div>
                    <video id="background-video" autoPlay muted loop>
                        <source src="https://jonnnyportfolioimagebucket.s3-ap-southeast-2.amazonaws.com/video/backgroundVideo.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                        </video>
                    <div id="background-video-nav">
                        <FadeIn>
                            <div className="introduction">
                                <p>Hey ,  </p>
                                <p>I am Johnny Li .</p>
                            </div>
                            <div className="direct-area">
                                <Link
                                    className="direct-button"
                                    activeClass="active"
                                    to="project-list"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Project </Link>

                                <Link
                                    className="direct-button"
                                    activeClass="active"
                                    to="about-me"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >About me</Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default FrontPage;