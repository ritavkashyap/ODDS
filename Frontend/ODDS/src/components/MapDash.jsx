import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl'

function MapDash() {
    const [lng, setLng] = useState(92.7880);
    const [lat, setLat] = useState(24.7560);
    const [zoom, setZoom] = useState(14);
    return (
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
        </Map>
    )
}

export default MapDash
