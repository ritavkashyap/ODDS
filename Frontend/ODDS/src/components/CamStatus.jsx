import React from 'react'
import { useParams } from 'react-router-dom';

// Displays the camera status
function CamStatus(props) {
  function style() {
    if (props.id == props.Checkid) {
      return { display: "block" }
    }
    else {
      return { display: "none" }
    }
  }
  const [videoUrl, setVideoUrl] = React.useState('');
  const params = useParams();
  React.useEffect(() => {
    // Fetch the video feed URL from the Django backend
    const fetchVideoFeed = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/videofeed/${props.port}`); // Replace with your Django backend URL
        console.log(response)
        const data = await response.json();
        setVideoUrl(data.video_url);
      } catch (error) {
        console.error('Error fetching video feed:', error);
      }
    };

    fetchVideoFeed();
  }, []);
  return (
    <div style={style()} className='statbox' >
{props.visible &&      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>Camera Status</h2>
        <div className='camstatbox'>
          <p className='camboxstat'>Name: {props.title}</p>
          <p className='camboxstat'>ip Address: {props.ipAddress}</p>
          <p className='camboxstat'>Latitude: {props.latitude}</p>
          <p className='camboxstat'>Longitude: {props.longitude}</p>
          <p className='camboxstat'>Altitude: {props.altitude}</p>
          <p className='camboxstat'>Resolution: {props.resolution}</p>
          <p className='camboxstat'>Frame Rate: {props.frameRate}</p>
        </div>
      </div>}
{props.visible &&      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>Drone Status</h2>
        <div className='camstatbox'>
          <p className='camboxstat'>Latitude: {props.latitude}</p>
          <p className='camboxstat'>Longitude: {props.longitude}</p>
          <p className='camboxstat'>Altitude: {props.altitude}</p>
          <p className='camboxstat'>Type: </p>
        </div>
      </div>}
      <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
        <h2>{props.title}</h2>
        <div className="videofeed">
          {videoUrl ? (
            <img src={videoUrl} alt="Video Feed" width="640" height="480" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CamStatus