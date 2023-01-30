import React from 'react'
import './StatusBox.css'

function StatusBox() {
  return (
    <div className='status-box-container'>
        <div className='status-box'>
            {/* status box here (environment status) */}
            <p className='size22 fw700'>Environment</p>
            <div className='data-quality-container'>
              <div className='size18 fw700'>Data quality:</div>
              <div className='size18 fw700'>Good</div>
            </div>
        </div>
        <div>
            {/* map here */}
            <p style={{textAlign:'center'}}>{'let`s pretend that map is here'}</p>
        </div>
    </div>
  )
}

export default StatusBox