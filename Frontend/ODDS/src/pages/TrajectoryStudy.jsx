import React, { useState } from 'react';
import MapDash from '../components/MapDash';
import CamTraj from '../components/CamTraj';

function TrajectoryStudy(props) {

  const data = props.data;    
  const [isOpen, setIsOpen] = useState(false);
  const [Checkid, setCheckid] = useState(0);

  const toggle = () => setIsOpen(!isOpen);

  function toggle2(Checkid) {
    setCheckid(Checkid)
    setIsOpen(isOpen => !isOpen)
  }
  const CamTrajectory = data.map((item) => {
    return (
      <CamTraj
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
        <MapDash data={props.data} toggle2={toggle2} isOpen={isOpen}/>
        {CamTrajectory}
        </div>
    </div>

  )
}

export default TrajectoryStudy