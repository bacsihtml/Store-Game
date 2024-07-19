import React from 'react'

function NavListItem({ item, navOnClick }) {
  return (
    <li>
        <a href="#" className={`${item.avtive ? 'active' : undefined}`}  onClick={() => navOnClick(item.id, item.target)}>
            <i className={`bi ${item.icon}`}></i>
            <span className="navName">{item.name}</span>   {/* {`bi ${item.icon}`} day la cach viet chuoi + vs js */}
        </a> 
    </li>
  )
}

export default NavListItem