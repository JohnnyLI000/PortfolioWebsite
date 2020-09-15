import React, { Component, Image } from 'react';
import './css/projectStyle/Project.css'
class Project extends Component {
    render() {
        return (
            <div className="project-container">
                <div className="image-container"> 
                <a href="#" className="link-div">
                <img src={this.props.projectImageURL} className="project-image" alt="Cinque Terre" />

                </a>
                </div>

                <div className="description">
              <div className="title"><a href={this.props.projectLink}>{ this.props.projectName}</a> </div>
                <p>{this.props.projectDescription}</p>
                </div>
            </div>
        );
    }
}

export default Project;