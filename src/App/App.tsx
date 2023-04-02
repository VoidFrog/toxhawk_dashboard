import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import View from '../dataModels/View/View';
import DataDisplay from '../components/DataDisplay/DataDisplay';

import SampleData, { makeSampleData } from '../dataModels/SampleData/SampleData';

function App() {
  let [currentView, setCurrentView] = React.useState('Dashboard')
  console.log(currentView) //there are 3 possible states:
//                            Dashboard | Data | Settings

  let view:View = {
    current:currentView,
    setView:setCurrentView
  }
  
  //data needs to be collected on this level, and passed down to components which need it
  let sample1 = makeSampleData('Good', [
    {name:'Compound A', certainty:49},
    {name:'Compound B', certainty:62},
    {name:'Compound C', certainty:51}
  ])
  let sample2 = makeSampleData('Neutral', [
    {name:'Compound A', certainty:79},
    {name:'Compound B', certainty:69},
    {name:'Compound C', certainty:51}
  ])
  let sample3 = makeSampleData('Good', [
    {name:'Compound A', certainty:79},
    {name:'Compound B', certainty:69},
    {name:'Compound C', certainty:51}
  ], true, 10)

  let lastSamples:SampleData[] = [sample1, sample2, sample3];

  return (
    <div className="App">
      <Header {...view}/>
      {view.current === 'Dashboard' && <Dashboard {...{lastSamples:lastSamples}}/>}
      {view.current === 'Data' && <DataDisplay {...{samples:lastSamples}}/>}
      {view.current === 'Settings' 
      &&<div style={{display:'flex', alignItems:'center', height:'90%', justifyContent:'center', color:'white'}}>
          <div className='unselectable fw700 size22'>coming soon...</div>
        </div>}{/*there are no setting yet*/}
    </div>
  );
}

export default App;
