import React from 'react'
import './Dashboard.css'
import StatusBar from './Bars/StatusBarComponents/StatusBar/StatusBar'
import ControlBar from './Bars/ControlBar/ControlBar'
import Overview from './Overview/Overview'

import SampleData from '../../dataModels/SampleData/SampleData'

function Dashboard(props:{
  lastSamples:SampleData[]
}) {
  return (
    <div className='dashboard-container'>
      <StatusBar />
      <ControlBar />
      <Overview {...{samples:props.lastSamples}}/>
    </div>
  )
}

export default Dashboard