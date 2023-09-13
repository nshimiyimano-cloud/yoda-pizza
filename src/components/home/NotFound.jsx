import React from 'react';
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
  <section className='blog-page'>
     <div className='top-banner-image mb-5'>
        <p>Page Not Found</p>
        <div style={{width:'100%',height:'100%',zIndex:0,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.4)'}}></div>
      </div>

      <div className='blog-wrapper d-flex justify-content-center align-items-center flex-column' style={{marginTop:'200px',marginBottom:'200px'}}>
        <div style={{width:'40%'}}>
     <p> The page you requested was not found we suggest you to go back to HomePage</p>
     <Link style={{fontFamily:'Roboto',fontSize:'15px',fontWeight:500, textDecorationLine:'None',
    lineHeight:'1em',textTransform:'Uppercase',letterSpacing:'1px', wordSpacing:'1px',padding:'calc(25px / 2) 25px',
    backgroundColor:'#ff8474',color:'#ffffff', boxShadow:'1px 1px 1px 1px #000000',borderRadius:'10px'}} to='/'>BACK TO HOMEPAGE</Link>
    </div>
    </div>
       
  </section>
  )
}

export default NotFound;