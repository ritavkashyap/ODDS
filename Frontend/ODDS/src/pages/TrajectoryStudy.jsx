// THIS COMPONENT IS USELESS

import React, { useState } from 'react';
import MapDash from '../components/MapDash';
import CamTraj from '../components/CamTraj';
import CamStatus from '../components/CamStatus'
import Map, { Source, Layer, Marker } from 'react-map-gl'
import { FaBroadcastTower } from 'react-icons/fa';


function TrajectoryStudy(props) {
  const data = props.data;    
  const [isOpen, setIsOpen] = useState(false);
  const [Checkid, setCheckid] = useState(0);

  const toggle = () => setIsOpen(!isOpen);
  
  function toggle2(Checkid) {
    setCheckid(Checkid)
    setIsOpen(isOpen => !isOpen)
  }
  // const data = props.data;
  const [lng, setLng] = useState(92.7885);
  const [lat, setLat] = useState(24.7558);
  const [zoom, setZoom] = useState(14);
  // const [isOpen, setIsOpen] = useState(false);
  // const [Checkid, setCheckid] = useState(0);

  // const toggle = () => setIsOpen(!isOpen);

  // function toggle2(Checkid) {
  //   setCheckid(Checkid)
  //   setIsOpen(isOpen => !isOpen)
  // }
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
        port={item.id - 14}
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
        {/* <MapDash data={props.data} toggle2={toggle2} isOpen={isOpen}/>
        {CamTrajectory} */}
        <Map
          mapboxAccessToken='pk.eyJ1Ijoicml0YXZrYXNoeWFwIiwiYSI6ImNsazVzNmI2NTBncDgzcW50cGc0bG9zeDgifQ.4BihVFwIi0QKzUIyOw4gVw'
          mapLib={import('mapbox-gl')}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Source
            id="lineSource"
            type="geojson"
            data={{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: lineCoordinates,
              },
            }}
          />
          <Layer
            id="lineLayer"
            type="line"
            source="lineSource"
            layout={{
              'line-cap': 'round',
              'line-join': 'round',
            }}
            paint={{
              'line-color': 'red',
              'line-width': 5,
            }}
          />
          <Marker
            id={props.id}
            latitude={lat}
            longitude={lng}
            className='mapcam'
          >

            <button
              className="marker-btn"
              onClick={() => {
                toggle2(props.id);
              }}
            >
              <FaBroadcastTower size='2rem' color='green' />
            </button>

          </Marker>
        </Map>
      </div>
    </div>

  )
}

export default TrajectoryStudy
