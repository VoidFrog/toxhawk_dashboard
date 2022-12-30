import React from 'react'
import './ControlBar.css'

import Button from '../../../UI/Buttons/Button'
import ButtonData from '../../../../dataModels/ButtonData/ButtonData'
import Colors from '../../../UI/Colors/Colors'

function ControlBar() {
  const makeButtonData = (title:string, fn:Function, size:string, color:Colors, disabled:boolean=false):ButtonData => {
    return { title:title, function:fn, size:size, color:color, disabled:disabled }
  }

  let btnStart = makeButtonData('Start', ()=>console.log('starting...'), 'large', Colors.black)
  let btnOneShot = makeButtonData('One-shot', ()=>console.log('one-shot'), 'large', Colors.black)
  let btnStop = makeButtonData('Stop', ()=>console.log('stopping...'), 'large', Colors.red)
  
  let btnFunc1 = makeButtonData('Func1', ()=>console.log('Func1'), 'large', Colors.blue)
  let btnFunc2 = makeButtonData('Func2', ()=>console.log('Func2'), 'large', Colors.blue, true)
  

  return (
    <div className='control-bar-container'>
      <div className='control-bar-functions'>
        <Button {...btnStart}/>
        <Button {...btnOneShot}/>
        <Button {...btnStop}/>
      </div>
      <div className='control-bar-functions'>
        <Button {...btnFunc1}/>
        <Button {...btnFunc2}/>
      </div>
    </div>
  )
}

export default ControlBar