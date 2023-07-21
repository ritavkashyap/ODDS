import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl'
import MarkerDash from './MarkerDash';

function MapDash(props) {

    const data = props.data;

    const MarkerDashes = data.map(item => {
        return (
            <MarkerDash
                id={item.id}
                ipAddress={item.ipAddress}
                title={item.title}
                altitude={item.altitude}
                latitude={item.latitude}
                longitude={item.longitude}
                resolution={item.resolution}
                framerate={item.framerate}
                p2puid={item.p2puid}
                isOpen={props.isOpen}
                toggle2={props.toggle2}
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
