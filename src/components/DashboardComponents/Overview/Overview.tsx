import React from 'react'
import './Overview.css' 

import Timeline from './Timeline/Timeline'
import StatusBox from './StatusBox/StatusBox'

function Overview() {
  return (
    <div className='overview-container unselectable'>
        <Timeline />
        <StatusBox />
    </div>
  )
}

export default Overview