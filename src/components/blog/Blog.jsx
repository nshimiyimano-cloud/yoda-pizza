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
        
          <h4 className='card-text text-dark'> <a href={post.url}> {post.title} </a> </h4>
          <small>  {post.author} | {post.date}</small>
         
        </div>

        <div className='text-center'>
        <p className='card-text text-dark'> {post.desc}  </p>
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