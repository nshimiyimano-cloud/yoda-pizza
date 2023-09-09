import React from 'react'
import FastestDelivery from '../home/FastestDelivery'

const Menu = () => {
  return (
    <section>
    <div className='menu-page top-banner-image'>
      <p>Menu</p>
      <div style={{width:'100%',height:'100%',zIndex:0,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.4)'}}></div>
    </div>


    <div className='service-wrapper' style={{margin:'auto',width:'95%'}}>
    <h2 >Our Place</h2>
    <h6>Serving Great Pizza From Our Family To Yours</h6>
    


    </div>
    


  <FastestDelivery />
  </section>
  )
}

export default Menu