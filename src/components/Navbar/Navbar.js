import React from 'react';
import './Navbar.css'
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className='navbar-container'>
    <div className='links-container'>
      <Link className='link-item' to="/">Home</Link>
      <Link className='link-item' to="/contact">Contact</Link>
      <Link className='link-item' to="/about">About</Link>
      <Link className='link-item' to="/photos">Photos</Link>
      <Link className='link-item' to="/engineering">Web Development</Link>
    </div>
  </div>
  );
}
export default Navbar;