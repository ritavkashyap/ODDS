import React, { useState } from 'react'
import MapDash from '../components/MapDash'
import CamStatus from '../components/CamStatus'
// import { FaDotCircle } from 'react-icons/fa'

function Dashboard(props) {
  const data = props.data;    
  const [isOpen, setIsOpen] = useState(false);
  const [Checkid, setCheckid] = useState(0);

  const toggle = () => setIsOpen(!isOpen);
  
  function toggle2(Checkid) {
    setCheckid(Checkid)
    setIsOpen(isOpen => !isOpen)
  }

  const CamStat = data.map((item) => {
      return (
        <CamStatus
          Checkid={Checkid}
          id={item.id}
          title={item.title}
          ipAddress={item.ipAddress}
          latitude={item.latitude}
          longitude={item.longitude}
          altitude={item.altitude}
          resolution={item.resolution}
          framerate={item.framerate}
          p2puid={item.p2puid}
          isOpen={isOpen}
          toggle={toggle}
          port={item.id-14}
        />
      )    
  })


  return (
    <div>
      <div className="Container">
        <MapDash data={props.data} toggle2={toggle2} isOpen={isOpen} />
          {CamStat}
      </div>
    </div>
  )
}

export default Dashboard