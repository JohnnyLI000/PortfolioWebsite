import React, { Component, Image } from 'react';
import './css/projectStyle/Project.css'
class Project extends Component {
    render() {
        console.log('props: ', this.props);
        return (
            <div className="project-container">

                <div className="image-container"> 
                <a href="#" class="link-div">
                <img src={this.props.projectImagePath} className="project-image" alt="Cinque Terre" />

                </a>
                </div>

                <div className="description">
              <div className="title"><a href={this.props.projectLink}>{ this.props.projectTitle}</a> </div>
                <p>{this.props.projectDescription}</p>
                </div>
            </div>
        );
    }
}

export default Project;