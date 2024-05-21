import React from 'react'
import {BiBed} from 'react-icons/bi'
import {BiBath} from 'react-icons/bi'
import {BiCar} from 'react-icons/bi'
import {TfiRulerAlt2} from 'react-icons/tfi'
import {AiFillHeart} from 'react-icons/ai'

const Listcard = (props) => {
  return (
    <>
    <div className='listcard-warpper'> 
        <div className='listcard-head-wrapper'>
           <img src={props.imgsrc} alt={props.imgsrc} data-view="fullScreenPreview"/>
           <div className='overlay-wrapper'>
           <div className='listcard-head-btn-wrapper'>
            <button className='btn-featured'>FEATURED</button>
            <button className='btn-sale'>FOR SALE</button>
           </div>
           </div>
        </div>
        <div className='listcard-detail-wrapper'>
         <h5>{props.title}</h5>
         <p>{props.adds}</p>
         <div className='d-flex justify-content-center align-items-center gap-30'>
          <div className='d-flex flex-column justify-content-center align-items-center'><BiBed className='flat-icon'/><p>{props.bed} Beds</p></div>
          <div className='d-flex flex-column justify-content-center align-items-center'><BiBath className='flat-icon'/><p>{props.bath} Bath</p></div>
          <div className='d-flex flex-column justify-content-center align-items-center'><BiCar className='flat-icon'/><p>{props.garage} Garage</p></div>
          <div className='d-flex flex-column justify-content-center align-items-center'><TfiRulerAlt2 className='flat-icon'/><p>{props.sqft} Sq Ft</p></div>
         </div>
        </div>
        <div className='listcard-footer-wrapper'>
           <h5>{props.price}</h5>
           <AiFillHeart className='wishlist-icon'/>
        </div>
    </div>
    </>
  )
}

export default Listcard
