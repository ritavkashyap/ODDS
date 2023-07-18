import React from 'react'

function CamCard(props) {
    console.log(props)
    return (
        <div className="CamBox">
            <div className="ImageBox">
                <img src="" alt="" />
            </div>
            <div className="CamBody">
                <div className="CamHeader">
                    {props.title}
                </div>
                <div className="miniBox">
                    <p>Status: </p>
                    <p>P2PUID: {props.p2puid}</p>
                    <p>Battery: </p>
                </div>
                <div className="miniBox">
                    <p>ip Address: {props.ipAddress}</p>
                    <p>Frame Rate: {props.framerate}</p>
                    <p>Resolution: {props.resolution}</p>
                </div>
                <div className="miniBox">
                    <p>Latitude: {props.latitude}</p>
                    <p>Longitude: {props.longitude} </p>
                    <p>Altitude: {props.altitude}</p>
                </div>
            </div>
        </div>
    )
}

export default CamCard