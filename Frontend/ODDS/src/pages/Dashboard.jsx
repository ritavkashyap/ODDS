import React, { useState } from 'react'
import MapDash from '../components/MapDash'
import CamStatus from '../components/CamStatus'
import Map, { Source, Layer, Marker } from 'react-map-gl'
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
          visible={props.visible}
        />
      )    
  })

  const points = [
    { id: 1, latitude: 24.7560, longitude: 92.7880 },
    { id: 2, latitude: 24.7568, longitude: 92.7886 },
    { id: 3, latitude: 24.7561, longitude: 92.7883 },
    { id: 4, latitude: 24.7562, longitude: 92.7881 },
    { id: 5, latitude: 24.7564, longitude: 92.7884 },
    { id: 6, latitude: 24.7566, longitude: 92.7882 },
    { id: 7, latitude: 24.7563, longitude: 92.7888 },
    { id: 8, latitude: 24.7565, longitude: 92.7885 },
    { id: 9, latitude: 24.7567, longitude: 92.7887 },
  ];
  const lineCoordinates = points.map(point => [point.longitude, point.latitude]);

  return (
    <div>
      <div className="Container">
       <MapDash visible={props.visible} data={props.data} toggle2={toggle2} isOpen={isOpen} />
          {CamStat}
      </div>
    </div>
  )
}

export default Dashboard