import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import  { 
  TopBannerSlideshow,
  SpecialFoodCreations,
  LetChat,
  SpecialPerks,
  FatsestDelivery,
  CustomersComments,
  OurPlaces,
 } from './components/index';


import './App.css'
import "react-slideshow-image/dist/styles.css";
import 'react-multi-carousel/lib/styles.css';


function App() {
  
  return (
    <>
     <TopBannerSlideshow/>
     <SpecialFoodCreations/>
     <LetChat/>
     <SpecialPerks/>
     <FatsestDelivery/>
     <CustomersComments/>
     <OurPlaces/>
         
    </>
  )
}

export default App
