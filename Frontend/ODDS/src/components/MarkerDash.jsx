import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { FaBroadcastTower } from 'react-icons/fa';

function MarkerDash(props) {

  return (

    <div className="marker">

      <Marker
        id={props.id}
        latitude={props.latitude}
        longitude={props.longitude}
        className='mapcam'
      >

        <button
          className="marker-btn"
          onClick={() => {
            props.toggle2(props.id);
          }}
        >
          <FaBroadcastTower size='2rem' color='green' />
        </button>

      </Marker>
    </div>

  )
}

export default MarkerDash
