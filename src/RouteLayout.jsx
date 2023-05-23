import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import SideNavigationBar from './components/Sidebar/SideNavigationBar'
import './RouteLayout.css'
function RouteLayout() {
  return (
    <div className='d-flex'>
      <div className='sidebar'>
        <SideNavigationBar/>
      </div>
      <div className='page'>
        <NavigationBar/>
        <Outlet/>
      </div>
    </div>
  )
}
export default RouteLayout