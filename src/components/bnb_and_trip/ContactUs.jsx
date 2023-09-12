import React from 'react';
import caputeDeTela from '../../assets/Images/blog_images/Captura-de-tela-RNB-TRIP.jpg.webp';     


const ContactUs = () => {
  return (
    <section>
    <div className='about-page top-banner-image'>
      <p>BNB and TRIP Plan</p>
      <div style={{width:'100%',height:'100%',zIndex:0,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.4)'}}></div>
    </div>

 <div className='article mx-auto' style={{width: '92%',marginTop:'50px',marginBottom:'90px'}}>
       

   


<div className='row mb-5 mt-5'>

<div className='col-xs-12 col-sm-12 col-md-8 col-lg-6 mb-3'>   

<h2 style={{fontSize:'45px',color:'#095c91ff'}}>Everything for your Travel</h2>
    <h1 className='text-center mb-5'  style={{color:'#000000ff',fontSize:'72px',fontWeight:900}}>BNB</h1>
<p>Our B&Bs in Vietnam are the perfect place to stay while you're exploring the country. From charming Nha Trang to bustling Ho Chi Minh City, we have a place that's just right for you—and at prices that won't break the bank.

From comfortable beds and private bathrooms to kitchens stocked with everything you need to cook your own meals,
 our B&Bs are an excellent choice for travellers looking for a comfortable and affordable home base in Vietnam. 
Our staff is available 24/7 to answer any questions about what it's like to live here,
 or if there's anything we can help you find when you arrive. We look forward to welcoming you!</p>  <br/>


<p style={{textAlign:'center'}}> <h2>
Tour Plan for<br/>
your trip
  </h2> </p>


  <p>
  Whether you're in town for business or pleasure, we know how important it is to have a guide when you're exploring your destination. 
  <strong style={{textDecoration:'underline'}}>That's why we offer local tour guides who can show you all that the city has to offer, tourist attractions</strong>, entertainment, leisure and much more!<br/>

   We've worked with many different types of customers over the years. Whether you're looking for a guided tour or just want to get out and explore on your own, we can help you save between 25% <br/>
   to 50% of what you'd pay if you went on your own.

   We are waiting for your contact to make your trip better! Count on us!
  </p>

  </div>


  <div className='col-xs-12 col-sm-12 col-md-4 col-lg-6 d-flex align-items-center mb-3'> 
  <img src={caputeDeTela} alt="" width={'100%'} />       

 </div>


</div>





<div className='contact mb-5 mt-5'>
  <h2 style={{textAlign:'center'}}>You Can Connect with Us</h2>
<h6 style={{textAlign:'center'}}> Tell us about your requirements!</h6>


<div className='row'>

<div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5'>  
<form action="">
  <input type="text" name='name' placeholder='Name' className='form-control mb-2' />
  <input type="email" name='email' placeholder='Name' className='form-control mb-2' />
  <textarea name="message" id="" cols="30" rows="10" className='form-control mb-2'></textarea>
  <button 
  style={{paddingTop:'10px',paddingRight:'110px',
  paddingBottom:'10px',paddingLeft:'110px',
  backgroundColor:'#095c91', color:'#ffffff'}} 
  type="submit" className='btn'>Submit</button>
</form>

</div>

<div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5'>  
<iframe 
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65240045.046066254!2d57.05977468536245!3d3.6020536723393684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067efcf111b83%3A0x2b0dcc8fcbfc96ee!2zNjIvNSDEkOG6t25nIFThuqV0LCBWxKluaCBI4bqjaSwgTmhhIFRyYW5nLCBLaMOhbmggSMOyYSA2NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1693934430301!5m2!1sen!2sus"
             width={'100%'}
             height={230}
             style={{ border:'12px solid #333'}}
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
/>           
          </div> 






</div>

</div>
</div>
    

  </section>
  )
}

export default ContactUs