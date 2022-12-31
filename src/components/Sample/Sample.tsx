import React from 'react'
import './Sample.css'

import PollutantItem from '../PollutantItem/PollutantItem'
import SampleData from '../../dataModels/SampleData/SampleData'

function Sample(props:{index:number, sample:SampleData}) {
  let { airIndex } = props.sample
  if (props.sample.loading){
    let time = props.sample.timeRemaining || 'unknown'

    return (
      <div className='sample-container center-content'>
        <div className='center-text size20'>Taking next sample...</div>
        <div className='center-text size20 gray-text'>Time remaining: {typeof time === 'number' ? `${time}s` : time }</div>
      </div>
    )
  } 

  return (
    <div className='sample-container'>
      <div className='center-text size22'>{
        props.index === 0
          ? 'Last Sample' 
          : 'Current Sample'
      }</div>
      <div className='container-row size16'>
        <div>Air index:</div>
        <div>{airIndex}</div>
      </div>
      <div className='center-text size18 nowrap'>Detected pollutants:</div>
      <div className='container-row gray-text size16'>
        <div>Name</div>
        <div>Certainty</div>
      </div>
      <div className='pollutant-list-container'>
        {/* pollutants */}
        {
          props.sample.pollutants.map((pollutant, index) => {
            return <PollutantItem key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Sample