import React from 'react'

import bannnerSlider1 from '../../assets/Images/banner_slider1.jpg';
import bannnerSlider2 from '../../assets/Images/banner_slider2.jpg';
import { Fade } from "react-slideshow-image";




function TopBannerSlideshow() {

  const fadeImages = [bannnerSlider1,bannnerSlider2];
  const properties = {
    duration: 1500,
    transitionDuration: 1500,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: true    
  }




  return (
    <section>
      <div className='top-banner-slideshow'>

      <div className='d-flex flex-column justify-content-center align-items-center px-5' id='letTopInSlide'>
      <h2 style={{color:'#e11736'}} className='text-center' >The best Pizza!</h2>
    <h6 style={{color:'#095c91'}} className='text-center mb-5'>he most amazing pizza in all of Vietnam. Trust me you'll love it!</h6>

      </div>

      <div id='rightBottomInSlide'>

      <h2 style={{color:'#fff'}}  >Coke Free</h2>
    <h6 style={{color:'#fff'}} className='mb-5'>on 2 large size Pizzas</h6>
      </div>

      <Fade  {...properties}>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>        
      </Fade>
        

      </div>

     

    </section>
  )
}

export default TopBannerSlideshow