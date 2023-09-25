import React, {useState, useEffect} from 'react';
import { Home, Camera, Code, Mail } from "react-feather";
import { IsMobile } from 'utils/checkMobile';
import './Navbar.css'
import {  Link } from "react-router-dom";
function Navbar() {

  const iconSize = 32

  return (
    <div>
    {IsMobile() ? 
    (<div className='mobile-navbar'>      
          <Link className='link-item mobile-link' to="/"><Home size={iconSize} /></Link>

    <Link className='link-item mobile-link' to="/photos"><Camera size={iconSize} /></Link>
    <Link className='link-item mobile-link' to="/engineering"><Code size={iconSize} /></Link>
    <Link className='link-item mobile-link' to="/contact"><Mail size={iconSize} /></Link> </div>)
    :
    (
    <div className='navbar-container'>
    <div className='links-container'>
      <Link className='link-item' to="/">Home</Link>

      <Link className='link-item' to="/photos">Photos</Link>
      <Link className='link-item' to="/engineering">Web Development</Link>
      <Link className='link-item' to="/contact">Contact</Link>

    </div>
  </div>
    )
  }
  </div>

  );
}
export default Navbar;