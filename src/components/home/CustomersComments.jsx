import React from 'react'
import Carousel from 'react-multi-carousel';
import revierProfile from '../../assets/Images/revier_profile.jpg';
import poweredByGoogle from '../../assets/Images/powered_by_google_on_white.png';
import googleLogo from '../../assets/Images/googlelogo.svg';
import testimonials from '../index'
import { deviceResponsiveness } from '../index'



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

    <div 
    className='client-wrapper 
    d-flex justify-content-around 
    align-items-center mx-auto py-3'>

      <div className='yoda-reviews'>

        <div className="media yoda-review-box" 
        style={{width:'250px'}}>

          <img 
          className="align-self-start 
          mr-3 float-start" 
          src={revierProfile}  
          width={50} height={50} 
          style={{borderRadius:'50%'}} 
          alt="Generic placeholder image"/>

          <div className='media-header' 
          style={{paddingLeft:'50px'}}>

          <a  href='https://maps.google.com/?cid=11945081134555208158'>
            
            <span style={{marginLeft:'10px',
            fontWeight:'bold',color:'#00090fff',
            fontSize:'15px'}}>
              Yoda Pizza cafe & BNB stays
              </span>
              </a>
          <h1 style={{color:'#fb8e28',
          fontSize:'21px',fontWeight:'600',
               margin:'0 6px 0 0',
               verticalAlign: 'middle!important'}}>5.0<span>
          <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>           
          </span>  
           </h1>
        
          </div>
          <div className="media-body" style={{paddingLeft:'50px'}}>  
          <small>Based on 42 reviews</small><br/>
          <img src={poweredByGoogle} style={{width:'70%'}} height={23} />   
          <p>
          <a  style={{borderTopLeftRadius:'50px',borderTopRightRadius:'50px',borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px'}} className='btn btn-primary py-0.5 my-2' href="https://search.google.com/local/writereview?placeid=ChIJfbwlzf9ncDER3hliDgF0xaU">review us on <img src={googleLogo} width={20}  /> </a>  
          </p>

 
         </div>
        </div>
      </div>
      
      <div className='clients-slides'>
      <Carousel rswipeable={false}
            partialVisbile={false}
            centerMode={true}
            arrows={false}
            draggable={false}
            swipeable={true}
            showDots={true}
            slidesToSlide={1}
            responsive={deviceResponsiveness}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
         
            /*autoPlay={this.deviceType !== "mobile" ? true : false}*/
            autoPlay={true}
            
            rewind={true}
            shouldResetAutoplay={false}
            autoPlaySpeed={0}
            focusOnSelect={true}
            keyBoardControl={true}
            customTransition="all 2.5s ease-out"
            
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
           /* deviceType={this.props.deviceType}*/
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
  >



{testimonials.map(testimonial => {
        return (
          <div key={testimonial.id} className="media testimonial-card" >
            <img  className='float-end' src={googleLogo} width={20}  style={{marginTop:'10px',marginRight:'10px'}}/> 
          <img className="align-self-start mr-3 float-start" src={testimonial.prifile_img} width={50} style={{marginRight:'10px'}} alt="client profile"/>
          <div className='media-header'>          
          <span className="mt-0 t-name">{testimonial.name} </span><br/>
          <small>{testimonial.timeAgo}</small>
          

          </div>
          <div className="media-body">  
          
          <span>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>
            <i style={{color:'#ff6900'}} className="fa fa-star" aria-hidden="true"></i>          
          </span>  
        
          <div className='testimonial-msg'>{testimonial.message}</div>      
 
         </div>
       </div>
        );
      })
    }

</Carousel>;

      </div>


    </div>

    <div style={{width:'100%',height:'100%',zIndex:-1,position:'absolute',
    top:0,bottom:0,left:0,backgroundColor:'rgba(28, 23, 98, 0.6)'}}></div>
    
    </section>
  )
}

export default CustomersComments