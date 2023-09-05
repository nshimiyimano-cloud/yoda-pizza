import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger' 
 import whatsapImage from '../../assets/Images/WhatsApp.svg_.png';
 import zaloImage from '../../assets/Images/zalo.png';

function LetChat() {
  return (
    <section className='let-chat pt-5 pb-5'  style={{position:'relative',zIndex:2}} >
      <h2 className='text-center text-light' >Proudly in Nha Trang</h2>
    <h6 className='text-center text-light mb-5'>Visit Us, We Are Just Steps Away</h6>
      <div  className='let-chat-wrapper container mx-auto row'>

        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <div className='text-danger text-center'>

            <OverlayTrigger 
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click here to send a message!
          </Tooltip>
        )}
        placement="top"       
      >
        <span style={{color:'#61ce70',fontSize:'30px',fontFamily:'roboto'}}>Let Chat!</span>        
      </OverlayTrigger>, 

              
              <h2 style={{color:'#1d1d1d'}}>Connect with Us </h2>
            </div>
            <div className='text-center'>
            <a href="https://wa.me/+84932555372">  <img style={{width:'420px'}} src={whatsapImage} alt="Whatsap" /></a>
            </div>
            <div className='text-center'>
            <a href="https://zalo.me/84932555372">  <img style={{width:'150px'}} src={zaloImage} alt="Zalo" /></a>
            <p style={{fontSize:'30px',transform:'translateY(-25px)',fontWeight:600}}> Send a Message to Us</p>

            </div>
          </div> 

          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            
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

     <div style={{width:'100%',height:'100%',zIndex:-1,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(28, 23, 98, 0.6)'}}>
     </div>
    </section>
  )
}

export default LetChat