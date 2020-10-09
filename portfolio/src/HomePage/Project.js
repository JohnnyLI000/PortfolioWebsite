import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './css/projectStyle/Project.css'

class Project extends Component {

    render() {
        return (
            <div className="project-container">
                <div className="image-container"> 
             
                
                {isURL(this.props.projectLink)
                ?   
               <Link to={this.props.projectLink} className="link-div">             
                <img src={this.props.projectImageURL} className="project-image" alt="Cinque Terre" />
                </Link>
                :
                <a href={this.props.projectLink}>
                <img src={this.props.projectImageURL} className="project-image" alt="Cinque Terre" />
                </a>
                }

                </div>

                <div className="description">
              <div className="title"><a href={this.props.projectLink}>{ this.props.projectName}</a> </div>
                <p>{this.props.projectDescription}</p>
                </div>
            </div>
        );
    }
}
function isURL(link){
    return link.includes("http://");
}
export default Project;