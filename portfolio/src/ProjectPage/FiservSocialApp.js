import React, { Component } from 'react';
import './FiservSocialAppStyle/FiservSocialAppStyle.css'
import FrontPage from './ProjectFrontPage.js'
class FiservSocialAppProject extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <React.Fragment>
                <div className = "project-body">
                <FrontPage></FrontPage>

                <div className="project-proposal"><p>The Fiserv Team had an issue with the security of the events, 
                their main issue was authentication. The events are made through a wiki which meant that other people could modify information in the events and provide false information which was not secure. Employees had to manually sign up to events and write down all the information through the wiki which results in storing too much data. Another issue was that it could only be done through a work device, if an employee didn’t have their work device, they wouldn’t be able to create or see any of the events.
                 This also meant that employees wouldn’t be able to receive announcements or emergency alerts if they weren’t on their work device.</p>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <p>They wanted to be able to have an app for their employees so that it was easy to create, view and attend event through the ease of 
                     their phones as well as higher security so that only the owner of an event could modify the details. The Fiserv Team also believe that if there is
                      an app for these features, it will be more convenient for employees to attend events and increase engagement and improve the culture in the work
                       environment.  </p> </div>

                <div id="fiserv-demo">
                    <div className ="demo-section">
                    <div className = "header">
                        <p>Fiserv social app UI design</p>
                    </div>
                    <div className = "header-description">
                    </div>
                     <img src="https://jonnnyportfolioimagebucket.s3-ap-southeast-2.amazonaws.com/Image/Fiserv+UI+design.png" alt="nice"></img>
                     </div>

                     <div className="demo-section">
                     <div className = "header">
                        <p>Fiserv social app demonstrate</p>
                    </div>
                    <div className = "header-description">
                        This is runned on Android emulator to demonstrate the current features
                    </div>
                    <div id="social-app-demo">
                     <img src="https://jonnnyportfolioimagebucket.s3-ap-southeast-2.amazonaws.com/Image/FiservSocialAppDemo.gif"  alt="nice"></img>
                     </div>
                </div>
                </div>
                </div>

            </React.Fragment>
            </div>
         );
    }
}
 
export default FiservSocialAppProject;