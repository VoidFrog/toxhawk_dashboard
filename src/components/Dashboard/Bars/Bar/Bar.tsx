import React from 'react'
import './Bar.css' 

import Button from '../../../UI/Buttons/Button'
import ButtonData from '../../../../dataModels/ButtonData/ButtonData'
import DropdownData from '../../../../dataModels/DropdownData/DropdownData'
import Dropdown from '../../../UI/Dropdowns/Dropdown'

function Bar(props:{
  left:ButtonData[]|DropdownData[],
  right:ButtonData[]|DropdownData[]
}) {
  
  const isButtonData = (object:unknown):object is ButtonData => {
    return Object.prototype.hasOwnProperty.call(object, 'title') 
      && Object.prototype.hasOwnProperty.call(object, 'size')
      && Object.prototype.hasOwnProperty.call(object, 'color')
      && Object.prototype.hasOwnProperty.call(object, 'function')
  }

  const isDropdownData = (object:unknown):object is DropdownData => {
    console.log(Object.prototype.hasOwnProperty.call(object, 'title') 
    && Object.prototype.hasOwnProperty.call(object, 'size')
    && Object.prototype.hasOwnProperty.call(object, 'color')
    && Object.prototype.hasOwnProperty.call(object, 'options'))
    return Object.prototype.hasOwnProperty.call(object, 'title') 
      && Object.prototype.hasOwnProperty.call(object, 'size')
      && Object.prototype.hasOwnProperty.call(object, 'color')
      && Object.prototype.hasOwnProperty.call(object, 'options')
  }

  return (
    <div className='bar-container'>
      <div className='bar-functions'>
        {
          props.left.map((item, index) => {
            if(isButtonData(item)) return <Button key={index} {...item}/>
            else if(isDropdownData(item)) return <Dropdown {...item} />
            return null
          })
        }
      </div>
      <div className='bar-functions'>
        {
          props.right.map((item, index) => {
            if(isButtonData(item)) return <Button key={index} {...item}/>
            else if(isDropdownData(item)) return <Dropdown {...item} />
            return null
          })
        }
      </div>
    </div>
  )
}

export default Bar