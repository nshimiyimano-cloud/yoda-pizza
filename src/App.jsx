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


function App() {
  const [count, setCount] = useState(0)

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
