import React from 'react'
import './Header.css'

const Header = ({usersLength}) => {
  return (
    <div className='header'>
        <div className="header-container">
            <h1 className="logo">CUcer</h1>
            <h3 className='counter'>
              {usersLength > 0 ? "Userlar soni: " + usersLength : 'Userlar yoq :('}
            </h3>
        </div>
    </div>
  )
}

export default Header