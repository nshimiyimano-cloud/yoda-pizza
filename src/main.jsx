import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import AboutUs from './components/about/AboutUs.jsx';
import Menu from './components/menu/Menu.jsx';
import Blog from './components/blog/Blog.jsx';
import ContactUs from './components/bnb_and_trip/ContactUs.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom"


import  { 
  MainMenu,
  Footer
 } from './components/index';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MainMenu />
  <Routes>
    <Route path='/' element={<App />}  />
      <Route path='blog' element={<Blog />}  />
      <Route path='about' element={<AboutUs /> }  />
      <Route path='menu' element={<Menu />}  />
      <Route path='contact-us' element={<ContactUs />}  />


    
  </Routes>
   
  <Footer/>
    
  </BrowserRouter>,
)
