import React, { Component } from 'react';
import Project from './Project.js'
import './css/projectStyle/ProjectList.scss'
class ProjectList extends Component {
    state = {
        projectList: [
            {
                id: 1,
                projectTitle: "project name",
                projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                projectImagePath: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
                projectLink: "https://www.w3schools.com/cssref/pr_font_weight.asp"
            },
            {
                id: 2,
                projectTitle: "project name",
                projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                projectImagePath: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
                projectLink: "https://www.w3schools.com/cssref/pr_font_weight.asp"
            },
        ]
    };
    render() {
        return (
            <React.Fragment>
                <div className="page-background">
                    <div className="about-me">
                        <p>My name is Johnny Li, a creative thinker ,a gamer and a developer. Born in Chong Qing China and currently studying at Auckland University of Technology. I am all about presenting the ideas into your version and feeling. </p>
                    </div>
                    {this.state.projectList.map(project =>
                        <Project key={project.id}
                            projectTitle={project.projectTitle}
                            projectDescription = {project.projectDescription}
                            projectImagePath = {project.projectImagePath}
                            projectLink = {project.projectLink}
                    >
                        </Project>)}
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectList;