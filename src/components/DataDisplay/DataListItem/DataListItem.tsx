import React from 'react'
import './DataListItem.css'
import mapIcon from '../../../assets/map-icon.svg' 

import Colors from '../../UI/Colors/Colors'
import Button from '../../UI/Buttons/Button'
import ButtonData from '../../../dataModels/ButtonData/ButtonData'
import TakenSampleData from '../../../dataModels/TakenSampleData/TakenSampleData'

export default function DataListItem(props:TakenSampleData) {
  let [isWideEnough, changeSize] = React.useState(window.innerWidth>1700 ? true : false)

  window.addEventListener('resize', ()=> {
    changeSize(window.innerWidth>1700 ? true : false)
  })

  let btnData:ButtonData = {
    title: 'Details',
    size: isWideEnough
      ? 'large'
      : 'medium',
    color: Colors.blue,
    function: () => console.log('details work')
  }

  return (
    <div className='data-list-item-container'>
      <div className='fw600 size16 data-list-item-grid-a'><input type="checkbox" name="" id=""/></div>
      <div className='hide-name-overflow fw600 size16 data-list-item-grid-b'><p>{props.name}</p></div>
      <div className='data-list-item-grid-c'><img src={mapIcon} alt=""/></div>
      <div className='fw600 size16 data-list-item-grid-d'><p>{props.rating}</p></div>
      <div className='fw600 size16 data-list-item-grid-e'><p>{props.pollutantGroups.map((name, index) => {
        if(index === props.pollutantGroups.length-1) return name
        return `${name}, `
      })}</p></div>
      <div className='fw600 size16 data-list-item-grid-f'><p>{props.timestamp}</p></div>
      <div className='data-list-item-grid-g'><Button {...btnData}/></div>
    </div>
  )
}
