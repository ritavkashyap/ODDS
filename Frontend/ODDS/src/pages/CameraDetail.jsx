import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CameraDetail(){
    const params = useParams();
    const navigate = useNavigate()
    const [camera, setCamera] = React.useState(null)
    const [loading, setLoading] = React.useState(true);


    const [formData, setFormData] = React.useState(
        {
          title: "",
          ipAddress: "",
          latitude: "",
          longitude: "",
          altitude: "",
          resolution: "",
          framerate: "",
          p2puid:""
        }
      )

      React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:8000/api/cameraModels/${params.id}`); // Replace with your API endpoint
            const data = await response.json();
            setCamera(data);
            setLoading(false);
            console.log(formData)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    
    fetchData();
    }, [params.id]);

// Update the form data when the 'camera' state changes
  React.useEffect(() => {
    if (camera) {
      setFormData({
        title: camera.title,
        ipAddress: camera.ipAddress,
        latitude: camera.latitude,
        longitude: camera.longitude,
        altitude: camera.altitude,
        resolution: camera.resolution,
        framerate: camera.framerate,
        p2puid: camera.p2puid
      });
    }
  }, [camera]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/cameraModels/${params.id}/`, formData);
          console.log(response.data);
          navigate("/CameraStatus");
        } catch (error) {
          console.error(error);
        }
      };

      const handleChange = event => {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }
        })
      }
    return (
        <form onSubmit={handleSubmit}>
          <div className='AddNewCamCont'>
            <input type="text" onChange={handleChange} className='cameraInput' name='title' placeholder={`${camera.title}`} defaultValue={`${camera.title}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='P2PUID' placeholder='P2P UID' defaultValue={`${camera.p2puid}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='ipAddress' placeholder='ip Address' defaultValue={`${camera.ipAddress}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='latitude' placeholder='Latitude' defaultValue={`${camera.latitude}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='longitude' placeholder='Longitude' defaultValue={`${camera.longitude}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='altitude' placeholder='Altitude' defaultValue={`${camera.altitude}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='resolution' placeholder='Resolution' defaultValue={`${camera.resolution}`} required />
            <input type="text" onChange={handleChange} className='cameraInput' name='framerate' placeholder='Framerate' defaultValue={`${camera.framerate}`} required />
          </div>
          <div className="btndiv">
            <input type="submit" className='btn' />
          </div>
        </form>
      )

}