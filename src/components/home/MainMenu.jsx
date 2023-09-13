import React from 'react'
import yodaLogo from '../../assets/Images/cropped-cropped-Yoda-2-1-e1667248094621.png';
import {openMenus,closeMenus } from '../index';
import {NavLink,Link} from 'react-router-dom'



function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg mb-5">
  <div className='container-fluid'>
    <a className="navbar-brand" href="#">
      <img src={yodaLogo} width="250" style={{filter:'brightness(90%)'}}/>

      </a>

    <button onClick={openMenus } className="navbar-toggler nav-toggle-btn" type="button"  aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">

      <div className="bar-line"></div>
      <div className="bar-line"></div>
      <div className="bar-line"></div>

    </button>



<div className='navbar-mobile' id='mMenus'>
  <span onClick={closeMenus} className='close-btn'>
    &times;
  </span>

<ul className="navbar-nav">

      <li className="nav-item">
         <NavLink 
          style={({isActive})=>{
            return isActive ? {backgroundColor:'red'}:{color:'#000'}
          }} 
         
         to="/"> Home</NavLink>          
        </li>

        <li className="nav-item">
        <NavLink 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{color:'#000'}
        }}         
        to="/blog"> Blog</NavLink>
        </li>

        <li className="nav-item">
        <NavLink 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{color:'#000'}
        }} 
        to="/about"> About</NavLink>
        </li>

        <li className="nav-item">
        <NavLink 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{color:'#000'}
        }} 
        to="/menu"> Menu</NavLink>
        </li>

        <li className="nav-item">
        <NavLink
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{color:'#000'}
        }} 
         to="/contact-us">  BNB and TRIP Plan</NavLink>          
        </li>        
      </ul>
  


</div>







    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      </ul>
      <ul className="d-flex navbar-nav justify-content-center align-items-center">
      <li className="nav-item">
      <NavLink 
      style={({isActive})=>{
        return isActive ? {backgroundColor:'red'}:{}
      }} 
       to="/"> Home</NavLink>
        </li>

        <li className="nav-item">
        <NavLink
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{}

        }} 
        to="/blog"> Blog</NavLink>
        </li>

        <li className="nav-item">
        <NavLink 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{}
        }} 
        to="/about"> About</NavLink>
        </li>



        <li className="nav-item">
        <NavLink style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{}

        }} 
        to="/menu"> Menu</NavLink>
        </li>

        <li className="nav-item">
        <NavLink 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'red'}:{}
        }} 
        to="/contact-us">  BNB and TRIP Plan</NavLink>
        </li>

        
      </ul>
    </div>
  </div>

  </nav>
  )
}

export default MainMenu