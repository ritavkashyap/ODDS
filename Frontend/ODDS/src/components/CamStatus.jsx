import React from 'react'

function CamStatus(props) {
  // console.log(props.title)
  return (
    <div>
      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>Camera Status</h2>
        <div className='camstatbox'>
          {/* {console.log(props.title)} */}
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
        <h2>Live video Feed</h2>
        <div className="videofeed">
        </div>
      </div>
    </div>
  )
}

export default CamStatus