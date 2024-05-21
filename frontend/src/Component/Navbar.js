import React from 'react'
import { Link } from 'react-router-dom'
import {FiPhone} from 'react-icons/fi'

const Navbar = () => {
  return (
   <>
   <div className='navbar-wrapper px-4'>
     <div className='d-flex gap-10 justify-content-center align-items-center'>
     <img src='./Images/logo.png' alt='logo'/>
        <h5>Company Name</h5>
     </div>
     <div className='navbar-link'>
        <Link to='/'>Home</Link>
        <Link to='/property'>Property</Link>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/'><FiPhone className='phone-icon'/> (+88)1990 6886</Link>
     </div>
  </div>
   </>
  )
}

export default Navbar
