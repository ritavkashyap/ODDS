import React from 'react';
import Map, { Source, Layer, Marker } from 'react-map-gl'
import { FaBroadcastTower } from 'react-icons/fa';


// Displays individual cameras in the Live Video Feed window
function IndividualCam(props) {
    const [videoUrl, setVideoUrl] = React.useState('');

    React.useEffect(() => {
        // Fetch the video feed URL from the Django backend
        const map = (() => {
            return (
                <Map
                    mapboxAccessToken='pk.eyJ1Ijoicml0YXZrYXNoeWFwIiwiYSI6ImNsazVzNmI2NTBncDgzcW50cGc0bG9zeDgifQ.4BihVFwIi0QKzUIyOw4gVw'
                    mapLib={import('mapbox-gl')}
                    initialViewState={{
                        longitude: props.longitude,
                        latitude: props.latitude,
                        zoom: 14
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    <Marker
                        latitude={props.latitude}
                        longitude={props.longitude}
                        width="255"
                        height="100%"
                    // className='mapcam'
                    >
                        {/* <button> */}
                        <FaBroadcastTower size='2rem' color='green' />
                        {/* </button> */}
                    </Marker>
                </Map>
            )
        })
        const fetchVideoFeed = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/videofeed/${props.port}`); // Replace with your Django backend URL
                const data = await response.json();
                setVideoUrl(data.video_url);
            } catch (error) {
                console.error('Error fetching video feed:', error);
            }
        };

        fetchVideoFeed();
    }, []);

    return (
        <div className={props.mapShow ? 'DashindividualCam' : 'individualCam'}>
            {props.mapShow ? (
                <div className="DashCam">
                    {videoUrl ? (
                        <img src={videoUrl} alt="Video Feed" width="auto" height="377.5" />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            ) : (
                <React.Fragment>
                    <h2>{props.title}</h2>
                    <div className="insideIndividualCam">
                        {videoUrl ? (
                            <img src={videoUrl} alt="Video Feed" width="640" height="480" />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </React.Fragment>
            )}
            {props.mapShow && (
                <div className="DashContRight">
                    <div className="Dashmap">
                        <Map
                            mapboxAccessToken='pk.eyJ1Ijoicml0YXZrYXNoeWFwIiwiYSI6ImNsazVzNmI2NTBncDgzcW50cGc0bG9zeDgifQ.4BihVFwIi0QKzUIyOw4gVw'
                            mapLib={import('mapbox-gl')}
                            initialViewState={{
                                longitude: props.longitude,
                                latitude: props.latitude,
                                zoom: 14
                            }}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                        >
                            <Marker
                                latitude={props.latitude}
                                longitude={props.longitude}
                                width="255"
                                height="100%"
                            // className='mapcam'
                            >
                                {/* <button> */}
                                <FaBroadcastTower size='2rem' color='green' />
                                {/* </button> */}
                            </Marker>
                        </Map>
                    </div>
                    <div className="Dashcamstatus">
                        <h2>{props.title}</h2>
                        <p className='DashcamstatusText' >Drones Detected: {props.droneDetecting}</p>
                        <p className='DashcamstatusText' >Type: {props.type}</p>
                        <p className='DashcamstatusText' >ipAddress: {props.ipAddress}</p>
                        <p className='DashcamstatusText' >Latitude: {props.latitude}</p>
                        <p className='DashcamstatusText' >Longitude: {props.longitude}</p>
                        <p className='DashcamstatusText' >Direction: {props.direction}</p>
                        <p className='DashcamstatusText button' >Location: {props.location}
                            <button onClick={()=>props.incAlerts()} >Alert</button>
                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default IndividualCam;

