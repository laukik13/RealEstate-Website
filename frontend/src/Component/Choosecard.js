import React from 'react'

const Choosecard = (props) => {
  return (
    <>
     <div className='choosecard-warpper'> 
       <div className='choosecard-inner-wrapper'> 
        <img src={props.imgsrc} alt=''/>
              <h5>{props.title}</h5>
              <p>{props.desc}</p>
       </div>
    </div>
    </>
  )
}

export default Choosecard
