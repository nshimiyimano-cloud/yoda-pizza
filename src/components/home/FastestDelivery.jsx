import React from 'react';
import orderImg  from '../../assets/Images/order-img1.png';

function FastestDelivery() {
  return (
    <div className='fastest-delivery'>
      <div className='container'>
        <div className='row' >
        <div className='fastest-delivery-part col-xs-12 col-sm-9 col-md-6 col-lg-6' style={{marginTop:'8em'}}>
          <h1 style={{color:'#e11736'}}>Fastest Delivery</h1>
          <h6>Free delivery (UpTo 1.5 Kms Only) , After that Charges apply</h6>
          <a href="https://zalo.me/84932555372"><h2>+84 93 255 53 72</h2></a>

        </div>
        <div className='fastest-delivery-part col-xs-12 col-sm-12 col-md-6 col-lg-6'>
          <img src={orderImg}  style={{width:'105%'}} alt="Order image" />
         
          
        </div>
        </div>

      </div>





    </div>
  )
}

export default FastestDelivery