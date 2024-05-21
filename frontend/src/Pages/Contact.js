import React from 'react'
import Navbar from '../Component/Navbar'

const Contact = () => {
  return (
    <>
        <section className='contact-wrapper'>
        <Navbar/>
          <div className='contact-inner-wrapper'>
              <h6>Contact Us</h6>
          </div>
    </section>
    <section className='contact-detail-wrapper'>
       <div className='d-flex flex-column justify-content-center align-items-center mb-4 mt-4'>
       <h5>We're always eager to hear from you!</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
       </div>
       <div className='container-xxl'>
        <div className='contact-head-wrapper mb-5'>
             <div className='contact-head-inner-wrapper'>
              <img src='./Images/location.gif' alt='location.gif'/>
              <div><h6>Address</h6><p>329 Queensberry Street, NorthMelbourne VIC 3051, Australia</p></div>
             </div>
             <div className='contact-head-inner-wrapper'>
             <img src='./Images/phone.gif' alt='phone.gif'/>
              <div><h6>Contact</h6><p>Mobile: 123 456 7890</p><p>Mail: support@houzing.com</p></div>
             </div>
             <div className='contact-head-inner-wrapper'>
             <img src='./Images/clock.gif' alt='clock.gif'/>
              <div><h6>Hour of operation</h6><p>Monday - Friday: 09:00 - 20:00</p><p>Sunday & Saturday: 10:30 - 22:00</p></div>
             </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.4823239386504!2d72.89806206961575!3d19.1107574660746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80aa5200129%3A0xc109c004c836c7c3!2sNahar%20Amrit%20Shakti%2C%20MHADA%20Colony%2C%20Chandivali%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1691650210184!5m2!1sen!2sin" width="100%" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='contact-form mt-5'>
          <h5>Send Us An Email</h5>
          <form className='form-contact-wrapper'>
          <div className='d-flex gap-20'>
          <input type="text" className="" id="exampleFormControlInput1" placeholder="Fullname"/>
          <input type="email" className="" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div>
          <textarea className="" placeholder="Leave a comment here"></textarea>
          </div>
          </form>
        </div>
       </div> 
    </section>
    </>
  )
}

export default Contact
