import React from 'react'
import {useParams} from 'react-router-dom';

function CamTraj(props) {
    console.log(props.port)
  function style(){
    if(props.id == props.Checkid){
      return {display: "block"}
    }
    else{
      return {display: "none"}
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
            <div className="cambox" style={{ display: props.isOpen ? "block" : "none" }}>
                <h2>Live video Feed</h2>
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

export default CamTraj