import React from 'react'
import './ControlBar.css'

import ButtonData from '../../../../dataModels/ButtonData/ButtonData'
import Colors from '../../../UI/Colors/Colors'
import Bar from '../Bar/Bar'

function ControlBar() {
  const makeButtonData = (title:string, fn:Function, size:string, color:Colors, disabled:boolean=false):ButtonData => {
    return { title:title, function:fn, size:size, color:color, disabled:disabled }
  }

  let btnStart = makeButtonData('Start', ()=>console.log('starting...'), 'large', Colors.black)
  let btnOneShot = makeButtonData('One-shot', ()=>console.log('one-shot'), 'large', Colors.black)
  let btnStop = makeButtonData('Stop', ()=>console.log('stopping...'), 'large', Colors.red)
  
  let btnFunc1 = makeButtonData('Func1', ()=>console.log('Func1'), 'large', Colors.blue)
  let btnFunc2 = makeButtonData('Func2', ()=>console.log('Func2'), 'large', Colors.blue, true)
  
  let btnsLeft = [btnStart, btnOneShot, btnStop]
  let btnsRight = [btnFunc1, btnFunc2]

  return (
    <Bar {...{left:btnsLeft, right:btnsRight}}/>
  )
}

export default ControlBar