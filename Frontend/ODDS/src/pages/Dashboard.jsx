import React from 'react'
import MapDash from '../components/MapDash'

function Dashboard(props) {
  console.log(props)
  return (
    <div>
        <div className="Container">
        <MapDash data={props.data} latitude = {props.latitude} longitude = {props.longitude}/>
        </div>
    </div>
  )
}

export default Dashboard