import React, { Component } from 'react';
import './css/FrontPageStyle/FrontPage.css';
import FadeIn from 'react-fade-in';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { Link, animateScroll as scroll } from "react-scroll";
class FrontPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="page-body">
                    <div className="front-page-background">
                        <div className="color-cover"></div>
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