import React, { Component } from 'react';
import './FiservSocialAppStyle/FiservSocialAppStyle.css'
class FiservSocialAppProject extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <React.Fragment>
                <div className = "page-body">
                <div className="project-background">
                  <div className ="project-title">
                  <h1>fiserv project</h1>
                  </div>
                <div className="project-descrption">
                    <p>description</p>
                </div>
                </div>
                <div className="second page"><p>The Fiserv Team had an issue with the security of the events, 
                their main issue was authentication. The events are made through a wiki which meant that other people could modify information in the events and provide false information which was not secure. Employees had to manually sign up to events and write down all the information through the wiki which results in storing too much data. Another issue was that it could only be done through a work device, if an employee didn’t have their work device, they wouldn’t be able to create or see any of the events.
                 This also meant that employees wouldn’t be able to receive announcements or emergency alerts if they weren’t on their work device.</p>
                 <br></br>
                 <p>They wanted to be able to have an app for their employees so that it was easy to create, view and attend event through the ease of 
                     their phones as well as higher security so that only the owner of an event could modify the details. The Fiserv Team also believe that if there is
                      an app for these features, it will be more convenient for employees to attend events and increase engagement and improve the culture in the work
                       environment.  </p> </div>
                </div>
            </React.Fragment>
            </div>
         );
    }
}
 
export default FiservSocialAppProject;