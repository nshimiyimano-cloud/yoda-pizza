import React from 'react';


import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,
  faMapMarker
}
 from '@fortawesome/free-solid-svg-icons';
 import creatureImage1 from '../../assets/Images/creature-img1.jpg';
 import creatureImage2 from '../../assets/Images/creature-img2.jpg';
 import creatureImage3 from '../../assets/Images/creature-img3.jpg'
 import eventImage1 from '../../assets/Images/event-img1.jpg';
 import eventImage2 from '../../assets/Images/event-img2.jpg';
 import eventImage3 from '../../assets/Images/event-img3.jpg'




function Footer() {
  return (
    <footer className='footer'>
      <div className=" container">
      <div className='row '>
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
          <h2>Yoda Pizza- Nha Trang</h2>
          <p>
          It is a long established fact that a reader will be distracted
           by the readable content of a page when looking at its layout.
          </p>

        </div>

        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
          <h2>Contact Us</h2>
          <div class="media">
          <div className='float-start'><i  className="fa fa-map-marker"></i></div>
  
                 <div class="media-body">
                  <p>
                  62/5 Đặng Tất, Vĩnh Hải, Nha Trang, Khánh Hòa 650000, Vietnam
                  </p>       
                 </div>
                 </div>
           

                <div class="media">
                  <div className='float-start'><i  className="fa fa-phone"></i>  </div>
                  
                 <div class="media-body pl-3">
                  <p>
                  +84 93 255 53 72
                  </p>       
                 </div>
                 </div>

                 <ul className="d-flex  align-items-center list-unstyled">
                 <li><i  className="fa fa-facebook"></i> </li>
                  <li><i  className="fa fa-twitter"></i> </li>
                  <li><i  className="fa fa-instagram"></i> </li>
                  <li><i  className="fa fa-linkedin"></i> </li>         
               </ul>
             </div>




             <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
          <h2>Opening Time</h2>
          <p>Monday-Friday 3.00 pm-9.00pm</p>
          <p>Saturday - Sunday 3.00 pm-9:00 pm </p>
        </div>

        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
          <h2>Instagram</h2>
         <div className=" img-right-footer d-flex justify-content-center align-items-center flex-wrap">
          <img src={creatureImage1} alt="creature-image1" />
          <img src={creatureImage2} alt="creature-image2" />
          <img src={creatureImage3} alt="creature-image3" />
          <img src={eventImage1} alt="event-image1" />
          <img src={eventImage2} alt="event-image2" />
          <img src={eventImage3} alt="event-image3" />
          
         </div>
        </div>



       </div>       




      </div>
    </footer>
  )
}

export default Footer