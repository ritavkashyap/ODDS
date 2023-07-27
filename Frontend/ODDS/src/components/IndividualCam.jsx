import { BorderAllRounded } from '@mui/icons-material';
import React from 'react';

// Displays individual cameras in the Live Video Feed window
function IndividualCam(props) {

    const [videoUrl, setVideoUrl] = React.useState('');
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
        <div className='individualCam' >
            <h2>{props.title}</h2>
            <div className="insideIndividualCam">
                {videoUrl ? (
                    <img src={videoUrl} alt="Video Feed" width="640" height="480" />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default IndividualCam;
