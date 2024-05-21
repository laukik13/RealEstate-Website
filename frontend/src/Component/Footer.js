import React from 'react'
import { Link } from 'react-router-dom'
import { MdMail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import {LuFacebook} from 'react-icons/lu';
import {FiTwitter} from 'react-icons/fi';
import {AiOutlineYoutube} from 'react-icons/ai';
import  {AiOutlineInstagram} from 'react-icons/ai';
import  {FaPaperPlane} from 'react-icons/fa';

const Footer = () => {
  return (
   <>
   <footer className='footer-wrapper'>
      <div className='container-xxl'>
          <div className='footer-inner-wrapper'>
          <div  className='d-flex flex-column algin-items-center'>
                    <h5>Contact Us</h5>
                    <div className='d-flex  align-items-center mb-3 gap-10'><MdLocationOn className='iicon'/><p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p> </div>
                    <div className='d-flex  align-items-center mb-3  gap-10'><MdCall className='iicon' /> <p>+123 456 7890</p></div>
                    <div className='d-flex align-items-center mb-5  gap-10'><MdMail className='iicon' /><p>support@houzing.com</p></div>
                    <div className='d-flex algin-items-center gap-30'>
                          <Link to=''><LuFacebook className='fsm-icon'/></Link>
                          <Link to=''><FiTwitter className='fsm-icon'/></Link>
                          <Link to=''><AiOutlineYoutube className='fsm-icon'/></Link>
                          <Link to=''><AiOutlineInstagram className='fsm-icon'/></Link>
                    </div>
                </div>
                <div className='d-flex flex-column algin-items-center gap-10'>
                    <h5>Useful Links</h5>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Terms & Conditions</Link>
                    <Link to='/'>Privacy policy</Link>
                    <Link to='/'>Contact Us</Link>
                </div> 
                <div className='subscribe-inner-wrapper'>
           <h5>Subscribe now</h5>
           <p>We don’t send spam so don’t worry.</p>
          <div className='inputbox'><input type='text' name='email' placeholder='Enter email'/><button className='btn-plane-icon'><FaPaperPlane/></button></div>
          </div>
          </div>
          <p className='mt-2 text-center '>&copy; {new Date().getFullYear()} Created by Laukik Palekar</p>
      </div>
   </footer>
   </>
  )
}

export default Footer