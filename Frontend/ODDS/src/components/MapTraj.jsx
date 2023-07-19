import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, {Marker} from 'react-map-gl'

function MapTraj() {
    // const [lng, setLng] = useState();
    // const [lat, setLat] = useState();
    // const [zoom, setZoom] = useState();
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
        </Map>
    )
}

export default MapTraj
