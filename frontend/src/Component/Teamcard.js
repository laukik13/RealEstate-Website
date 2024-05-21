import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Teamcard = (props) => {
  return (
    <>
     <div className='teamcard-warpper'> 
        <div className='profile-img-wrapper' style={{backgroundImage: `url(${props.imgsrc})`}}>
           <div className='profile-icon'>
              <div className='sm-icon-wrapper'>
              <BsFacebook className='sm-icon'/>
              <BsInstagram className='sm-icon'/>
              <BsTwitter className='sm-icon'/>
              <BsLinkedin className='sm-icon'/>
              </div>
           </div>
        </div>
        <div className='profile-title shadow'>
             <h6>{props.name}</h6>
             <p>{props.role}</p>
        </div>
    </div>
    </>
  )
}

export default Teamcard
