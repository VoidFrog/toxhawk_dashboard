import React from 'react'
import './Popup.css'

function Popup(props:{
  title:string,
  description:string,
  closePopup:Function
}) {

  const closeSelf = (e:React.MouseEvent) => {
    const clicked = e.target as HTMLElement
    if(clicked.classList.contains('popup')) props.closePopup()
  }

  return (
    <div className='popup unselectable' onClick={(e) => closeSelf(e)}>
      <div className='popup-content'>
        <div className='title fw700 size18'>
          <p>{props.title}</p>
        </div>
        <div className='description fw600'>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Popup