import React from 'react'
import arrowDown from '../../../assets/arrow-down.svg'
import arrowUp from '../../../assets/arrow-up.svg'
import './Dropdown.css'

import DropdownData from '../../../dataModels/DropdownData/DropdownData'
import Colors from '../Colors/Colors'

function Dropdown(props:DropdownData) {
  // const getSize = (size:string) => {
  //   let width = ''
  //   if(size === 'small') width = '32px'
  //   if(size === 'medium') width = '80px'
  //   if(size === 'large') width = '112px'
  //   return width
  // }
  let height = '32px'
  // let width = '112px'
  
  let [isExpanded, expand] = React.useState(false)
  let [selectedOption, selectOption] = React.useState(props.options[0])
  const makeNonWrappable = (option:string) => {
    return option.replaceAll(' ', '\u00A0')
  }

  return (
      <div style={{
        borderRadius:(isExpanded) 
        ? '6px 6px 0px 0px'
        : '6px 6px 6px 6px',
        height:height,
        backgroundColor:props.color
        }}
        className='dropdown-container clickable unselectable'
        onClick={() => expand(prev => !prev)}
        >
        <div className='title-option-container'>
          <p>{props.title}:{'\u00A0'}{
            makeNonWrappable(selectedOption)
          }</p>
          {
            isExpanded 
              ? <img src={arrowUp} alt='description'/>
              : <img src={arrowDown} alt='description'/>
          }
        </div>
        <div className='dropdown-options'>
          {
            isExpanded && props.options.map((option, index) => {
              // let parentWidth = 
              return <div key={index} style={{
                backgroundColor: (selectedOption === option)
                  ? Colors.green
                  : Colors.gray,
                borderRadius: (index === props.options.length-1)
                  ? '0px 0px 6px 6px'
                  : '0px'
                }}
                className='unselectable clickable'
                onClick={() => {selectOption(option)}}>
                {option}</div>
            })
          }
        </div>
      </div>
  )
}

export default Dropdown