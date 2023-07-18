import React from 'react'
import data from "../pages/data"

function CamCard(props) {
    var deleteCamera = (id)=> {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element["id"]===id){
                data.splice(i,1)
                console.log(id)
            }
            
        }
    }
    console.log(props)
    return (
        <div className="CamBox">
            <div className="ImageBox">
                <img src="src/assets/IP-Camera.jpg" width='150px' alt="" />
            </div>
            <div className="CamBody">
                <div className="CamHeader">
                    {props.title}
                    <button className='btn' onClick={deleteCamera(props.id)}>Delete</button>
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