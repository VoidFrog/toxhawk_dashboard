import React from 'react'
import ButtonData from '../../../dataModels/ButtonData/ButtonData'
import './Button.css'

function Button(props:ButtonData) {
  let height = '32px'
  let width = '112px'
  
  if(props.size) width = getSize(props.size)
  if(props.width) width = `${props.width}px` 
  if(props.height) height = `${props.height}px` 
  
  return (
    <div className='btn clickable unselectable' style={{width:width, height:height, backgroundColor:props.color}} onClick={()=> props.function()}>
      {props.title}
    </div>
  )
}

function getSize(size:string){
  let width = ''
  if(size == 'small') width = '32px'
  if(size == 'medium') width = '80px'
  if(size == 'large') width = '112px'
  return width
}

export default Button