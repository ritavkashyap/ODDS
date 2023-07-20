import React from 'react';
import { useNavigate } from "react-router-dom";
import CamCard from '../components/CamCard';
import axios from "axios"
function CameraStatus(props) {

  const data = props.data;
  let navigate = useNavigate();
  const setData = props.setData;

  const routeChange = (path) => {
    console.log("changing route")
    navigate(path);
  }

  function deleteCamera(id){
    axios
      .delete(`http://127.0.0.1:8000/api/cameraModels/${id}`)
      .then(res => setData(data))
      routeChange(`/CameraStatus`)
  }

  const CamCards = data.map(item =>{
    return(
      <CamCard 
      id = {item.id}
      title = {item.title}
      ipAddress = {item.ipAddress}
      latitude = {item.latitude}
      longitude = {item.longitude}
      altitude = {item.altitude}
      resolution = {item.resolution}
      framerate = {item.framerate}
      p2puid = {item.p2puid}
      deleteCamera={deleteCamera}
      />
    )
  })
  return (
    
    <div>
      <div className='addNewBtnCont'>
        <button className='addNewBtn' onClick={()=>routeChange(`/AddNewCamera`)}>Add New</button>
      </div>
      <div className="CamContainer">
        <div className="scrolling">
          {CamCards}
        </div>
      </div>
    </div>
  )
  }

export default CameraStatus;