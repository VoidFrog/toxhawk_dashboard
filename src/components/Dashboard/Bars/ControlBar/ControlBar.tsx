import React from 'react'
import './ControlBar.css'

import ButtonData, { makeButtonData } from '../../../../dataModels/ButtonData/ButtonData'
import Colors from '../../../UI/Colors/Colors'
import Bar from '../Bar/Bar'

function ControlBar() {
  let btnStart:ButtonData = makeButtonData('Start', 'large', Colors.black, ()=>console.log('starting...'))
  let btnOneShot:ButtonData = makeButtonData('One-shot', 'large', Colors.black, ()=>console.log('one-shot'))
  let btnStop:ButtonData = makeButtonData('Stop', 'large', Colors.red, ()=>console.log('stopping...'))
  
  let btnFunc1:ButtonData = makeButtonData('Func1', 'large', Colors.blue, ()=>console.log('Func1'))
  let btnFunc2:ButtonData = makeButtonData('Func2', 'large', Colors.blue, ()=>console.log('Func2'), true)
  
  let btnsLeft:ButtonData[] = [btnStart, btnOneShot, btnStop]
  let btnsRight:ButtonData[] = [btnFunc1, btnFunc2]

  return (
    <Bar {...{left:btnsLeft, right:btnsRight}}/>
  )
}

export default ControlBar