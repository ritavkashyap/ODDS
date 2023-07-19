import React from 'react'
import '../styles/popup.css'

function PopUpDroneDash() {
    return (
        <div>
            <a className="button" href="#popup1">
                Let me Pop up
            </a>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Here i am</h2>
                    <a className="close" href="#">
                        ×
                    </a>
                    <div className="content">
                        Thank to pop me out of that button, but now i'm done so you can close
                        this window.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpDroneDash