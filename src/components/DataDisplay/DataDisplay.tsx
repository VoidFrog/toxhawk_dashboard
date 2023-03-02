import React from 'react'
import DataDisplayBar from '../Dashboard/Bars/DataDisplayBar/DataDisplayBar'
import DataList from './DataList/DataList'
import './DataDisplay.css'

import TakenSampleData, {createTakenSampleData} from '../../dataModels/TakenSampleData/TakenSampleData'

function DataDisplay() {
  let [sampleList, setSampleList] = React.useState<TakenSampleData[]>([])

  let sample1:TakenSampleData = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202137, {x:12, y:12}, 'gigachad-pekowice-001')
  let sample2:TakenSampleData = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202138, {x:12, y:12}, 'gigachad-pekowice-002')
  let sample3:TakenSampleData = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202139, {x:12, y:12}, 'gigachad-pekowice-003')
  let sample4:TakenSampleData = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202140, {x:12, y:12}, 'gigachad-pekowice-004')
  let sample5:TakenSampleData = createTakenSampleData('dangerous', ['WWA', 'bruh'], 694202141, {x:12, y:12}, 'gigachad-pekowice-005')
  let samples = [sample1, sample2, sample3, sample4, sample5]
  
  React.useEffect(() => {
    setSampleList([...samples])
  }, [])

  return (
    <div className='data-display-container'>
      <DataDisplayBar />
      <DataList {...{samples:sampleList}}/>
    </div>
  )
}

export default DataDisplay