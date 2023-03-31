import React from 'react'
import TakenSampleData from '../../../dataModels/TakenSampleData/TakenSampleData'
import './SampleDetails.css'
import xIcon from '../../../assets/x-icon.svg'
import Sample from '../../Sample/Sample'

function SampleDetails(props:{
  closePopup:Function,
  takenSampleData:TakenSampleData
}) {
  
  console.log(props.takenSampleData)

  const closeSelf = (e:React.MouseEvent) => {
    const clicked = e.target as HTMLElement
    if(clicked.classList.contains('sample-details-container')) props.closePopup()
  }
  return (
    <div className='sample-details-container unselectable' onClick={(e) => closeSelf(e)}>
      <div className='sample-details-container-content'>
        <div className='sample-details-container-title'>
          <p className='sample-details-sample-name fw600 size22'>{(props.takenSampleData.name).toUpperCase()}</p>
          <img onClick={() => props.closePopup()} className='sample-details-close-img clickable' src={xIcon} alt="CLOSE" />
        </div>
        <div className='sample-details-middle-section'>
          <div className='sample-details-sample-container'>
            <Sample {...{index:2, sample:props.takenSampleData.sample}}/>
          </div>
          <div className='sample-details-graph-container'></div>
          <div className='sample-details-map-container'></div>
        </div>
      </div>
    </div>
  )
}

export default SampleDetails