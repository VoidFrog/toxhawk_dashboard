import React from 'react'
import './DataList.css'
import DataListItem from '../DataListItem/DataListItem'
import TakenSampleData, {createTakenSampleData} from '../../../dataModels/TakenSampleData/TakenSampleData'

export default function DataList() {
  let sample1 = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202137, {x:12, y:12}, 'gigachad-pekowice-001')
  let sample2 = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202138, {x:12, y:12}, 'gigachad-pekowice-002')
  let sample3 = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202139, {x:12, y:12}, 'gigachad-pekowice-003')
  let sample4 = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202140, {x:12, y:12}, 'gigachad-pekowice-004')
  let sample5 = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202141, {x:12, y:12}, 'gigachad-pekowice-005')

  let samples = [sample1, sample2, sample3, sample4, sample5]

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
        samples.map((takenSampleData, index) => {
          return <DataListItem key={index} {...takenSampleData} />
        })
      }
    </div>
  )
}
