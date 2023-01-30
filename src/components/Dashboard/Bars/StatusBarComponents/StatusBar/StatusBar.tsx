import React from 'react'
import './StatusBar.css'

import StatusBarItem from '../StatusBarItem/StatusBarItem'
import SensorStatus from '../../../../../dataModels/SensorStatus/SensorStatus'

function StatusBar() {
  const createSensorStatus = (type:string, state:string, desc:string|undefined=undefined) => {
    let sensorStatusItem:SensorStatus = {
      type:type,
      state:state,
      description:desc
    }
    return sensorStatusItem
  }

  let template = [['State', 'Operational', 'desc'], ['Temperatures', 'Warn', 'desc'], ['Calibration', 'In progress'], ['Comms', 'Link']]
  let items:SensorStatus[] = template.map((item) => {
    if(item.length > 2){
      return createSensorStatus(item[0], item[1], item[2])
    }
    return createSensorStatus(item[0], item[1])
  })

  return (
    <div className='status-bar-container unselectable'>
      <div>
        <StatusBarItem {...items[0]}/>
      </div>
      <div id='status-items-rest'>
      {
        items.map((status, index) => {
          if(status.type === 'State') return null
          else return <StatusBarItem key={index} {...status}/>
        })
      }
      </div>
    </div>
  )
}

export default StatusBar