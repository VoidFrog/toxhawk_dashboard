import React from 'react'
import './InfoIcon.css'

import infoIcon from '../../../assets/info-icon.svg'
import Popup from '../Popup/Popup'


function InfoIcon(props:{
  title:string,
  description:string,
  // more functionality will be added in the future
}) {
  let [isPopupShown, togglePopup] = React.useState(false)
  let popupData = {
    title: props.title, 
    description: props.description,
    closePopup: () => {togglePopup((prev) => !prev)}
  }

  return (
    <div className='info-icon-container'>
      <img className='clickable' src={infoIcon} alt='description' onClick={() => togglePopup((prev) => !prev)}/>
      {/* more elegant way of conditional rendering */}
      {
        isPopupShown &&
        <Popup {...popupData} />
      }
    </div>
  )
}

export default InfoIcon