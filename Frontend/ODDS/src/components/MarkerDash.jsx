import React, { useState, useEffect } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import '../styles/popup.css'
import { FaBroadcastTower } from 'react-icons/fa';

function MarkerDash(props) {
    const [camdata, setCamdata] = useState(null);
    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setCamdata(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);
    console.log(props.title)
    return (

        <div className="marker">

            <Marker
                latitude={props.latitude}
                longitude={props.longitude}
                className='mapcam'
                onClick={setCamdata}
            >
                <a className="button" href="#popup1"><FaBroadcastTower size='1.5rem' color='green' /></a>

                <div id="popup1" className="overlay">
                    <div className="popup">
                        <h2>{props.title} Status</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                        {props.title}
                        {props.altitude}
                        </div>
                    </div>
                </div>
            </Marker>
        </div>

    )
}

export default MarkerDash