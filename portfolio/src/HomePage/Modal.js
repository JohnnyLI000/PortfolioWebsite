import React from 'react'
import ReactDOM from 'react-dom'

const MODAL_STYLE={
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform :'translate(-50%,-50%)',
    backgroundColor : 'red',
    padding:'50px',
    zIndex : 1000
}

const OVERLAY_STYLE={
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:1000
}



export default function Modal({open,children,onClose}) {
    if (!open) return null

    return ReactDOM.createPortal(
        <React.Fragment>
        <div style = {OVERLAY_STYLE}></div>
        <div style = {MODAL_STYLE}>
            <button onClick={onClose}>Close modal</button>
            {children}
        </div>
        </React.Fragment>,
        document.getElementById('portal')
    )
}
