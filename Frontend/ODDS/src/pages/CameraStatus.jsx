import React from 'react';
import { useNavigate } from "react-router-dom";
import CamCard from '../components/CamCard';
import data from "../pages/data"

function CameraStatus() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AddNewCamera`;
    navigate(path);
  }
  const CamCards = data.map(item =>{
    return(
      <CamCard 
      Title = {item.title}
      ipAddress = {item.ipAddress}
      latitude = {item.latitude}
      longitude = {item.longitude}
      altitude = {item.altitude}
      resolution = {item.resolution}
      framerate = {item.framerate}
      P2PUID = {item.p2puid}
      />
    )
  })
  return (
    <div>
      <div className='addNewBtnCont'>
        <button className='addNewBtn' onClick={routeChange}>Add New</button>
      </div>
      <div className="container">
        <div className="scrolling">
          
        </div>
      </div>
    </div>
  )
}

export default CameraStatus