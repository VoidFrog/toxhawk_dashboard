import React from 'react'
import './DataList.css'
import DataListItem from '../DataListItem/DataListItem'
import TakenSampleData from '../../../dataModels/TakenSampleData/TakenSampleData'

export default function DataList(props:{
  samples:TakenSampleData[]
}) {
  return (
    <div className='data-list-container unselectable'>
      <div className='data-list-titles'>
        <div className='data-list-grid-a'><p className='fw700 size16'>Select</p></div>
        <div className='data-list-grid-b'><p className='fw700 size16'>Sample&nbsp;name</p></div>
        <div className='data-list-grid-c'><p className='fw700 size16'>Location</p></div>
        <div className='data-list-grid-d'><p className='fw700 size16'>Rating</p></div>
        <div className='data-list-grid-e'><p className='fw700 size16'>Pollutants</p></div>
        <div className='data-list-grid-f'><p className='fw700 size16'>Time</p></div>
      </div>
      {
        props.samples.map((takenSampleData, index) => {
          return <DataListItem key={index} {...takenSampleData} />
        })
      }
    </div>
  )
}
