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


    <div className='menus-wrapper'>
    <h2 style={{textAlign:'center'}}>OUr Pizza Menu</h2>
    <h6 style={{textAlign:'center'}}>Pleasure Of Choice</h6>

    <ul className='our-pizza-menu list-unstyled'>
      {
        generalPizzaMenu.map(pizza =>{
          return (
          
              <li key={pizza.id} className='d-flex flex-row justify-content-between container'>
                <h6> { pizza.name } </h6>
                <h6 className='color-red'> { pizza.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>



   
    <h6 style={{textAlign:'center',color:'#ff7900',fontSize:'40px' }}>Extra Chese 20k</h6>
    <h2 style={{textAlign:'center'}}>SPAGHETTI 45K</h2>

    <ul className='spaghet-menu list-unstyled container'>       

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
    
   <span style={{color:'#e11736',fontSize:'50px'}}> Our Pizza 50K</span>
    </h2>

    <ul className='pizza-menu list-unstyled'>
      {
        ourPizza.map(pizza =>{
          return (
          
              <li key={pizza.id} className='d-flex flex-row justify-content-between container'>
                <h6> { pizza.name } </h6>
                <h6 className='color-red'> { pizza.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>

    <h2 className='border-box' style={{textAlign:'center',borderColor:'red',padding:'20px',fontSize:'50px',color:'red'}}>FRENCH FRIES 20K</h2>
    <h2 style={{textAlign:'center',color:'#4e3321',marginBottom:'50px',fontSize:'50px'}}>Vietnamese coffee</h2>


    <ul className='coffee-menu list-unstyled'>
      {
        vietinameseCoffee.map(coffee =>{
          return (
          
              <li key={coffee.id} className='d-flex flex-row justify-content-between container'>
                <h6> { coffee.name } </h6>
                <h6> { coffee.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>

     <h2 style={{textAlign:'center',color:'#4e3321',marginBottom:'50px',fontSize:'50px'}}>Tea bag without milk</h2>
     <ul className='tea-menu list-unstyled'>     
          
              <li className='d-flex flex-row justify-content-between container'>
                <h6>Jasmine Tea </h6>
                <h6> 15K </h6>
              </li>

              <li className='d-flex flex-row justify-content-between container'>
                <h6> Chamomile Tea </h6>
                <h6> 15K </h6>
              </li>         
       </ul>

      <h2 style={{textAlign:'center',color:'#646046',fontSize:'50px'}}>Tea bag [fresh milk/condensed milk]<sup>*</sup></h2>
     <ul className='tea-menu list-unstyled'>     
          
              <li className='d-flex flex-row justify-content-between container'>
                <h6>Jasmine Tea </h6>
                <h6> 20K </h6>
              </li>

              <li className='d-flex flex-row justify-content-between container'>
                <h6> asmine Tea </h6>
                <h6> 20K </h6>
              </li>         
       </ul>

       <h6 style={{color:'#095c91',fontSize:'35px',marginLeft:'5%',marginBottom:'120px',marginTop:'50px'}}><sup>*</sup>Sugar will not be added in the drink. It will be provided seperately</h6>
       <h2 className='border-box' style={{textAlign:'center',padding:'20px',fontSize:'50px',color:'#8b3d0f'}}>Chocolate milk [Hot or Cold] 30K</h2>
       <h2 style={{color:'#213a4e',fontSize:'50px',marginLeft:'5%',marginBottom:'100px',marginTop:'40px'}}>Other Drink</h2>


       <ul className='drink-menu list-unstyled'>
      {
        otherDrinks.map(drink =>{
          return (
          
              <li key={drink.id} className='d-flex flex-row justify-content-between container'>
                <h6> { drink.name } </h6>
                <h6> { drink.price } </h6>
              </li>
            
          )
        })
        
      }

    </ul>




       <h2 className='border-box' style={{textAlign:'center',padding:'20px',fontSize:'50px',color:'#8b3d0f',marginBottom:'50px'}}>Chocolate Brownie  30K</h2>

    </div>
    


  <FastestDelivery />
  </section>
  )
}

export default Menu