import React from 'react'
import { Marker } from 'react-map-gl'
import '../styles/popup.css'

function MarkerDash(props) {
    console.log(props)
    const lats = parseInt(props.latitude, 10)
    const lngs = parseInt(props.longitude, 10)
    console.log(lats, lngs)
    return (
        <div>
            <a className="button" href="#popup1">
                <Marker latitude={props.latitude} longitude={props.longitude} color='red' ></Marker>
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

export default MarkerDash