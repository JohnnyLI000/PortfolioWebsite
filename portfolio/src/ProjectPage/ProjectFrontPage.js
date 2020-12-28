import React, { Component } from 'react';
import './FiservSocialAppStyle/FiservSocialAppStyle.css'
class ProjectFrontPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="project-background">
                    <div className="project-title">
                        <p>fiserv project</p>
                    </div>
                   
                    <div className="project-description">
                        <p>
                            Currently this project is my Research and Development project for Fiserv , the idea is
                            to develop an internal android social app, and to build a bridge
                            between employees.
                        </p>
                    </div>
                    <div className ="project-descripion-2">
                        <p>03/20 - 10/20</p>
                        <p>
                            -----------------------------
                            <br></br>
                            Role: 
                            <br></br>
                            UI/UX designer
                            <br></br>
                            Developer
                            <br></br>
                            -----------------------------
                        </p>
                        <p>Client: Fiserv</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectFrontPage;