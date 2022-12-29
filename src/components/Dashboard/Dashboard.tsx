import React from 'react'
import './Dashboard.css'
import StatusBar from '../StatusBar/StatusBar'
import ControlBar from '../ControlBar/ControlBar'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <StatusBar />
      <ControlBar />
    </div>
  )
}

export default Dashboard