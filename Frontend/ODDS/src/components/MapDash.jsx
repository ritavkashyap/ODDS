import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'

function MapDash() {
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
            <Marker latitude={lat} longitude={lng} color='red'>
                <div>
                    <a className="button" href="#popup1">
                        Let me Pop up
                    </a>
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <h2>Here i am</h2>
                            <a className="close" href="#">
                                ×
                            </a>
                            <div className="content">
                                Thank to pop me out of that button, but now i'm done so you can close
                                this window.
                            </div>
                        </div>
                    </div>
                </div>
            </Marker>
        </Map>
    )
}

export default MapDash
