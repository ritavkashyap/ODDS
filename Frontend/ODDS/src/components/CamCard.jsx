import React from 'react'
import data from "../pages/data"

function CamCard(props) {
    // var editCamera = (id) => {
    //     for (let i = 0; i < data.length; i++) {
    //         const element = data[i];
    //         if (element["id"] === id) {
    //             data.splice(i, 1)
    //             console.log(id)
    //         }

    //     }
    // }
    console.log(props)
    return (
        <div className="CamBox">
            <div className="ImageBox">
                <img src="src/assets/IP-Camera.jpg" width='150px' alt="" />
            </div>
            <div className="CamBody">
                <div className="CamHeader">
                    {props.title}
                    <div className='btndiv'>
                        <button className='editbtn' onClick={()=>props.editCamera(props.id)}>Edit</button>
                        <button className='delbtn' onClick={()=>props.deleteCamera(props.id)}>Delete</button>
                    </div>
                </div>
                <div className="miniBox">
                    <p>Status: </p>
                    <p>P2PUID: {props.p2puid}</p>
                    <p>Battery: </p>
                </div>
                <div className="miniBox">
                    <p>ip Address: {props.ipAddress}</p>
                    <p>Frame Rate: {props.framerate} FPS</p>
                    <p>Resolution: {props.resolution}p</p>
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