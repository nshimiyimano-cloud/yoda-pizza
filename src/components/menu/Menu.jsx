import React from 'react'
import FastestDelivery from '../home/FastestDelivery'
import {
   generalPizzaMenu,
  spaghetti,
  ourPizza,
  vietinameseCoffee,
  otherDrinks } 
from '../index';


const Menu = () => {
  return (
    <section>
    <div className='menu-page top-banner-image'>
      <p>Menu</p>
      <div style={{width:'100%',height:'100%',zIndex:0,position:'absolute',top:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.4)'}}></div>
    </div>


    <div className='menus-wrapper' style={{margin:'auto',width:'95%'}}>
    <h2 style={{textAlign:'center'}}>OUr Pizza Menu</h2>
    <h6 style={{textAlign:'center'}}>Pleasure Of Choice</h6>

    <ul className='our-pizza-menu list-unstyled'>
      {
        generalPizzaMenu.map(pizza =>{
          return (
          
              <li key={pizza.id} className='d-flex flex-row justify-content-around'>
                <h6> { pizza.name } </h6>
                <h6> { pizza.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>



   
    <h6 style={{textAlign:'center'}}>Extra Chese 20k</h6>
    <h2 style={{textAlign:'center'}}>SPAGHETTI 45K</h2>

    <ul className='our-pizza-menu list-unstyled'>       

       {
       spaghetti.map(spaghet =>{
          return (
          
              <li>
                <h6> { spaghet} </h6>
                
              </li>            
          )
        })        
      }

    </ul>


    <h6 style={{textAlign:'center'}}>Choice of Sauce for Spaghetti</h6>
    <h2 style={{textAlign:'center'}}> 
      TOMATO SAUCE<br/>
      CREAM SAUCE<br/>
    
    Our Pizza 50K
    </h2>

    <ul className='our-pizza-menu list-unstyled'>
      {
        ourPizza.map(pizza =>{
          return (
          
              <li key={pizza.id} className='d-flex flex-row justify-content-around'>
                <h6> { pizza.name } </h6>
                <h6> { pizza.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>

    <h2 style={{textAlign:'center',borderWidth:'1px',borderStyle:'double',borderColor:'red',padding:'20px',fontSize:'50px',color:'red'}}>FRENCH FRIES 20K</h2>
    <h2 style={{textAlign:'center',color:'#000011'}}>Vietnamese coffee</h2>


    <ul className='our-pizza-menu list-unstyled'>
      {
        vietinameseCoffee.map(coffee =>{
          return (
          
              <li key={coffee.id} className='d-flex flex-row justify-content-around'>
                <h6> { coffee.name } </h6>
                <h6> { coffee.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>

     <h2 style={{textAlign:'center',color:'#644'}}>Tea bag without milk</h2>
     <ul className='our-pizza-menu list-unstyled'>     
          
              <li className='d-flex flex-row justify-content-around'>
                <h6>Jasmine Tea </h6>
                <h6> 15K </h6>
              </li>

              <li className='d-flex flex-row justify-content-around'>
                <h6> Chamomile Tea </h6>
                <h6> 15K </h6>
              </li>         
       </ul>

      <h2 style={{textAlign:'center',color:'#644'}}>Tea bag [fresh milk/condensed milk]<sup>*</sup></h2>
     <ul className='our-pizza-menu list-unstyled'>     
          
              <li className='d-flex flex-row justify-content-around'>
                <h6>Jasmine Tea </h6>
                <h6> 20K </h6>
              </li>

              <li className='d-flex flex-row justify-content-around'>
                <h6> asmine Tea </h6>
                <h6> 20K </h6>
              </li>         
       </ul>

       <h6 style={{color:'blue'}}><sup>*</sup>Sugar will not be added in the drink. It will be provided seperately</h6>
       <h2 style={{textAlign:'center',borderWidth:'1px',borderStyle:'double',borderColor:'red',padding:'20px',fontSize:'50px',color:'red'}}>Chocolate milk [Hot or Cold] 30K</h2>
       <h2 style={{color:'#333'}}>Other Drink</h2>


       <ul className='our-pizza-menu list-unstyled'>
      {
        otherDrinks.map(drink =>{
          return (
          
              <li key={drink.id} className='d-flex flex-row justify-content-around'>
                <h6> { drink.name } </h6>
                <h6> { drink.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>




       <h2 style={{textAlign:'center',borderWidth:'1px',borderStyle:'double',borderColor:'red',padding:'20px',fontSize:'50px',color:'red'}}>Chocolate Brownie  30K</h2>

    </div>
    


  <FastestDelivery />
  </section>
  )
}

export default Menu