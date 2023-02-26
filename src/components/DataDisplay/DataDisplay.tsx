import React from 'react'
import DataDisplayBar from '../Dashboard/Bars/DataDisplayBar/DataDisplayBar'
import DataList from './DataList/DataList'
import './DataDisplay.css'

function DataDisplay() {
  return (
    <div className='data-display-container'>
      <DataDisplayBar />
      <DataList />
    </div>
  )
}

export default DataDisplay