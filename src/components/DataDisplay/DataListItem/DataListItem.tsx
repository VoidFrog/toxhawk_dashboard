import React from 'react'
import './DataListItem.css'
import mapIcon from '../../../assets/map-icon.svg' 

import Colors from '../../UI/Colors/Colors'
import Button from '../../UI/Buttons/Button'
import ButtonData, { makeButtonData } from '../../../dataModels/ButtonData/ButtonData'
import TakenSampleData from '../../../dataModels/TakenSampleData/TakenSampleData'
import SampleDetails from '../../UI/SampleDetails/SampleDetails'

export default function DataListItem(props:{
  takenSampleData:TakenSampleData,
  setChosenSamples:Function,
  chosenSamples:Boolean[],
  index:number
}
) {
  let [isWideEnough, changeSize] = React.useState(window.innerWidth>1700 ? true : false)
  let [isPopupShown, togglePopup] = React.useState(false)
  const closePopup = () => togglePopup((prev) => !prev)

  window.addEventListener('resize', ()=> {
    changeSize(window.innerWidth>1700 ? true : false)
  })

  let btnData:ButtonData = makeButtonData('Details', isWideEnough
    ? 'large'
    : 'medium',
    Colors.blue,
    () => togglePopup(prev => !prev)
  )

  return (
    <div className='data-list-item-container'>
      <div className='fw600 size16 data-list-item-grid-a'>
        <input onChange={() => {
            let arr = JSON.parse(JSON.stringify(props.chosenSamples))
            arr[props.index] = !arr[props.index]
            props.setChosenSamples(arr) 
            console.log(`pronciuf100${props.index}`, props.chosenSamples[props.index])
          }} 
          checked={(props.chosenSamples[props.index])? true : false} 
          className='checkbox clickable'
          type="checkbox"
        />
      </div>
      <div className='hide-name-overflow fw600 size16 data-list-item-grid-b'><p>{props.takenSampleData.name}</p></div>
      <div className='data-list-item-grid-c'><img src={mapIcon} alt=""/></div>
      <div className='fw600 size16 data-list-item-grid-d'><p>{props.takenSampleData.rating}</p></div>
      <div className='fw600 size16 data-list-item-grid-e'><p>{props.takenSampleData.pollutantGroups.map((name, index) => {
        if(index === props.takenSampleData.pollutantGroups.length-1) return name
        return `${name}, `
      })}</p></div>
      <div className='fw600 size16 data-list-item-grid-f'><p>{props.takenSampleData.timestamp}</p></div>
      <div className='data-list-item-grid-g'><Button {...btnData}/></div>
      {/* {isPopupShown && <Popup {...popupData}/>} */}
      {isPopupShown && <SampleDetails {...{takenSampleData:props.takenSampleData, closePopup:closePopup}}/>}
    </div>
  )
}
