import React, { Component } from 'react';
import Project from './Project.js'
import './css/projectStyle/ProjectList.scss'
class ProjectList extends Component {
    state = {
        projects:[]
    };

    async componentDidMount(){
        const response = await fetch ('https://x1bf5ud1a0.execute-api.ap-southeast-2.amazonaws.com/Dev');
        const body = await response.json();
        this.setState({projects:body});
        console.log(this.state.projects)
    }

    render() {
        return (
            <React.Fragment>
                <div className="project-list-section" id="project-list">
                    <div className="project-list-section-about-me">
                        <p>My name is Johnny Li, a creative thinker ,a gamer and a developer. Born in Chong Qing China and currently studying at Auckland University of Technology. I am all about presenting your ideas and thoughts into your version and feeling. </p>
                    </div>
                    
                    {this.state.projects.map(project =>
                        <Project key={project.id}
                            projectName={project.projectName}
                            projectDescription = {project.projectDescription}
                            projectImageURL = {project.projectImageURL}
                            projectLink = {project.projectLink}
                    >
                        </Project>)}
                </div>
                <div className="blank-section"></div>
            </React.Fragment>
        );
    }
}

export default ProjectList;