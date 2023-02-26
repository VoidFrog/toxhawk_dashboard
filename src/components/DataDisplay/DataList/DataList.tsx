import React from 'react'
import './DataList.css'
import DataListItem from '../DataListItem/DataListItem'

export default function DataList() {
  return (
    <div className='data-list-container unselectable'>
      <div className='data-list-titles'>
        <div style={{flex:0}}><p className='fw700 size16'>Select</p></div>
        <div style={{flex:2}}><p className='fw700 size16'>Sample&nbsp;name</p></div>
        <div style={{flex:4}}><p className='fw700 size16'>Location</p></div>
        <div style={{flex:2}}><p className='fw700 size16'>Rating</p></div>
        <div style={{flex:2}}><p className='fw700 size16'>Pollutants</p></div>
        <div style={{flex:4}}><p className='fw700 size16'>Time</p></div>
      </div>
      <DataListItem />
    </div>
  )
}
