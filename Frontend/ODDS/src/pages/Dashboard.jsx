import React from 'react'
import {
  FaDownload,
  FaCamera,
} from 'react-icons/fa';
import {
  TbDrone
} from 'react-icons/tb';
import {
  GiDeliveryDrone
} from 'react-icons/gi';
import {
  BiSolidBellRing
} from 'react-icons/bi';
import IndividualCam from '../components/IndividualCam';

// Shows the Live Video Feed of all the cameras connected


function Dashboard(props) {
  const [alerts, setAlerts] = React.useState(0)
  const data = props.data;
  // console.log(data.length)
  function IncAlerts() {
    console.log("Alert")
    setAlerts(prev => prev + 1);
  }
  const IndividualCams = data.map((item) => {
    return (
      <IndividualCam
        mapShow={1}
        title={item.title}
        port={item.id - 14}
        visible={props.visible}
        droneDetecting={5}
        type={"drone"}
        ipAddress={item.ipAddress}
        latitude={item.latitude}
        longitude={item.longitude}
        direction={"SW"}
        location={"CDAC"}
        incAlerts={IncAlerts}
      />
    )
  })
  const user = "RITAV";
  return (
    <div className='scroll-demo' >
      <div className="dashHeader">
        <div className="contLeft">
          <h1 className='DashHeader'>Hi {user}!</h1>
          <p className='Dashpara'>  Welcome to your Dashboard</p>
        </div>
        <div className="contRight">
          <button className='Downloadbtn'><div className='divDownloadbtn'><FaDownload style={{ paddingRight: "20px" }} /> Download Reports </div></button>
        </div>
      </div>
      <div className="Dashcards">
        <div className="DashcardCont">
          <div className="Dashcardtop">
            <h2>{data.length}</h2>
            <div><FaCamera color='#1A64AE' size='30px' /></div>
          </div>
          <div className="DashcardBottom">
            <p style={{ fontSize: "22px" }}>Number of Active Cameras</p>
          </div>
        </div>
        <div className="DashcardCont">
          <div className="Dashcardtop">
            <h2>134</h2>
            <div><TbDrone color='#636363' size='30px' /></div>
          </div>
          <div className="DashcardBottom">
            <p style={{ fontSize: "22px" }}>Number of Drone Detecting</p>
          </div>
        </div>
        <div className="DashcardCont">
          <div className="Dashcardtop">
            <h2>3</h2>
            <div><GiDeliveryDrone color='#02C095' size='30px' /></div>
          </div>
          <div className="DashcardBottom">
            <p style={{ fontSize: "22px" }}>Drone Types</p>
          </div>
        </div>
        <div className="DashcardCont">
          <div className="Dashcardtop">
            <h2>{alerts}</h2>
            <div><BiSolidBellRing color='red' size='30px' /></div>
          </div>
          <div className="DashcardBottom">
            <p style={{ fontSize: "22px" }}>Active Alerts</p>
          </div>
        </div>
      </div>
      <div className="DashContainer">
        <div className='CameraContainer'>
          {IndividualCams}
        </div>
      </div>
    </div>
  )
}

export default Dashboard