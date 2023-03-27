import React from 'react'
import DataDisplayBar from '../Dashboard/Bars/DataDisplayBar/DataDisplayBar'
import DataList from './DataList/DataList'
import './DataDisplay.css'

import TakenSampleData, {createTakenSampleData} from '../../dataModels/TakenSampleData/TakenSampleData'
import Pagination from './Pagination/Pagination'

function DataDisplay() {
  let [sampleList, setSampleList] = React.useState<TakenSampleData[]>([])
  let [chosenSamples, setChosenSamples] = React.useState<Boolean[]>([])
  let [currentPage, changePage] = React.useState(0)

  let samples:TakenSampleData[] = []
  for (let i=0; i<52; i++){
    let sample:TakenSampleData = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202137+i, {x:12, y:12}, 'gigachad-pekowice-001')
    samples.push(sample)
  }

  /* eslint-disable react-hooks/exhaustive-deps*/
  React.useEffect(() => {
    setSampleList([...samples])
  }, []) 

  React.useEffect(() => {
    setChosenSamples([...samples.map(s => false)])
  }, []) 
  /* eslint-enable */

  return (
    <div className='data-display-container'>
      <DataDisplayBar {...{chosenSamples, sampleList, setSampleList, setChosenSamples}}/>
      <DataList {...{samples:sampleList, setChosenSamples:setChosenSamples, chosenSamples:chosenSamples, pageNumber:currentPage}}/>
      <Pagination {...{sampleCount:sampleList.length, pageNumber:currentPage, changePage:changePage}}/>
    </div>
  )
}

export default DataDisplay