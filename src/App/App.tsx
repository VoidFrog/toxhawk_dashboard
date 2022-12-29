import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';

import View from '../dataModels/View/View';


function App() {
  let [currentView, setCurrentView] = React.useState('Dashboard')
  console.log(currentView) //there are 3 possible states:
//                            Dashboard | Data | Settings

  let view:View = {
    current:currentView,
    setView:setCurrentView
  }

  
  //TODO: conditional rendering -> (Dashboard  | Data | Settings)
  return (
    <div className="App">
      <Header {...view}/>
      <Dashboard/>
    </div>
  );
}

export default App;
