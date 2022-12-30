import React from 'react'
import './Sample.css'

import SampleData from '../../dataModels/SampleData/SampleData'

function Sample(props:{index:number, sample:SampleData}) {
  let { airIndex } = props.sample
  
  return (
    <div className='sample-container'>
      <div className='center-text'>Last Sample</div>
      <div className='container-row'>
        <div>Air index:</div>
        <div>{airIndex}</div>
      </div>
      <div className='center-text'>Detected pollutants:</div>
      <div className='container-row'>
        <div>Name</div>
        <div>Certainty</div>
      </div>
      <div>
        {/* pollutants */}
      </div>
    </div>
  )
}

export default Sample