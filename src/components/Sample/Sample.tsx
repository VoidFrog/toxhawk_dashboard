import React from 'react'
import './Sample.css'
import Colors from '../UI/Colors/Colors'

import PollutantItem from '../PollutantItem/PollutantItem'
import SampleData from '../../dataModels/SampleData/SampleData'

function Sample(props:{index:number, sample:SampleData}) {
  let { airIndex } = props.sample

  const identifyAirQuality = (index:string):string => {
    const states = {
      good:['good'],
      neutral:['neutral'],
      bad:['bad']
    }

    let indx = index.toLowerCase()
    let quality:string = states.good.includes(indx) 
      ? Colors.lime
      : states.neutral.includes(indx)
      ? Colors.light_yellow
      : states.bad.includes(indx)
      ? Colors.red
      : Colors.pink

    return quality
  }

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
          : (props.index === 1) 
          ? 'Current Sample'
          : 'Sample Details'
      }</div>
      <div className='container-row size16'>
        <div>Air index:</div>
        <div style={{color: identifyAirQuality(airIndex)}}>
          {airIndex}
        </div>
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
            return <PollutantItem key={index} {...pollutant}/>
          })
        }
      </div>
    </div>
  )
}

export default Sample