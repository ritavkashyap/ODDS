import React from 'react'
import IndividualCam from '../components/IndividualCam'

function LiveVideoFeed(props) {
  const data=props.data;

  const IndividualCams = data.map((item) => {
    return (
      <IndividualCam
        title={item.title}
        port={item.id-14}
        visible={props.visible}
      />
    )    
})

  return (
    <div>
      {/* <h1>Live Video Feed</h1> */}
      <div className='CameraContainer'>
        {IndividualCams}
      </div>
    </div>
  )
}

export default LiveVideoFeed