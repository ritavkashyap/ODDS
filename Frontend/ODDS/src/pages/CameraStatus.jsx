import React from 'react';
import { useNavigate } from "react-router-dom";
import CamCard from '../components/CamCard';
import data from "../pages/data"
import { useNavigate } from "react-router-dom";
import CamCard from '../components/CamCard';
import data from "../pages/data"

function CameraStatus() {

  const [data, setData] = React.useState([])
  
  function createCameraArray(array) {
    const newArray = [];
    for(let i=0; i<array.length; i++){
      newArray.push(array[i]);
    }
    console.log(newArray)
    return newArray;
  }


  // API call
  React.useEffect(function() {
    fetch("http://127.0.0.1:8000/api/cameraModels/")
      .then(res => res.json()) // Parse the response as JSON
      .then(data => {setData(createCameraArray(data));})
    }, []);




  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AddNewCamera`;
    navigate(path);
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
      />
    )
  })
  return (
    
    <div>
      <div className='addNewBtnCont'>
        <button className='addNewBtn' onClick={routeChange}>Add New</button>
      </div>
      <div className="CamContainer">
        <div className="scrolling">
          {CamCards}
        </div>
      </div>
    <div>
      <div className='addNewBtnCont'>
        <button className='addNewBtn' onClick={routeChange}>Add New</button>
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