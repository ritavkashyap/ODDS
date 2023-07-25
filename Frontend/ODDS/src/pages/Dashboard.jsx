import React from 'react'
import {FaDownload} from 'react-icons/fa';


function Dashboard() {
  const user = "RITAV";
  return (
    <div>
      <div className="dashHeader">
        <div className="contLeft">
          <h1 className='DashHeader'>Hi {user}!</h1>
          <p className='Dashpara'>  Welcome to your Dashboard</p>
        </div>
        <div className="contRight">
          <button className='Downloadbtn'><div className='divDownloadbtn'><FaDownload style={{paddingRight:"20px"}}/> Download Reports </div></button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard