import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { FaBroadcastTower } from 'react-icons/fa';

function MarkerDash(props) {

  return (

    <div className="marker">

      <Marker
        latitude={props.latitude}
        longitude={props.longitude}
        className='mapcam'
      >
          
        <button
          className="marker-btn"
          onClick={(e) => {
            props.toggle2();
          } }
        >
          <FaBroadcastTower size='2rem' color='green' />
        </button>
        
      </Marker>
    </div>

  )
}

export default MarkerDash
