import React, { Component } from 'react';
import './FrontPage.css';
import FadeIn from 'react-fade-in';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

class FrontPage extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>  
            <div class="front-page-background">
            </div>
            <FadeIn> <div class="introduction">
                <p>Hi , I am Johnny Li.</p>
                </div>

                <ArrowDropDown  ></ArrowDropDown>
                
                </FadeIn>
           
            </React.Fragment>
        )
    }
}
 
export default FrontPage;