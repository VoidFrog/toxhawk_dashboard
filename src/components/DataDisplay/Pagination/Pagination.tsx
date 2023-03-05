import React from 'react'
import './Pagination.css'

import Button from '../../UI/Buttons/Button'
import ButtonData, {createButtonData} from '../../../dataModels/ButtonData/ButtonData'
import Colors from '../../UI/Colors/Colors'

function Pagination(props:{
  sampleCount:number,
  pageNumber:number,
  changePage:Function
}) {
  let pageCount:number = Math.floor(props.sampleCount / 13)

  let btnPrev:ButtonData = createButtonData('Prev', 'medium', Colors.black, () => {
    let prevPage = (props.pageNumber > 0) ? props.pageNumber-1 : props.pageNumber 
    props.changePage(prevPage)
    console.log(prevPage, 'pagechanging prevPage')
  })
  let btnNext:ButtonData = createButtonData('Next', 'medium', Colors.blue, () => {
    let nextPage = (props.pageNumber < pageCount) ? props.pageNumber+1 : props.pageNumber 
    props.changePage(nextPage)
    console.log(nextPage, 'pagechanging nextPage')
  })
  console.log('pagecount -> ', pageCount)

  return (
    <div className='pagination-container'>
      <Button {...btnPrev}/>
      
      <Button {...btnNext}/>
    </div>
  )
}

export default Pagination