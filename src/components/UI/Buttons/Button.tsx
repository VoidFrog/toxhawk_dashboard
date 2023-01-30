import React from 'react'
import ButtonData from '../../../dataModels/ButtonData/ButtonData'
import './Button.css'

function Button(props:ButtonData) {
  let height = '32px'
  let width = '112px'
  let disabled = false

  const getSize = (size:string) => {
    let width = ''
    if(size === 'small') width = '32px'
    if(size === 'medium') width = '80px'
    if(size === 'large') width = '112px'
    return width
  }
  
  if(props.size) width = getSize(props.size)
  if(props.width) width = `${props.width}px` 
  if(props.height) height = `${props.height}px` 
  if(props.disabled) disabled = props.disabled

  return  disabled === false ? (
    <div className='btn clickable unselectable' style={{width:width, height:height, backgroundColor:props.color}} onClick={()=> props.function()}>
      {props.title}
    </div>
  ) :
  <div className='btn unselectable disabled' style={{width:width, height:height, backgroundColor:props.color}}>
      {props.title}
  </div>
}

export default Button