import React from 'react'
import revierProfile from '../../assets/Images/revier_profile.jpg';
import poweredByGoogle from '../../assets/Images/powered_by_google_on_white.png';



function CustomersComments() {
  return (
    <section className='customers-comment py-5' style={{position:'relative',zIndex:2}}>
      <div className='comment-wrapper'>

    
       <h2 style={{color:'#fff'}} className='text-center' >Comments</h2>
    <h6 style={{color:'#fff'}} className='text-center mb-5'>Some Of Our Happy Customers</h6>

    <div className='comment-container d-flex justify-content-evenly align-items-center py-4'>
      <div className="comment-box">
        <p style={{color:'#fff'}}>
        ‘The Pizzas Are Amazing. Excellent Value Money Quality.
         I Will Come Back For Sure. The Owner Is Really Friendly.'
        </p>
        <span  className='float-end'>- Cristian Ruf</span>

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

    <div className='client-wrapper d-flex align-items-center py-5 mx-auto'>
      <div className='yoda-reviews'>
        <div className="yoda-review-box">
          <div className='img-profile float-start'> <img src={revierProfile} width={40} height={40} style={{borderRadius:'50%'}} /></div>
          <div className='d-flex flex-column'>
            <a href='https://maps.google.com/?cid=11945081134555208158'><span>Yoda Pizza cafe & BNB stays</span></a>
            <h1>5.0<span><i className="fa fa-start"></i><i className="fa fa-start"></i><i className="fa fa-start"></i><i className="fa fa-start"></i><i className="fa fa-start"></i> </span></h1>
            <p>Based on 42 reviews</p>
            <img src={poweredByGoogle} width={120} height={20} />
            <a className='btn btn-primary' href="https://search.google.com/local/writereview?placeid=ChIJfbwlzf9ncDER3hliDgF0xaU">review us on <i className='fa fa-goole'> </i></a>
          </div>
        </div>
      </div>
      
      <div className='clients-slides'>

      </div>


    </div>

    <div style={{width:'100%',height:'100%',zIndex:-1,position:'absolute',
    top:0,bottom:0,left:0,backgroundColor:'rgba(28, 23, 98, 0.6)'}}></div>
    
    </section>
  )
}

export default CustomersComments