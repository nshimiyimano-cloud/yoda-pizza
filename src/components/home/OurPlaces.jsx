import React from 'react';
import commentImage1  from '../../assets/Images/comments-img1.jpg';
import razaimage2  from '../../assets/Images/Captura-de-tela-2022-10-27-203134-768x352.jpg';
import cardimage3  from '../../assets/Images/Captura-de-tela-2022-10-27-203325-768x540.jpg';
import cardimage4  from '../../assets/Images/Captura-de-tela-2022-10-27-203624.jpg';




function OurPlaces() {
  return (
    <>
   <section className='our-place' >
    <div className='service-wrapper' style={{margin:'auto',width:'95%'}}>
    <h2 >Our Place</h2>
    <h6>Serving Great Pizza From Our Family To Yours</h6>
    <div className='row my-5'>
      <div className='image-box col col-xs-12 col-sm-12 col-md-4 col-lg-4'>
      <img src={razaimage2}  alt=""/>
     <h3>Our restaurant</h3>
     <p>The perfect place to dine and spend your afternoons.</p>

      </div>


      <div className='image-box col col-xs-12 col-sm-12 col-md-4 col-lg-4'>
      <img src={cardimage3} alt="" />
     <h3>Stop... and enjoy!</h3>
     <p>Everything you need: Juice, pizzas, coffee, spaghetti, chips and more!</p>

      </div>

      <div className='image-box col-xs-12 col-sm-12 col-md-4 col-lg-4'>
      <img src={cardimage4} alt="" />
     <h3>Calm and Peaceful</h3>
     <p>Relax and enjoy, we will do our best to make your experience impeccable.</p>

      </div>

      <div className='image-box col col-xs-12 col-sm-12 col-md-4 col-lg-4'>
      <img style={{objectFit:'cover',height:'350px',width:'100%'}} src={commentImage1} alt="" />
     <p style={{color:'#0986c0',width:'unset'}}>Google business Site</p>
     

      </div>
      
       
       

    </div>
    </div>
   </section>

   </>
  )
}

export default OurPlaces