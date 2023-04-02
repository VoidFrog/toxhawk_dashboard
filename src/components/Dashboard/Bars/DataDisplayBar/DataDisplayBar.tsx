import React from 'react'
import './DataDisplayBar.css'

import Colors from '../../../UI/Colors/Colors'
import Bar from '../Bar/Bar'
import { makeButtonData } from '../../../../dataModels/ButtonData/ButtonData'
import DropdownData, { makeDropdownData } from '../../../../dataModels/DropdownData/DropdownData'
import TakenSampleData from '../../../../dataModels/TakenSampleData/TakenSampleData'
import InfoIcon from '../../../UI/InfoIcon/InfoIcon'

function DataDisplayBar(props:{
  sampleList:TakenSampleData[],
  chosenSamples:Boolean[],
  setSampleList:Function, 
  setChosenSamples:Function,
  pageNumber:number,
  changePage:Function,
  recordsOnPage:number
}) {
  const deleteSamples = () => {
    const deleteSingleSample = (index:number, sampleArr:TakenSampleData[], chosenSampleArr:Boolean[]) => {
      sampleArr.splice(index, 1)
      chosenSampleArr.splice(index, 1)
    }

    let representation:Boolean[] = JSON.parse(JSON.stringify(props.chosenSamples))
    let indexes:number[] = representation.map(bool => (bool) ? 1 : 0)
    // console.log('indexy => ', indexes)

    let sampleArr = JSON.parse(JSON.stringify(props.sampleList))
    let chosenSampleArr = JSON.parse(JSON.stringify(props.chosenSamples))

    for (let i=indexes.length-1; i>=0; i--){
      // console.log('indexy: ', i, indexes[i])
      if(indexes[i] === 1) deleteSingleSample(i, sampleArr, chosenSampleArr)
    }

    let pageCount:number = Math.ceil(sampleArr.length / props.recordsOnPage)
    if(pageCount < props.pageNumber+1 && sampleArr.length > 0) props.changePage(props.pageNumber-1)
    // console.log(pageCount, props.pageNumber+1, 'well ummm')

    props.setSampleList(sampleArr)
    props.setChosenSamples(chosenSampleArr)
  } 

  let btnViewOnMap = makeButtonData('View on map', 'large', Colors.blue, () => console.log('viewing on map...'))
  let btnExport = makeButtonData('Export', 'large', Colors.green, () => console.log('Export in progress...'))
  let btnRemove = makeButtonData('Remove', 'large', Colors.red, () => {
    deleteSamples()
    console.log('Removing selected samples...')
  })
  let btnsLeft = [btnViewOnMap, btnExport, btnRemove]

  let options = ['All', 'Recent', 'Dangerous', 'option1', 'option2']
  let severityOptions = ['Toxic','Acute Toxicity', 'Severe Toxicity', 'Hazardous']
  let severity:DropdownData = makeDropdownData('Severity', 'large', Colors.black, severityOptions)
  let pollutants:DropdownData = makeDropdownData('Pollutants', 'large', Colors.black, options)
  let timeframe:DropdownData = makeDropdownData('Timeframe', 'large', Colors.black, options)

  let dropdownsRight:DropdownData[] = [severity, pollutants, timeframe]

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