import React from 'react'

const Testimonialscard = (props) => {
  return (
    <>
    <div className='testimonial-card-wrapper'>
        <div className='testimonial-msg-wrapper'>
          <p>“{props.msg}“</p>
          <div className='testimonial-img-wrapper'>
          <img src={props.imgsrc} alt={props.imgsrc}/>
          </div>
        </div>
        <div className='testimonial-footer-wrapper'>
            <h5>{props.name}</h5>
            <p>{props.role}</p>
        </div>
    </div>
    </>
  )
}

export default Testimonialscard
