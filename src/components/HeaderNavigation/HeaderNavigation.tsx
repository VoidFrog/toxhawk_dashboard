import React from 'react'
import './HeaderNavigation.css'

import View from '../../dataModels/View/View'

function HeaderNavigation(view:View) {
  return highlightCurrentScreenName(view)
}

function highlightCurrentScreenName(view:View){
  if(view.current == 'Dashboard'){
    return (
      <div className='header-navigation-container unselectable'>
        <div id='current-view' onClick={() => view.setView('Dashboard')}>
          <span>Dashboard</span>
        </div>
        <div onClick={() => view.setView('Data')}>
          <span>Data</span>
        </div>
        <div onClick={() => view.setView('Settings')}>
          <span>Settings</span>
        </div>
      </div>
    )
  }
  else if(view.current == 'Data'){
    return (
      <div className='header-navigation-container unselectable'>
        <div onClick={() => view.setView('Dashboard')}>
          <span>Dashboard</span>
        </div>
        <div id='current-view' onClick={() => view.setView('Data')}>
          <span>Data</span>
        </div>
        <div onClick={() => view.setView('Settings')}>
          <span>Settings</span>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='header-navigation-container unselectable'>
        <div onClick={() => view.setView('Dashboard')}>
          <span>Dashboard</span>
        </div>
        <div onClick={() => view.setView('Data')}>
          <span>Data</span>
        </div>
        <div id='current-view' onClick={() => view.setView('Settings')}>
          <span>Settings</span>
        </div>
      </div>
    )
  }
}

export default HeaderNavigation