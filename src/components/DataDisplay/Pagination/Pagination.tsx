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
  let pageCount:number = Math.ceil(props.sampleCount / 13)

  let btnPrev:ButtonData = createButtonData('Prev', 'medium', Colors.black, () => {
    let prevPage = (props.pageNumber > 0) ? props.pageNumber-1 : props.pageNumber 
    props.changePage(prevPage)
    console.log(prevPage, 'pagechanging prevPage')
  })
  let btnNext:ButtonData = createButtonData('Next', 'medium', Colors.blue, () => {
    //pageCount is equal or greater than 1, and pageNumber is an index, so we need to subtract 1 from pageCount
    let nextPage = (props.pageNumber < pageCount-1) ? props.pageNumber+1 : props.pageNumber 
    props.changePage(nextPage)
    console.log(nextPage, 'pagechanging nextPage')
  })

  console.log('pagecount -> ', pageCount)

  let indexLeft:ButtonData = createButtonData(`${props.pageNumber}`, 'small', Colors.blue, () => props.changePage(props.pageNumber-1))
  let indexMiddle:ButtonData = createButtonData(`${props.pageNumber+1}`, 'small', Colors.green, () => {})
  let indexRight:ButtonData = createButtonData(`${props.pageNumber+2}`, 'small', Colors.blue, () => props.changePage(props.pageNumber+1))

  return (
    <div className='pagination-container'>
      <Button {...btnPrev}/>

      {
      (props.pageNumber > 0) && <Button {...indexLeft}/>
      }
      <Button {...indexMiddle}/>
      {
      (props.pageNumber+1 <= pageCount-1) &&  <Button {...indexRight}/>
      }
      
      <Button {...btnNext}/>
    </div>
  )
}

export default Pagination