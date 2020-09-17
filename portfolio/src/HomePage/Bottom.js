import React, { Component} from 'react';
import emailjs from "emailjs-com"
import './css/BottomStyle/Bottom.css'
import LetsChat from "./LetsChat.js"
class Bottom extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="background">
                </div>
                <h1>Hey again , my name is Johnny Li</h1>
                <LetsChat></LetsChat>
        </React.Fragment>
        );
    }
}
 
export default Bottom;