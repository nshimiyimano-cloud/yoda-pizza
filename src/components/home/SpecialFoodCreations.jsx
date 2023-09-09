import React from 'react'
import creatureImage1 from '../../assets/Images/creature-img1.jpg';
import creatureImage2 from '../../assets/Images/creature-img2.jpg';
import creatureImage3 from '../../assets/Images/creature-img3.jpg';


function SpecialFoodCreations() {
  return (
    <section className='special-food-creation mt-5 mb-5'>
       <h2 className='text-center'>Some Special Creations</h2>
    <h6 className='text-center mb-5'>Best Pizza, Best Value</h6>
      <div className='s-creation-wrapper mx-auto'>
     
    <div className="row ">
    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className='food-creation-card'>
        <img src={creatureImage1} alt="" />
        <div className='food-creation-card-footer text-center px-3 py-4'> 
        <h4 style={{color:'rgb(38, 133, 0)'}} className='mt-3 mb-3'>Chicken and Mushroom</h4> 

        <p>When you know you want to treat yourself, 
          but you don't really want any dishes that stand out in a crowd of others.
           Enjoy the best of our menu, Chicken and Mushroom.</p>  

           <a className='btn' href="mennu">Order Now</a>                

        </div>

      </div>     

      </div>

      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className='food-creation-card'>
        <img src={creatureImage2} alt="" />
        <div className='food-creation-card-footer text-center px-3 py-4'>  
        <h4 style={{color:'rgb(38, 133, 0)'}} className='mt-3 mb-3'>Vegetarian Pizza</h4> 

        <p>A wide variety of delicious vegetarian foods, including pizza,
           spaghetti sauce and so much more..</p>  

           <a className='btn' href="/menu">Order Now</a>           

        </div>
      </div>     


      </div>


      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className='food-creation-card'>
        <img src={creatureImage3} alt="" />
        <div className='food-creation-card-footer text-center px-3 py-4'>  
        <h4 style={{color:'rgb(38, 133, 0)'}} className='mt-3 mb-3'>Minced Beef, quail eggs</h4> 

        <p>Quail eggs, Beef slices and whatever customizations you want
           from the menu to make a delicious pizza.</p>  

           <a className='btn' href="/menu">Order Now</a>           

        </div>
      </div>     

      </div>



    </div>


      </div>
    </section>
  )
}

export default SpecialFoodCreations