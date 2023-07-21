import React from 'react'; 
import Map, { Marker } from 'react-map-gl';
import { FaBroadcastTower } from 'react-icons/fa';

function MarkerDash(props) {
    
    // const [popupInfo, setPopupInfo] = React.useState(null);

    // const handleMarkerClick = (markerInfo) => {
    //     setPopupInfo(markerInfo);
    // };
    return (

        <div className="marker">

            <Marker
                latitude={props.latitude}
                longitude={props.longitude}
                className='mapcam'
                onClick={() => props.isOpen}
            >
                <FaBroadcastTower size='2rem' color='green' />
            </Marker>
        </div>

    )
}

export default MarkerDash


/*import React from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'YOUR_ACCESS_TOKEN',
});

const App = () => {
  const [popupInfo, setPopupInfo] = React.useState(null);

  const handleMarkerClick = (markerInfo) => {
    setPopupInfo(markerInfo);
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Marker coordinates={[-122.4443, 47.2529]} onClick={() => handleMarkerClick('Seattle')}>
        <img src="https://placekitten.com/50/50" alt="Seattle" />
      </Marker>

      {popupInfo && (
        <Popup coordinates={[-122.4443, 47.2529]} onClose={() => setPopupInfo(null)}>
          <div>{popupInfo}</div>
        </Popup>
      )}
    </Map>
  );
};
*/