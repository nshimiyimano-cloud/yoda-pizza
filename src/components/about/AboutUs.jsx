import React from 'react';


import CustomersComment from '../home/CustomersComments';
import caputeDeTela from '../../assets/Images/blog_images/Captura-de-tela-RNB-TRIP.jpg.webp';     
import OurPlaces from '../home/OurPlaces';
/* Captura-de-tela-2022-10-27-203134-768x352.jpg.webp';*/

function AboutUs() {
  return (
    <section>
      <div className='about-page top-banner-image'>
        <p>About</p>
        <div style={{width:'100%',height:'100%',zIndex:0,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.4)'}}></div>
      </div>
       
       <h2>Our History</h2>


      <div className='row'>

      <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>     

      <p>
      We're proud to serve you a variety of great food, including spaghetti, pizza, coffee and tea. 
      We also plan your tour and provide BNB (Bed and Breakfast). Our pizza is cooked fresh in the oven and uses fresh ingredients with original sauces to make a base for everything.
      </p> 


      <p>
      The Yoda Pizza is a quiet, calm place perfect for your stop! 
      We have been providing good meals to our customers for a long time, be a part of it with us.
      </p>  

      <p>
      We are a restaurant that takes pride in serving delicious food and maintaining an atmosphere that is friendly and inviting.
       Our commitment to quality has made us one of the most popular restaurants in the area and we look forward to seeing you soon!
      </p>

      <p> <strong>We love to have fun and we love to eat!</strong>   </p>


      <p>
      We are a pizza shop that serves you spaghetti, pizza, coffee and tea additionally we plan your tour and provide BNB (Bed and Breakfast).<br/>

      Our passion is to help you enjoy your time in our country by offering our services which include:

      </p>


      <p><strong> - Tour planning</strong></p>

      <p><strong>- BNB (Bed and Breakfast)</strong></p>


      <p><strong>- Pizza Shop</strong></p>







      

        </div>


        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'> 
        <img src={caputeDeTela} alt="" width={'100%'} />       

       </div>


      </div>

      
      <CustomersComment />
      <OurPlaces />

    </section>

    
    
  )
}

export default AboutUs