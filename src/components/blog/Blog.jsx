import React from 'react';
import { blogPost } from '../index'






const Blog = () => {
  return (
  <section className='blog-page'>
     <div className='top-banner-image mb-5'>
        <p>Blog</p>

        <div style={{width:'100%',height:'100%',zIndex:0,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.4)'}}></div>

      </div>
      <div className='container d-flex justify-content-between flex-wrap mt-5 mb-5'>

        {
          blogPost.map(post=>{
            return (


              <div className='card mb-4'>
       <a href=""><img src={post.img} className='card-img-top' alt='...' /></a> 
        <div className='card-body'>
        
          <h4 style={{lineHeight:'18px'}}  className='card-text text-dark'> <a style={{color:'inherit',fontSize:'18px'}} href={post.url}> {post.title} </a> </h4>
          <small style={{fontSize:'13px'}}>By  {post.author} | {post.date}</small>
         
        </div>

        <div className='text-center'>
        <p className='card-text text-dark' style={{padding:'5px 5px 5px 5px',color:'#121212',textAlign:'left'}} > {post.desc}  </p>
        </div>
        </div>      

            )
          })


    
        }



      


      </div>  


  </section>
  )
}

export default Blog