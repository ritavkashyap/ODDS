import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddNewCamera() {
  const [formData, setFormData] = useState(
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
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/cameraModels/', formData);
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
        <input type="text" onChange={handleChange} className='cameraInput' name='title' placeholder='Title' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='P2PUID' placeholder='P2P UID' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='ipAddress' placeholder='ip Address' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='latitude' placeholder='Latitude' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='longitude' placeholder='Longitude' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='altitude' placeholder='Altitude' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='resolution' placeholder='Resolution' required />
        <input type="text" onChange={handleChange} className='cameraInput' name='framerate' placeholder='Framerate' required />
      </div>
      <div className="btndiv">
        <input type="submit" className='btn' />
      </div>
    </form>

  )
}

export default AddNewCamera