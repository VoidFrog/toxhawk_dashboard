import React from 'react'
import './Timeline.css'

import Sample from '../../../Sample/Sample'
import SampleData from '../../../../dataModels/SampleData/SampleData'

function Timeline() {
  const makeSample = (airIndex:string, pollutants:{name:string, certainty:number}[], loading:boolean=false, timeRemaining:number=0):SampleData => {
    return {airIndex:airIndex, pollutants:pollutants, loading:loading, timeRemaining:timeRemaining}
  }

  let sample1 = makeSample('Good', [
    {name:'Compound A', certainty:79},
    {name:'Compound B', certainty:69},
    {name:'Compound C', certainty:51}
  ])
  let sample2 = makeSample('Good', [
    {name:'Compound A', certainty:79},
    {name:'Compound B', certainty:69},
    {name:'Compound C', certainty:51}
  ])
  let sample3 = makeSample('Good', [
    {name:'Compound A', certainty:79},
    {name:'Compound B', certainty:69},
    {name:'Compound C', certainty:51}
  ], true, 10)

  let lastSamples:SampleData[] = [sample1, sample2, sample3]; 

  return (

    <div className='timeline-container'>
        <div className='sample-list-container'>
            {/* samples here */}
            {
              lastSamples.map((sample, index) => {
                let props = {
                  index:index,
                  sample:sample
                }
                return <Sample key={index} {...props}/>
              })
            }
            {/* loading sample */}
        </div>
        <div className='graphs-container'>
            {/* graph here */}
        </div>
    </div>
  )
}

export default Timeline