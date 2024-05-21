import React from 'react'
import Navbar from '../Component/Navbar'
import Testimonialscard from '../Component/Testimonialscard'
import { Carousel } from 'antd'

const About = () => {
  return (
    <>
    <section className='about-wrapper'>
        <Navbar/>
          <div className='about-inner-wrapper'>
              <h6>About Us</h6>
          </div>
    </section>
    <section className='about-detail-wrapper'>
          <div className='d-flex flex-column justify-content-center align-items-center mb-4 mt-4'>
            <h5>Our Mission Is To Houzing</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        <div className='container-xxl'>
        <div className='about-inner-detail-wrapper'>
              <div>
                <img src='./Images/about.jpg' alt='about'/>
              </div>
              <div className='px-2 py-2'>
              <p>Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci elementum augue, eget auctor metus ante sit amet velit.</p>
              <p>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
              <p>That’s why we go beyond the typical listings, by sourcing insights straight from locals and offering over 34 neighborhood map overlays, to give people a deeper understanding of what living in a home and neighborhood is really like.</p>
              </div>
          </div>
        </div>
    </section>
    <section className='testimonials-wrapper'>
  <div className='testimonials-inner-wrapper'>
  <div className='d-flex flex-column justify-content-center align-items-center'>
  <h5>Recent Properties for Rent</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
 <Carousel>
   <div className='testimonials-detail-wrapper'>
    <Testimonialscard
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Marvin McKinney'
    role='Designer'
    />
    <Testimonialscard
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Theresa Webb'
    role='Host'
    />
    <Testimonialscard
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Robert Fox'
    role='Reporter'
    />
    <Testimonialscard
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Guy Hawkins'
    role='Developer'
    />
   </div>
   <div className='testimonials-detail-wrapper'>
    <Testimonialscard/>
    <Testimonialscard/>
    <Testimonialscard/>
    <Testimonialscard/>
   </div>
   <div className='testimonials-detail-wrapper'>
    <Testimonialscard/>
    <Testimonialscard/>
    <Testimonialscard/>
    <Testimonialscard/>
   </div>
  </Carousel>
 </div>
   </section>

    </>
  )
}

export default About
