import React from 'react'
import IndividualCam from '../components/IndividualCam'

// Shows the Live Video Feed of all the cameras connected
function LiveVideoFeed(props) {
  const data = props.data;

  const IndividualCams = data.map((item) => {
    return (
      <IndividualCam
        title={item.title}
        port={item.id - 14}
        visible={props.visible}
      />
    )
  })

  return (
    <div className="Container">
      <div className="scrolling">
        <div className='CameraContainer'>
          {IndividualCams}
        </div>
      </div>
    </div>
  )
}

export default LiveVideoFeed