import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss';
import { Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi'

export default function Navbar() {
    const [menu_list] = useState([
        { name: 'Home', path: '/'},
        { name: 'Movie', path: '/Movie' },
        { name: 'Series', path: '/Series' },
        { name: 'TV Show', path: '/TVShow' },

    ])
  return (
    <nav className='navbar-wrapper'>
        <div className="navbar-container">
        
        <ul className="navbar-list">
        <label className="logo">
            MovieCool
        </label>
                      {
                          menu_list.map((menu_list, index) => {
                              return (
                                  <li key={index}>
                                      <NavLink to={menu_list.path} className={({ isActive }) => isActive ? 'active' : undefined}>
                                        { menu_list.name }
                                    </NavLink>
                                  </li>
                              );
                          })
                      }
                </ul>
                <div className='input-group'>              
                {/* <svg className='svg-navbar' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 36 36"><path fill="currentColor" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg> */}
                <input type='text' placeholder='Search'></input>
                <HiSearch fontSize={22} color='blue' id='Search'/>
                <button className='btn'>
                    <Link to='Login' className='Sign_in' >Sign In</Link>
                </button>
                </div>     
        </div>
    </nav>  
  )
}
