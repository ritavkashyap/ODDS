import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl'

function Maps() {
    const [lng, setLng] = useState(92.7915);
    const [lat, setLat] = useState(24.7540);
    const [zoom, setZoom] = useState(15);
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

export default Maps
