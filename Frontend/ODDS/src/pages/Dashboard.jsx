import React, { useState } from 'react'
import MapDash from '../components/MapDash'
import CamStatus from '../components/CamStatus'
import { FaDotCircle } from 'react-icons/fa'

function Dashboard(props) {
  const data = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // console.log(props)
  const CamStat = data.map(item =>{
    return(
      <CamStatus 
      id = {item.id}
      title = {item.title}
      ipAddress = {item.ipAddress}
      latitude = {item.latitude}
      longitude = {item.longitude}
      altitude = {item.altitude}
      resolution = {item.resolution}
      framerate = {item.framerate}
      p2puid = {item.p2puid}
      isOpen = {isOpen}
      toggle = {toggle}
      />
    )
  })
  return (
    <div>
      <div className="Container">
        <MapDash data={props.data} />
        <div style={{ width: isOpen ? "40rem" : "3rem" }} className="statbox">
          <div style={{ marginRight:'10px' }} className="bars">
            <FaDotCircle onClick={toggle} className='dot'/>
          </div>
         {CamStat}
        </div>
      </div>
    </div>
  )
}

export default Dashboard