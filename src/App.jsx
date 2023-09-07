import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import  { 
  MainMenu,
  TopBannerSlideshow,
  SpecialFoodCreations,
  LetChat,
  SpecialPerks,
  FatsestDelivery,
  CustomersComments,
  OurPlaces,
  Footer
 } from './components/index';


import './App.css'
import "react-slideshow-image/dist/styles.css";
import 'react-multi-carousel/lib/styles.css';


function App() {
  
  return (
    <>
     <MainMenu/>
     <TopBannerSlideshow/>
     <SpecialFoodCreations/>
     <LetChat/>
     <SpecialPerks/>
     <FatsestDelivery/>
     <CustomersComments/>
     <OurPlaces/>
     <Footer/>
       
    </>
  )
}

export default App
