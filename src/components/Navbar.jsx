import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink as HLink } from 'react-router-hash-link'


const Navbar = () => {
  const [menu,setMenu] = useState('');

  const toggleMenu = (e)=>{
    setMenu((e)=>{
      if(e == 'active'){
        return ''
      }else{
        return 'active'
      }
    }) 
  }
  const closeMenu = () => {
    setMenu('');
  };
  return (
    <nav>
          <div className="nav__logo">
            <HLink to = "/#Home"><img src="./logo.png" alt="logo" /></HLink>
            <span>YONA</span>
          </div>
          <ul className={`nav__links ${menu}`}>
            <li className="link"  onClick = {closeMenu}>
              <HLink to="/#Home">Home</HLink>
            </li>
            <li className="link" onClick = {closeMenu}>
              <HLink to="/#services">Services</HLink>
            </li>
            <li className="link" onClick = {closeMenu}>
              <Link to = "/about">About</Link>
            </li>
            <li className="link" onClick = {closeMenu}>
              <a href="#contact">Contact</a>
            </li>
            <li className="link" onClick = {closeMenu}>
              <HLink to="/gallery">Gallery</HLink>
            </li>
            <li className="link" onClick = {closeMenu}>
              <Link to="/book">Book Appointment</Link>
            </li>
          </ul>
          <button className={`hamburger-menu ${menu}`} aria-label="Toggle Navigation" onClick = {(e)=>toggleMenu(e)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
  )
}

export default Navbar