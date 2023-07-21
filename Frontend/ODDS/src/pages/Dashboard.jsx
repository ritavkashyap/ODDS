import React, { useState } from 'react'
import MapDash from '../components/MapDash'
import CamStatus from '../components/CamStatus'
import { FaDotCircle } from 'react-icons/fa'

function Dashboard(props) {
  const data = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  function toggle2 (){

    setIsOpen(isOpen => !isOpen)
  }

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
        <MapDash data={props.data} toggle2={toggle2} isOpen={isOpen}/>
        <div style={{ width: isOpen ? "30rem" : "3rem", right:'0', transition:'1s' }} className="statbox">
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