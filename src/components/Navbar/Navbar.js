import React, {useState, useEffect} from 'react';
import { Home, Camera, Code, Mail } from "react-feather";
import './Navbar.css'
import {  Link } from "react-router-dom";
function Navbar() {

  const iconSize = 32

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <div>
    {isMobile ? 
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