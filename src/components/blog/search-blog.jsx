import react from 'react';
import { blogPost, uniqueCategory } from '../index'




const SearchBlog=()=>{
    return (
        <div className="search-container">
            <div className="search-input">
                <form action="" className='d-flex justify-content-between align-items-center'>
                    <input type="search" className="form-control" />
                    <button className='mx-2' style={{padding:'4px 10px'}} type="submit">Search</button>
                </form>
            </div>

            <h2 className='my-5' style={{fontSize:'40px'}}>Recent Posts</h2>

           
            {
          blogPost.slice(0,5).map(post=>{
            return (
                <div className="recent-posts">
                
                     <a  href={post.url}> {post.title} </a> 
                    
                   </div>
            )
          })
        }

        <h2 className='my-5' style={{fontSize:'40px'}}>Recent Comments</h2>

        <p>No comments to show</p>

        <h2 className='my-5' style={{fontSize:'40px'}}>Archives</h2>
        <p>
            <ul>
                <li><a href="">August 2023</a></li>
                <li><a href="">October 2022</a></li>
            </ul>
        </p>


        <h2 className='my-5' style={{fontSize:'40px'}}>Categories</h2>

        <div className='categories'>
            <ul>
            {
                
          uniqueCategory.map(post=>{
            return (
                <li><a style={{color:'inherit',fontSize:'18px'}} href={post}> {post} </a> </li>
                   
            )
          })
        }
               

            </ul>

        </div>





        </div>
    )

}


export default SearchBlog;