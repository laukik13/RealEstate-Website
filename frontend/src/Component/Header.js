import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FiPhone} from 'react-icons/fi'

const Header = () => {

   const[show,setShow]= useState(true);

   const controlNavbar=()=>{
      if(window.scrollY > 100)
      {
         setShow(false)
      }  
      else{
         setShow(true)
      }
      }

      useEffect(()=>{
         window.addEventListener('scroll',controlNavbar)
         return()=>{
         window.removeEventListener('scroll',controlNavbar)
         }
      },[])

  return (
   <>
  <header className={`header-wrapper ${show && 'hidden'} px-3`}>
     <div className='d-flex gap-10 justify-content-center align-items-center'>
     <img src='./Images/logo.png' alt='logo'/>
        <h5>Company Name</h5>
     </div>
     <div className='header-link'>
        <Link to='/'>Home</Link>
        <Link to='/property'>Property</Link>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/contact'><FiPhone className='phone-icon'/> (+88)1990 6886</Link>
     </div>
  </header>
   </>
  )
}

export default Header