import React from 'react'
import './DataDisplayBar.css'

import Colors from '../../../UI/Colors/Colors'
import Bar from '../Bar/Bar'
import ButtonData from '../../../../dataModels/ButtonData/ButtonData'
import DropdownData from '../../../../dataModels/DropdownData/DropdownData'
import TakenSampleData from '../../../../dataModels/TakenSampleData/TakenSampleData'
import Button from '../../../UI/Buttons/Button'
import InfoIcon from '../../../UI/InfoIcon/InfoIcon'

function DataDisplayBar(props:{
  sampleList:TakenSampleData[],
  chosenSamples:Boolean[],
  setSampleList:Function, 
  setChosenSamples:Function
}) {
  const createButtonData = (title:string, fn:Function, size:string, color:Colors, disabled:boolean=false):ButtonData => {
    return { title:title, function:fn, size:size, color:color, disabled:disabled }
  }
  const createDropdownData = (title:string, size:string, color:Colors, options:string[]):DropdownData => {
    return {title:title, size:size, color:color, options:options}
  }

  const deleteSamples = () => {
    const deleteSingleSample = (index:number, sampleArr:TakenSampleData[], chosenSampleArr:Boolean[]) => {
      sampleArr.splice(index, 1)
      chosenSampleArr.splice(index, 1)
    }

    let representation:Boolean[] = JSON.parse(JSON.stringify(props.chosenSamples))
    let indexes:number[] = representation.map(bool => (bool) ? 1 : 0)
    console.log('indexy => ', indexes)

    let sampleArr = JSON.parse(JSON.stringify(props.sampleList))
    let chosenSampleArr = JSON.parse(JSON.stringify(props.chosenSamples))

    for (let i=indexes.length-1; i>=0; i--){
      console.log('indexy: ', i, indexes[i])
      if(indexes[i] === 1) deleteSingleSample(i, sampleArr, chosenSampleArr)
    }
    props.setSampleList(sampleArr)
    props.setChosenSamples(chosenSampleArr)
  } 

  let btnViewOnMap = createButtonData('View on map', () => console.log('viewing on map...'), 'large', Colors.blue)
  let btnExport = createButtonData('Export', () => console.log('Export in progress...'), 'large', Colors.green)
  let btnRemove = createButtonData('Remove', () => {
    deleteSamples()
    console.log('Removing selected samples...')
  }, 'large', Colors.red)
  let btnsLeft = [btnViewOnMap, btnExport, btnRemove]

  let options = ['All', 'Recent', 'Dangerous', 'option1', 'option2']
  let severityOptions = ['Toxic','Acute Toxicity', 'Severe Toxicity', 'Hazardous']
  let severity = createDropdownData('Severity', 'large', Colors.black, severityOptions)
  let pollutants = createDropdownData('Pollutants', 'large', Colors.black, options)
  let timeframe = createDropdownData('Timeframe', 'large', Colors.black, options)

  let dropdownsRight = [severity, pollutants, timeframe]

  let btnShowActiveFilters = {
    title:'Active Filters',
    description: `active filters...`
  }

  return (
    <>
      <Bar {...{left:btnsLeft, right:dropdownsRight}}/>
      <div className='active-filters-container unselectable'>
        <InfoIcon {...btnShowActiveFilters}/>
      </div>
    </>
  )
}

export default DataDisplayBar