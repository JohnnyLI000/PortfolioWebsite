import React, { Component } from 'react';
import FrontPage from './FrontPage.js';
//import ProjectList from './ProjectList.js';
import ProjectList from './ProjectList.js'
// import * as firebase from 'firebase';

//   Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCuR6DzRe3R-K5K5Iz9ZjhLosu7YLJHPdA",
//     authDomain: "portfolio-cee62.firebaseapp.com",
//     databaseURL: "https://portfolio-cee62.firebaseio.com",
//     projectId: "portfolio-cee62",
//     storageBucket: "portfolio-cee62.appspot.com",
//     messagingSenderId: "927214256820",
//     appId: "1:927214256820:web:7e5968174691abb0cd4de1",
//     measurementId: "G-D34QJK1P1Q"
//   };
//   Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
 

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