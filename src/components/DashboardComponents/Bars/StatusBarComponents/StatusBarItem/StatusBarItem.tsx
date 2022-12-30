import React from 'react'
import './StatusBarItem.css'
import infoIcon from '../../../../../assets/info-icon.svg'

import SensorStatus from '../../../../../dataModels/SensorStatus/SensorStatus'

function StatusBarItem(props:SensorStatus) {
  const {type, state, description} = props
  console.log(props)

  let stateTypes = {
    warning:['Warn'],
    neutral:['In progress'],
    ok:['Operational', 'Link']
  }

  
  let currentStateType = determineStateType(state, stateTypes)
  let stateColor = determineColor(currentStateType)

  return (
    <div className='status-bar-item-container'>
      <div className='status-type-info'>
      <img src={infoIcon} alt='description'/>
        <div className='type'>{type}</div>
      </div>
      <div style={{color:stateColor}} className='state'>{state}</div>
    </div>
  )
}

function determineStateType(
  state:string,
  stateTypes:{
    warning:string[],
    neutral:string[],
    ok:string[]
  }){
  let currentStateType = 'ok';
  if(stateTypes.warning.includes(state)) currentStateType = 'warning'
  else if(stateTypes.neutral.includes(state)) currentStateType = 'neutral'
  else if(stateTypes.ok.includes(state)) currentStateType = 'ok'
  else currentStateType = 'ERR::undefined_behaviour'
  return currentStateType
}

function determineColor(type:string){
  let style = ''

  if(type === 'ok') style += '#A3E635'
  else if(type === 'neutral') style += '#FBBF24'
  else if(type === 'warning') style += '#EF4444'
  else style += '#F0F'

  return style
}

export default StatusBarItem