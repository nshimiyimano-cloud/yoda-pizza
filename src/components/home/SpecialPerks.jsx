import React from 'react'

import EventImg1  from '../../assets/Images/event-img1.jpg';
import EventImg2  from '../../assets/Images/event-img2.jpg';
import EventImg3  from '../../assets/Images/event-img3.jpg';
import EventImg4  from '../../assets/Images/menu-banner-img1.jpg';



function SpecialPerks() {
  return (
    <section className='special-perks mb-4'>

<div className='s-perks-wrapper'>
    <h2 className='text-center' >Special Perks</h2>
    <h6 className='text-center mb-5'>Serving Great Pizza From Our Family To Yours</h6>

    <div className="row">
      <div className="col col-xs-2 col-sm-12 col-md-6 col-lg-6">
        <div className="image-card text-center">
             <img src={EventImg1} alt="" />

          <h2 className='image-card-title '>             
            Pick One
          </h2>

          <div className='image-card-overlay'>
            <h2>Your Pizza</h2>

            <p> Choose Meat and Toppings!</p>
           </div>

      </div>
      </div>

      <div className="col col-xs-2 col-sm-12 col-md-6 col-lg-6">
      <div className="image-card text-center">
           <img src={EventImg2} alt="" />

          <h2 className='image-card-title move-top'>
             Celebrate Love
            </h2>
            <div className='image-card-overlay'>
              <h2>Lover's Off</h2>
              <p>We provide 10% Discounts to lovers.</p>
            </div>
      </div>
      </div>

      <div className="col col-xs-2 col-sm-12 col-md-6 col-lg-6">
             

      <div className="image-card text-center">
      <img src={EventImg3} alt="" />

          <h2 className='image-card-title move-top'>
              Enjoy Weekend
          </h2>
          <div className='image-card-overlay'>
            <h2>Don't Cook</h2>
            <p>Enjoy the Sunday vibes.</p>
          </div>

      </div>
      </div>

      <div className="col col-xs-2 col-sm-12 col-md-6 col-lg-6">

      <div className="image-card text-center">
         <img src={EventImg4} alt="" />

        <h2 className='image-card-title move-top'>
            Always the Best
        </h2>

        <div className='image-card-overlay'>
          <h2>Fresh Baked</h2>
          <p>Our Oven Is Serving Fresh Only!</p>
        </div>

        </div>
      </div>



  </div>

  </div>
    </section>
  )
}

export default SpecialPerks