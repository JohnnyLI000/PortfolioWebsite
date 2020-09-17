import React, { Component} from 'react';
import emailjs from "emailjs-com"
import './css/BottomStyle/Bottom.css'
import LetsChat from "./LetsChat.js"
class Bottom extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="bottom-container">
                    <LetsChat></LetsChat>
                </div>

        </React.Fragment>
        );
    }
}
 
export default Bottom;