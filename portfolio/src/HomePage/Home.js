import React, { Component } from 'react';
import FrontPage from './FrontPage.js';
import ProjectList from './ProjectList.js';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <FrontPage></FrontPage>
                <ProjectList></ProjectList>
            </div>
         );
    }
}
 
export default Home;