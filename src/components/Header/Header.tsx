import React from 'react'
import './Header.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation'

import View from '../../dataModels/View/View'


function Header(view:View) {
  return (
    <nav className="header-container">
      <HeaderTitle />
      <HeaderNavigation {...view}/>
    </nav>
  )
}

export default Header