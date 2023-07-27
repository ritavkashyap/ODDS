// This component is useless
import React from 'react';
import {useParams} from 'react-router-dom';

const VideoFeed = ({id}) => {
    const [videoUrl, setVideoUrl] = React.useState('');
    const params = useParams();
    React.useEffect(() => {
      // Fetch the video feed URL from the Django backend
      const fetchVideoFeed = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/videofeed/1`); // Replace with your Django backend URL
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
      <div>
        <h1>Video Feed</h1>
        {videoUrl ? (
          <img src={videoUrl} alt="Video Feed" width="640" height="480" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default VideoFeed;