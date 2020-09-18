import React from 'react'
import ReactDOM from 'react-dom'
import "./css/LetschatStyle/Letschat.css"
const MODAL_STYLE={
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform :'translate(-50%,-50%)',
    backgroundColor : 'white',
    width:'70vw',
    height:'70vh',
    zIndex : 1000
}

const OVERLAY_STYLE={
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:1000,
    display:'grid',
}
const CLOSE_BUTTON_STYLE={
    backgroundColor:'white',
    position:'absolute',
    right:0,
    top:0,
    border:'none',
    boxSizing:'border-box',
    textDecoration:'none',
}


export default function Modal({open,children,onClose}) {
    if (!open) return null

    return ReactDOM.createPortal(
        <React.Fragment>
        <div style = {OVERLAY_STYLE} onClick={onClose}></div>
        <div style = {MODAL_STYLE}>
            <div className="modal-container">
            <div className="modal-background"></div>
            <div className="modal-input-area"> 
            <button onClick={onClose} style={CLOSE_BUTTON_STYLE}>Close</button> 
            {children}
            </div>
            </div>
        </div>
        </React.Fragment>,
        document.getElementById('portal')
    )
}
