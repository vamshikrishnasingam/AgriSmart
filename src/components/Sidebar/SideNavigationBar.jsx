import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './SideNavigationbar.css'
const SideNavigationBar = () => {
  return (
    <div className="navigation" style={{ display: 'flex', height: '100vh' }}>
      <CDBSidebar textColor="#fff" backgroundColor='#303231'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Welcome
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/ClimateDetection" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cloud-sun-rain">Climate Detection</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Cropselection" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="leaf" >Crop Selection</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Irrigation" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="water">Irrigation Management</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/PestManagement" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bug">Pest Management</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Nutrient" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="seedling">Nutrient Management</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Networking" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="globe">Networking</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/policy" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="paper-plane">Policy Support &<br></br>International Co-operation</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            AgroClimate+
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNavigationBar;