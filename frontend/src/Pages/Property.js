import React from 'react'
import Navbar from '../Component/Navbar'
import Listcard from '../Component/Listcard'
import { Tab, Tabs } from 'react-bootstrap'

const Property = () => {
  return (
    <>
        <section className='property-wrapper'>
        <Navbar/>
          <div className='property-inner-wrapper'>
              <h6>Property</h6>
          </div>
     </section>
     <section className='property-detail-wrapper'>
        <div className='container-xxl'>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="ALL">
      <div className='tab-grid'>
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
      </Tab>
      <Tab eventKey={2} title="BUY">
      <div className='tab-grid' data-aos="fade-down">
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
      </Tab>
      <Tab eventKey={3} title="SELL">
      <div className='tab-grid' data-aos="fade-down">
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
  
       </div>
      </Tab>
      <Tab eventKey={4} title="RENT">
      <div className='tab-grid'>
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
       </div>
      </Tab>
    </Tabs>
        </div>
     </section>
    </>
  )
}

export default Property
