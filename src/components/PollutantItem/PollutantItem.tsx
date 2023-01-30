import React from 'react'
// import infoIcon from '../../assets/info-icon.svg'
import './PollutantItem.css'

import Colors from '../UI/Colors/Colors'
import InfoIcon from '../UI/InfoIcon/InfoIcon'
// import Popup from '../UI/Popup/Popup'

function PollutantItem(pollutant:{
  name:string,
  certainty:number
}) {

  // let [isPopupShown, togglePopup] = React.useState(false)
  // console.log(isPopupShown, 'is popup shown')

  let info = {
    title: pollutant.name,
    description: `${pollutant.name} is a blablablaballa...`
  }

  return (
    <div className='pollutant-item-container'>
      <div>
        <InfoIcon {...info}/>
        {/* <img src={infoIcon} alt='description' onClick={() => togglePopup((prev) => !prev)}/> */}
        {/* 
          add highlighting of pollutant name
          based on some criteria (how dangerous it is or sth idk)

          stuff below it completely irrelevant, and will be replaced as soon
          as i get the model describing how to identify dangerous pollutants
        */}
        <div style={{
          color: (pollutant.certainty > 59 && pollutant.certainty < 75)
          ? Colors.light_yellow
          : pollutant.certainty >= 75 
          ? Colors.red
          : Colors.white
        }} className='size16'>
          {pollutant.name}
        </div>
      </div>
      <div className='size16'>{pollutant.certainty}%</div>

      {/* more elegant way of conditional rendering */}
      {/* {
        isPopupShown &&
        <Popup {...{title:pollutant.name, closePopup:() => togglePopup((prev) => !prev), description:"placeholder description blabalbalablalblalbalbala"}} />
      } */}
    </div>
  )
}

export default PollutantItem