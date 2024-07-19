import React, { useState } from 'react'
import './SideMenu.css'
import NavListItem from './NavListItem'
import navListData from '../data/NavListData'

function SideMenu( { active, sectionActive } ) {

  const [navData, setNavData] = useState(navListData)

  const handleNavOnclick = (id, target) => {
    const newNavData = navData.map(nav => {
      nav.active= false;
      if(nav.id === id) nav.active=true;
      return nav
    });
    setNavData(newNavData)
    sectionActive(target)
  }

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {
          navData.map(item => (
            <NavListItem 
              key={item.id} 
              item={item} 
              navOnClick={handleNavOnclick}
            />
          ))
        }
      </ul>
      <ul className="social">
        <li>
          <a href="#">
            <i className="bi bi-meta"></i>
          </a>
        </li>
        <li>
          <a href="#">
          <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className='share'>
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu