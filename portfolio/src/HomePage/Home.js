import React, { Component } from 'react';
import FrontPage from './FrontPage.js';
//import ProjectList from './ProjectList.js';
import ProjectList from './ProjectList.js'
import Bottom from './Bottom.js'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <FrontPage></FrontPage>
                <ProjectList></ProjectList>
                <Bottom></Bottom>
            </div>
         );
    }
}
 
export default Home;