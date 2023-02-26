import React from 'react'
import './DataDisplayBar.css'

import Colors from '../../../UI/Colors/Colors'
import Bar from '../Bar/Bar'
import ButtonData from '../../../../dataModels/ButtonData/ButtonData'
import DropdownData from '../../../../dataModels/DropdownData/DropdownData'

function DataDisplayBar() {
  const makeButtonData = (title:string, fn:Function, size:string, color:Colors, disabled:boolean=false):ButtonData => {
    return { title:title, function:fn, size:size, color:color, disabled:disabled }
  }
  const makeDropdownData = (title:string, size:string, color:Colors, options:string[]):DropdownData => {
    return {title:title, size:size, color:color, options:options}
  }


  let btnStart = makeButtonData('View on map', ()=>console.log('viewing on map...'), 'large', Colors.blue)
  let btnOneShot = makeButtonData('Export', ()=>console.log('Export in progress...'), 'large', Colors.green)
  let btnStop = makeButtonData('Remove', ()=>console.log('Removing selected samples...'), 'large', Colors.red)
  let btnsLeft = [btnStart, btnOneShot, btnStop]

  let options = ['All', 'Recent', 'Dangerous', 'option1', 'option2']
  let severityOptions = ['Toxic','Acute Toxicity', 'Severe Toxicity', 'Hazardous']
  let severity = makeDropdownData('Severity', 'large', Colors.black, severityOptions)
  let pollutants = makeDropdownData('Pollutants', 'large', Colors.black, options)
  let timeframe = makeDropdownData('Timeframe', 'large', Colors.black, options)

  let dropdownsRight = [severity, pollutants, timeframe]

  return (
    <Bar {...{left:btnsLeft, right:dropdownsRight}}/>
  )
}

export default DataDisplayBar