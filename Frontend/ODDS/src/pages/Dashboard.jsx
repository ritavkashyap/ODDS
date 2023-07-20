import React, { useState } from 'react'
import MapDash from '../components/MapDash'
import { FaDotCircle } from 'react-icons/fa'

function Dashboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // console.log(props)
  return (
    <div>
      <div className="Container">
        <MapDash data={props.data} latitude={props.latitude} longitude={props.longitude} />
        <div style={{ width: isOpen ? "40rem" : "3rem" }} className="statbox">
          <div style={{ marginLeft: isOpen ? "8px" : "8px" }} className="bars">
            <FaDotCircle onClick={toggle} className='dot'/>
          </div>
          <div className="cambox" style={{ display: isOpen ? "block" : "none" }}>
            <h2>Camera Status</h2>
            <div className='camstatbox'>
              {console.log(props.title)}
              <p className='camboxstat'>Name: {props.title}</p>
              <p className='camboxstat'>ip Address: {props.ipAddress}</p>
              <p className='camboxstat'>Latitude: {props.latitude}</p>
              <p className='camboxstat'>Longitude: {props.longitude}</p>
              <p className='camboxstat'>Altitude: {props.altitude}</p>
              <p className='camboxstat'>Resolution: {props.resolution}</p>
              <p className='camboxstat'>Frame Rate: {props.frameRate}</p>
            </div>
          </div>
          <div className="cambox" style={{ display: isOpen ? "block" : "none" }}>
            <h2>Live video Feed</h2>
            <div className="videofeed">
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard