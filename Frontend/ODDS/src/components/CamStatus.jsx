import React from 'react'

function CamStatus(props) {

  function style(){
    if(props.id == props.Checkid){
      return {display: "block"}
    }
    else{
      return {display: "none"}
    }
  }

  return (
    <div style={style()} className='statbox' >
      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>Camera Status</h2>
        <div className='camstatbox'>
          <p className='camboxstat'>Name: {props.title}</p>
          <p className='camboxstat'>ip Address: {props.ipAddress}</p>
          <p className='camboxstat'>Latitude: {props.latitude}</p>
          <p className='camboxstat'>Longitude: {props.longitude}</p>
          <p className='camboxstat'>Altitude: {props.altitude}</p>
          <p className='camboxstat'>Resolution: {props.resolution}</p>
          <p className='camboxstat'>Frame Rate: {props.frameRate}</p>
        </div>
      </div>
      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>Drone Status</h2>
        <div className='camstatbox'>
          <p className='camboxstat'>Latitude: {props.latitude}</p>
          <p className='camboxstat'>Longitude: {props.longitude}</p>
          <p className='camboxstat'>Altitude: {props.altitude}</p>
          <p className='camboxstat'>Type: </p>
        </div>
      </div>
      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>Live video Feed</h2>
        <div className="videofeed">
        </div>
      </div>
    </div>
  )
}

export default CamStatus