import React from 'react'
import './Dashboard.css'
import StatusBar from './Bars/StatusBarComponents/StatusBar/StatusBar'
import ControlBar from './Bars/ControlBar/ControlBar'
import Overview from './Overview/Overview'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <StatusBar />
      <ControlBar />
      <Overview />
    </div>
  )
}

export default Dashboard