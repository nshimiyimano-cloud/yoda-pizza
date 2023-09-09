import React from 'react'
import ClientTestimonials from '../reusables-components/ClientTestimonials'

function CustomersComments() {
  return (
    <section 
    className='customers-comment py-5' 
    style={{position:'relative',zIndex:2}}>
      <div className='comment-wrapper'>

    
       <h2 style={{color:'#fff'}} 
       className='text-center' >Comments
       </h2>

       <h6 
       style={{color:'#fff'}} 
       className='text-center mb-5'>Some Of Our Happy Customers
       </h6>

    <div 
    className='comment-container d-flex 
    justify-content-evenly align-items-center'>

      <div 
       className="comment-box">
        <p style={{color:'#fff'}}>
        ‘The Pizzas Are Amazing. Excellent Value Money Quality.
         I Will Come Back For Sure. The Owner Is Really Friendly.'
        </p>

        <span  
        className='float-end'>
          - Cristian Ruf
          </span>

      </div>

      <div className="comment-box">

      <p style={{color:'#fff'}}>
          One homemade pizza you will never find anywhere else in Vietnam !! 
         Yoda is very nice too :).'
      </p>
      <span className='float-end'>- Luca Giusto</span>

      </div>

      <div className="comment-box">
      <p style={{color:'#fff'}}>
      One homemade pizza you will never find anywhere else in Vietnam !! 
      Yoda is very nice too :).'
        </p>
        <span className='float-end'>- Luca Giusto</span>

      </div>

    </div>    
    </div>


    <ClientTestimonials />


    <div style={{width:'100%',height:'100%',zIndex:-1,position:'absolute',
    top:0,bottom:0,left:0,backgroundColor:'rgba(28, 23, 98, 0.6)'}}></div>
    
    </section>
  )
}

export default CustomersComments