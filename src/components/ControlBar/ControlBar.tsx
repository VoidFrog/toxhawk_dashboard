import React from 'react'
import './ControlBar.css'

import Button from '../UI/Buttons/Button'
import ButtonData from '../../dataModels/ButtonData/ButtonData'
import Colors from '../UI/Colors/Colors'

function ControlBar() {
  let btnData:ButtonData = {
    title:'new button',
    function:()=>console.log('works fine'),
    size:'large',
    color:Colors.yellow
  }

  return (
    <div className='control-bar-container'>
      <Button {...btnData}/>
    </div>
  )
}

export default ControlBar