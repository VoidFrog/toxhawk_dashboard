import React from 'react'
import './Timeline.css'

import Sample from '../../../Sample/Sample'
import SampleData from '../../../../dataModels/SampleData/SampleData'

function Timeline(props:{
  samples:SampleData[]
}) {

  return (
    <div className='timeline-container'>
        <div className='sample-list-container'>
            {/* samples here */}
            {
              props.samples.map((sample, index) => {
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