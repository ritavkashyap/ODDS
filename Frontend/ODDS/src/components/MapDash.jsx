import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl'
import MarkerDash from './MarkerDash';

function MapDash(props) {
    const data = props.data;
    // console.log(data)
    const MarkerDashes = data.map(item =>{
        console.log(item.latitude)
        return(
          <MarkerDash 
          latitude = {item.latitude}
          longitude = {item.longitude}
          />
        )
      })
    const [lng, setLng] = useState(92.7880);
    const [lat, setLat] = useState(24.7560);
    const [zoom, setZoom] = useState(14);
    return (
        <Map
            mapboxAccessToken='pk.eyJ1Ijoicml0YXZrYXNoeWFwIiwiYSI6ImNsazVzNmI2NTBncDgzcW50cGc0bG9zeDgifQ.4BihVFwIi0QKzUIyOw4gVw'
            mapLib={import('mapbox-gl')}
            initialViewState={{
                longitude: 92.7880,
                latitude: 24.7560,
                zoom: 14
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            {MarkerDashes}
        </Map>
    )
}

export default MapDash
