import React from 'react'
import './Overview.css' 

import Timeline from './Timeline/Timeline'
import StatusBox from './StatusBox/StatusBox'
import SampleData from '../../../dataModels/SampleData/SampleData'

function Overview(props:{
  samples:SampleData[]
}) {
  return (
    <div className='overview-container unselectable'>
        <Timeline {...{samples:props.samples}}/>
        <StatusBox />
    </div>
  )
}

export default Overview