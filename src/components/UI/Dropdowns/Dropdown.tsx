import React from 'react'
import arrowDown from '../../../assets/arrow-down.svg'
import './Dropdown.css'


import DropdownData from '../../../dataModels/DropdownData/DropdownData'

function Dropdown(props:DropdownData) {
  const getSize = (size:string) => {
    let width = ''
    if(size === 'small') width = '32px'
    if(size === 'medium') width = '80px'
    if(size === 'large') width = '112px'
    return width
  }
  let height = '32px'
  // let width = getSize(props.size)
  
  let [isExpanded, Expand] = React.useState(false)
  let [selectedOption, selectOption] = React.useState(props.options[0])

  return (
    // TODO: dropdown needs to be working properly, add styling to container and options
    <div>
      <div className='dropdown-container' style={{height:height, backgroundColor:props.color}}>
        <div className='title-option-container' onClick={() => Expand(prev => !prev)}>
          <div>{props.title}: {selectedOption}</div>
          <img src={arrowDown} alt='description' onClick={() => console.log('click')}/>
        </div>
    </div>
        {
          isExpanded && props.options.map((option, index) => {
            return <div className='dropdown-content'>{option}</div>
          })
        }
    </div>
  )
}

export default Dropdown