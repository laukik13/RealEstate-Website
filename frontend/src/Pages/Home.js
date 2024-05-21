import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import {BiSearch} from 'react-icons/bi'
import {VscSettings} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Listcard from '../Component/Listcard'
import Choosecard from '../Component/Choosecard'
import Teamcard from '../Component/Teamcard'
import { Carousel } from 'antd'
import Testimonialscard from '../Component/Testimonialscard'
import Navbar from '../Component/Navbar'
import { BsTelephone} from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';



const Home = () => {
  
  return (
   <>
   <section className='home-wrapper'>
       <Navbar/>
      <div className='home-inner-wrapper'>
            <p>It's great to be home!</p>
            <h3 className='txt-head'>
            Find Your Residence
            <br/>
               <span className='txt-head2'>Home</span> 
            </h3>
           <div>
            <Tabs
            defaultActiveKey="buy"
            className="mb-3"
            >
            <Tab eventKey="buy" title="Buy">
             <div className='search-wrapper shadow'>
               <form className='form-wrapper'>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Type</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Location</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Property</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
                <Link to='/'><VscSettings/> Advanced<br/>
                Search</Link>
               </div>
               <div>
                <button type='submit' className='btn-search'><BiSearch/>Search</button>
               </div>
               </form>
             </div>
            </Tab>
            <Tab eventKey="sold" title="Sold">
            <div className='search-wrapper shadow'>
            <form className='form-wrapper'>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Type</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Location</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Property</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
                <Link to='/'><VscSettings/> Advanced<br/>
                Search</Link>
               </div>
               <div>
                <button type='submit' className='btn-search'><BiSearch/>Search</button>
               </div>
               </form>
            </div>
            </Tab>
            <Tab eventKey="rent" title="Rent">
            <div className='search-wrapper shadow'>
            <form className='form-wrapper'>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Type</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Location</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
               <label>Property</label>
               <select className="search-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               </div>
               <div className='d-flex justify-content-center align-items-center gap-10'>
                <Link to='/'><VscSettings/> Advanced<br/>
                Search</Link>
               </div>
               <div>
                <button type='submit' className='btn-search'><BiSearch/>Search</button>
               </div>
               </form>
            </div>
            </Tab>
            </Tabs>
           </div>
      </div>
   </section>

   <section className='listing-wrapper'>
  <div className='d-flex flex-column justify-content-center align-items-center'>
  <h5>Discover Our Featured Listings</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
  <div className='list-carousel-wrapper'>
  <Carousel>
  <div className='listing-inner-wrapper'>
  <Listcard
    imgsrc='./Images/flat1.jpg'
    title='New Apartment Nice Wiew'
    adds='Quincy St, Brooklyn, NY, USA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
    <Listcard
    imgsrc='./Images/flat2.jpg'
    title='Skyper Pool Apartment'
    adds='112 Glenwood Ave Hyde Park, Boston, MA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$5,250/mo'
    />
    <Listcard
    imgsrc='./Images/flat3.jpg'
    title='New Caledonian Wharf'
    adds='251 SW 6th Ln Florida City, FL'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$2,300/mo'
    />
    <Listcard
    imgsrc='./Images/flat4.jpg'
    title='Spacious Family Home'
    adds='4 W 21st St Flatiron District, New York, NY'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
  </div>
  <div className='listing-inner-wrapper'>
  <Listcard
    imgsrc='./Images/flat1.jpg'
    title='New Apartment Nice Wiew'
    adds='Quincy St, Brooklyn, NY, USA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
    <Listcard
    imgsrc='./Images/flat2.jpg'
    title='Skyper Pool Apartment'
    adds='112 Glenwood Ave Hyde Park, Boston, MA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$5,250/mo'
    />
    <Listcard
    imgsrc='./Images/flat3.jpg'
    title='New Caledonian Wharf'
    adds='251 SW 6th Ln Florida City, FL'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$2,300/mo'
    />
    <Listcard
    imgsrc='./Images/flat4.jpg'
    title='Spacious Family Home'
    adds='4 W 21st St Flatiron District, New York, NY'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
  </div> 
  <div className='listing-inner-wrapper'>
  <Listcard
    imgsrc='./Images/flat1.jpg'
    title='New Apartment Nice Wiew'
    adds='Quincy St, Brooklyn, NY, USA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
    <Listcard
    imgsrc='./Images/flat2.jpg'
    title='Skyper Pool Apartment'
    adds='112 Glenwood Ave Hyde Park, Boston, MA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$5,250/mo'
    />
    <Listcard
    imgsrc='./Images/flat3.jpg'
    title='New Caledonian Wharf'
    adds='251 SW 6th Ln Florida City, FL'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$2,300/mo'
    />
    <Listcard
    imgsrc='./Images/flat4.jpg'
    title='Spacious Family Home'
    adds='4 W 21st St Flatiron District, New York, NY'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
  </div> 
  </Carousel>
  </div>
   </section>

   <section className='latest-wrapper'>
   <div className='d-flex flex-column justify-content-center align-items-center'>
  <h5>Why Choose Us</h5>
    <p>We provide full service at every step.</p>
  </div>
   <div className='choose-inner-wrapper'>
    <Choosecard
    imgsrc='./Images/handshake.gif'
    title='Trusted By Thousands'
    desc='With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
    />
    <Choosecard
    imgsrc='./Images/home.gif'
    title='Wide Renge Of Properties'
    desc='With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
    />
     <Choosecard
    imgsrc='./Images/calculator.gif'
    title='Financing Made Easy'
    desc='With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
    />
     <Choosecard
    imgsrc='./Images/earth.gif'
    title='See Neighborhoods'
    desc='With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
    />
   </div>
   </section>

<section className='trend-section'>
  <div className='background-fixed'></div>
  <div className='trend-wrapper'>
    <div className='trend-inner-wrapper'>
      <p>TRENDS</p>
      <h3>Vermont Farmhouse With Antique Jail Is the<br/> Week's Most Popular Home</h3>
      <button className='btn-read'>Read More</button>
    </div>
  </div>
</section>

   <section className='latest-wrapper'>
<div className='d-flex flex-column justify-content-center align-items-center'>
  <h5>Recent Properties for Rent</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
  <div className='list-carousel-wrapper'>
  <Carousel>
  <div className='listing-inner-wrapper'>
  <Listcard
    imgsrc='./Images/flat1.jpg'
    title='New Apartment Nice Wiew'
    adds='Quincy St, Brooklyn, NY, USA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
    <Listcard
    imgsrc='./Images/flat2.jpg'
    title='Skyper Pool Apartment'
    adds='112 Glenwood Ave Hyde Park, Boston, MA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$5,250/mo'
    />
    <Listcard
    imgsrc='./Images/flat3.jpg'
    title='New Caledonian Wharf'
    adds='251 SW 6th Ln Florida City, FL'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$2,300/mo'
    />
    <Listcard
    imgsrc='./Images/flat4.jpg'
    title='Spacious Family Home'
    adds='4 W 21st St Flatiron District, New York, NY'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
  </div>
  <div className='listing-inner-wrapper'>
  <Listcard
    imgsrc='./Images/flat1.jpg'
    title='New Apartment Nice Wiew'
    adds='Quincy St, Brooklyn, NY, USA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
    <Listcard
    imgsrc='./Images/flat2.jpg'
    title='Skyper Pool Apartment'
    adds='112 Glenwood Ave Hyde Park, Boston, MA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$5,250/mo'
    />
    <Listcard
    imgsrc='./Images/flat3.jpg'
    title='New Caledonian Wharf'
    adds='251 SW 6th Ln Florida City, FL'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$2,300/mo'
    />
    <Listcard
    imgsrc='./Images/flat4.jpg'
    title='Spacious Family Home'
    adds='4 W 21st St Flatiron District, New York, NY'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
  </div>
  <div className='listing-inner-wrapper'>
  <Listcard
    imgsrc='./Images/flat1.jpg'
    title='New Apartment Nice Wiew'
    adds='Quincy St, Brooklyn, NY, USA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
    <Listcard
    imgsrc='./Images/flat2.jpg'
    title='Skyper Pool Apartment'
    adds='112 Glenwood Ave Hyde Park, Boston, MA'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$5,250/mo'
    />
    <Listcard
    imgsrc='./Images/flat3.jpg'
    title='New Caledonian Wharf'
    adds='251 SW 6th Ln Florida City, FL'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$2,300/mo'
    />
    <Listcard
    imgsrc='./Images/flat4.jpg'
    title='Spacious Family Home'
    adds='4 W 21st St Flatiron District, New York, NY'
    bed='4'
    bath='5'
    Garage='1'
    sqft='1200'
    price='$7,500/mo'
    />
  </div>
  </Carousel>
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
    // imgsrc='./Images/profile1.jpg'
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Marvin McKinney'
    role='Designer'
    />
    <Testimonialscard
    // imgsrc='./Images/profile2.jpg'
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Theresa Webb'
    role='Host'
    />
    <Testimonialscard
    // imgsrc='./Images/profile3.jpg'
    msg='I believe in lifelong learning and Skola is a great place to learn from experts. I have learned a lot and recommend it to all my friends'
    name='Robert Fox'
    role='Reporter'
    />
    <Testimonialscard
    // imgsrc='./Images/profile4.jpg'
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

   <section className='team-wrapper'>
<div className='d-flex flex-column justify-content-center align-items-center'>
  <h5>Meet Our Team</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
   <div className='team-inner-wrapper'>
   <Teamcard
   imgsrc='./Images/profile1.jpg'
   name='Robert Fox'
   role='Lead Designer'
   />
   <Teamcard
   imgsrc='./Images/profile2.jpg'
   name='Floyd Miles'
   role='CEO, Director'
   />
   <Teamcard
   imgsrc='./Images/profile3.jpg'
   name='Albert Flores'
   role='Marketer'
   />
   <Teamcard
   imgsrc='./Images/profile4.jpg'
   name='Darlene Robertson'
   role='Project Manager'
   />
   </div>
   </section>

   <section className='footer-section'>
       <div className='footer-inner-section'>
      <div className='container-xxl'>
      <div className='d-flex  align-items-center  gap-20'><BsTelephone className='ficon' /> <div className='d-flex flex-column '><p>+123 456 7890</p><p>info@houzing.com</p></div></div>
       <div className='d-flex  align-items-center  gap-20'><IoLocationOutline className='ficon'/><div className='d-flex flex-column '><p>Head Office </p><p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p></div></div>
       <div className='d-flex  align-items-center  gap-20'><LuClock3 className='ficon'/><div className='d-flex flex-column  '><p>9 am to 6 pm </p><p>Monday to Friday</p></div></div>
      </div>
       </div>
   </section>
   </>
  )
}

export default Home