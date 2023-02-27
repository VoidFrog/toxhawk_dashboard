import React from 'react'
import './DataListItem.css'
import mapIcon from '../../../assets/map-icon.svg' 

import Colors from '../../UI/Colors/Colors'
import Button from '../../UI/Buttons/Button'
import ButtonData from '../../../dataModels/ButtonData/ButtonData'

export default function DataListItem() {
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
      <div className='fw700 size16 data-list-item-grid-a'><input type="checkbox" name="" id=""/></div>
      <div className='fw700 size16 data-list-item-grid-b'><p>nazwa miejsca</p></div>
      <div className='data-list-item-grid-c'><img src={mapIcon} alt=""/></div>
      <div className='fw700 size16 data-list-item-grid-d'><p>rating</p></div>
      <div className='fw700 size16 data-list-item-grid-e'><p>pollutants</p></div>
      <div className='fw700 size16 data-list-item-grid-f'><p>timestamp</p></div>
      <div className='data-list-item-grid-g'><Button {...btnData}/></div>
    </div>
  )
}
