import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Source, Layer, Marker } from 'react-map-gl'
// import Map from 'react-map-gl'
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

    const points = [
        { id: 1, latitude: 24.76083200749323, longitude: 92.79105908008056}, //24.76083200749323, 92.79105908008056
        { id: 2, latitude: 24.75619450536551, longitude: 92.7866817153544 }, //24.75619450536551, 92.7866817153544
        { id: 3, latitude: 24.754051063537915, longitude: 92.78934246646244 },//24.754051063537915, 92.78934246646244
        { id: 4, latitude: 24.753388537674372, longitude: 92.79505020674263 },//24.753388537674372, 92.79505020674263
        { id: 5, latitude: 24.753739287100977, longitude:92.79775387319113 },//24.753739287100977, 92.79775387319113
        { id: 6, latitude: 24.755298161463013, longitude: 92.80075794702282 },//24.755298161463013, 92.80075794702282
        { id: 7, latitude: 24.757948202994235, longitude: 92.80123001576779 },//24.757948202994235, 92.80123001576779
        // { id: 8, latitude: 24.7565, longitude: 92.7885 },
        // { id: 9, latitude: 24.7567, longitude: 92.7887 },
    ];
    const lineCoordinates = points.map(point => [point.longitude, point.latitude]);

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
            {!props.visible && (<><Source
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
            </>
            )}
        </Map>
    )
}

export default MapDash
