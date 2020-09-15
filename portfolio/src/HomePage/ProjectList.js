import React, { Component } from 'react';
import Project from './Project.js'
import './css/projectStyle/ProjectList.scss'
class ProjectList extends Component {
    state = {
        // projectList: [
        //     {
        //         id: 1,
        //         projectTitle: "Fiserv Social App",
        //         projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         projectImagePath: "https://jonnnyportfolioimagebucket.s3.ap-southeast-2.amazonaws.com/Fiserv-logo-01.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aDmFwLXNvdXRoZWFzdC0yIkcwRQIgNSATuRKeX8udX6WGX5Wi9EhMSN4LkoNK0M3YTupGtSICIQC3b7OCQfkoiAIBngjR6aEWLfiRrazSbVi%2BbQYSSLtN7irEAgg4EAAaDDE2MDY5OTQ4NzI0MyIMi9jty9kjSxJv%2FYLBKqECEPnfyB5hfCgeHfC0vF6gArD%2Fza8eiZ8mZ7NQe6h3%2BKIYQKvUGWKlJxfQXYtmTQQOtSvfz2Sili7SUuLDlZInh6Wj0GV8iIrU91jXB0gFlHxmIdaDSQCFyigNFaIIZgUqTwUlfo5isGqgPBD2Dk3p3QKXvxJC%2BJ%2F21HzTxBNW8Kgxqb7AqkQxtLEBQdFijL%2FDhBdL3nK8f63w%2B7o3j%2FQ2N230lvbw9TNZ4rsBveOCReY5%2BjlC0ZB%2BcoVbJdgSW%2Bkp2hQDvlyPGDsR5v6CvOV8RYgTALwMAY9N7zc9nvxwos%2FaSsA4%2F6omC%2BV0qC%2FzQHXdlXLdtUpDIMJuWwlT67MlmfEbhzr8FvOblH0nw%2FCkAFG72sGlN0tW%2F5KULTq%2BLi9iBTC%2FjeD6BTqwAhR8a%2FP5x5zxHlXYt06fldq0j4xQUwfydyUZ70kqD4kJ%2BTpjFhgj1e%2B4RmOA9lKc4drvhI2aklDSh%2FGkQ5TRIZBRdU4IqXyZlUJlKZWDrUEip%2BXa5uZDTdHAAINp0WElt71TVdUto6V3GOXVBkCiuXps6c%2BU2%2BhbPBhPtAFRECZ%2BRz5vweWJLBddgrmCwW7GqBYdsiD9%2BOsT1zCi7CpRnbGhdweYCrxK5MDRqMWH3TekKTSq1VnJzTDZw3YQu5t9xiWYDoH4xsNYzsbZ6FHTleXErBLlba3L%2FauNKg6y3zYk3jHIvkD0BBofj7HtxmAo6HuouhQF5qD9PDYqXFD17Q4advcMp4jO%2B2Ni8CHRJiKcbs683GBPcZJ9j1SVk2i9hWQ0QJDmiRGB3WHdVAs%2FyxM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200909T093833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASK2TPSQFQZ3Z2ZAE%2F20200909%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=be68f42e9b11a841b1d89b96b8382b1490cc13e50d2aa16b8f04162ae71458be",
        //         projectLink: "https://www.w3schools.com/cssref/pr_font_weight.asp"
        //     },
        //     {
        //         id: 2,
        //         projectTitle: "Space Invaders",
        //         projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         projectImagePath: "https://jonnnyportfolioimagebucket.s3.ap-southeast-2.amazonaws.com/Space%20invader%20logo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aDmFwLXNvdXRoZWFzdC0yIkcwRQIgNSATuRKeX8udX6WGX5Wi9EhMSN4LkoNK0M3YTupGtSICIQC3b7OCQfkoiAIBngjR6aEWLfiRrazSbVi%2BbQYSSLtN7irEAgg4EAAaDDE2MDY5OTQ4NzI0MyIMi9jty9kjSxJv%2FYLBKqECEPnfyB5hfCgeHfC0vF6gArD%2Fza8eiZ8mZ7NQe6h3%2BKIYQKvUGWKlJxfQXYtmTQQOtSvfz2Sili7SUuLDlZInh6Wj0GV8iIrU91jXB0gFlHxmIdaDSQCFyigNFaIIZgUqTwUlfo5isGqgPBD2Dk3p3QKXvxJC%2BJ%2F21HzTxBNW8Kgxqb7AqkQxtLEBQdFijL%2FDhBdL3nK8f63w%2B7o3j%2FQ2N230lvbw9TNZ4rsBveOCReY5%2BjlC0ZB%2BcoVbJdgSW%2Bkp2hQDvlyPGDsR5v6CvOV8RYgTALwMAY9N7zc9nvxwos%2FaSsA4%2F6omC%2BV0qC%2FzQHXdlXLdtUpDIMJuWwlT67MlmfEbhzr8FvOblH0nw%2FCkAFG72sGlN0tW%2F5KULTq%2BLi9iBTC%2FjeD6BTqwAhR8a%2FP5x5zxHlXYt06fldq0j4xQUwfydyUZ70kqD4kJ%2BTpjFhgj1e%2B4RmOA9lKc4drvhI2aklDSh%2FGkQ5TRIZBRdU4IqXyZlUJlKZWDrUEip%2BXa5uZDTdHAAINp0WElt71TVdUto6V3GOXVBkCiuXps6c%2BU2%2BhbPBhPtAFRECZ%2BRz5vweWJLBddgrmCwW7GqBYdsiD9%2BOsT1zCi7CpRnbGhdweYCrxK5MDRqMWH3TekKTSq1VnJzTDZw3YQu5t9xiWYDoH4xsNYzsbZ6FHTleXErBLlba3L%2FauNKg6y3zYk3jHIvkD0BBofj7HtxmAo6HuouhQF5qD9PDYqXFD17Q4advcMp4jO%2B2Ni8CHRJiKcbs683GBPcZJ9j1SVk2i9hWQ0QJDmiRGB3WHdVAs%2FyxM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200909T094308Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASK2TPSQFQZ3Z2ZAE%2F20200909%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=84ebcf06b9ee8dd6fe081ea1e9e86cd2470db96f900699b43dcae3f06f516260",
        //         projectLink: "https://www.w3schools.com/cssref/pr_font_weight.asp"
        //     },
        //     {
        //         id: 3,
        //         projectTitle: "Helicopter game",
        //         projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         projectImagePath: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        //         projectLink: "https://www.w3schools.com/cssref/pr_font_weight.asp"
        //     },
        //     {
        //         id: 4,
        //         projectTitle: "Attack on Titan game",
        //         projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         projectImagePath: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        //         projectLink: "https://www.w3schools.com/cssref/pr_font_weight.asp"
        //     },

        // ]
        projects:[]
    };

    async componentDidMount(){
        const response = await fetch ('https://x1bf5ud1a0.execute-api.ap-southeast-2.amazonaws.com/Dev');
        const body = await response.json();
        this.setState({projects:body});
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-background">
                    <div className="about-me">
                        <p>My name is Johnny Li, a creative thinker ,a gamer and a developer. Born in Chong Qing China and currently studying at Auckland University of Technology. I am all about presenting your ideas and thoughts into your version and feeling. </p>
                    </div>
                    {this.state.projects.map(project =>
                        <Project key={project.id}
                            projectName={project.projectName}
                            projectDescription = {project.projectDescription}
                            projectImageURL = {project.projectImageURL}
                    >
                        </Project>)}
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectList;