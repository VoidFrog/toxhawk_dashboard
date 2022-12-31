import React from 'react'
import infoIcon from '../../assets/info-icon.svg'
import './PollutantItem.css'


function PollutantItem() {
  return (
    <div className='pollutant-item-container'>
      <div>
        <img src={infoIcon} alt='description'/>
        <div className='size16'>aaaaaa</div>
      </div>
      <div className='size16'>39%</div>
    </div>
  )
}

export default PollutantItem