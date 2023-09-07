import MainMenu from "./home/MainMenu";
import TopBannerSlideshow from "./home/TopBannerSlideshow";
import SpecialFoodCreations from "./home/SpecialFoodCreations";
import LetChat from "./home/LetChat";
import SpecialPerks from "./home/SpecialPerks";
import FatsestDelivery from "./home/FastestDelivery";
import CustomersComments from "./home/CustomersComments";
import OurPlaces from "./home/OurPlaces";
import Footer from "./home/Footer";

/*  images for client testimonials*/
import myronK from '../assets/Images/myronK.png';
import jodieTran from '../assets/Images/jodieTran.png'
import noelNoImage from '../assets/Images/noelNoImage.png';
import pezzaliNoImage from '../assets/Images/pezalli.png'; 
import lucaNoImage from '../assets/Images/luca.png';
import rufNoImage from '../assets/Images/ruf.png';
import angusImage from '../assets/Images/angus.png';
import casperImage from '../assets/Images/casper.png';



export {
 
  MainMenu,
  TopBannerSlideshow,
  SpecialFoodCreations,
  LetChat,
  SpecialPerks,
  FatsestDelivery,
  CustomersComments,
  OurPlaces,
  Footer
  
};



/*  all data will be needed/used on clients testimonial is here */

const testimonials=[
   {
     id:1,
     name:'Myron K',
     timeAgo:'7 months ago',
     message:`
     Incredible pizza at such an affordable price! I come here often. And yoda the owner is such a sweet and heart centered person! So grateful to know him. Very sociable and full of love!
     `,
     prifile_img:myronK,
  },
  {
   id:2,
   name:'Jodie Tran',
   timeAgo:'7 months ago',
   message:`
   Can't believe with this 23cm high quality pizza is just less than 100k 😳😳😳, and the taste is so unbelievable. Can't expect more than this. High recommended 👍👍👍
   `,
   prifile_img:jodieTran,
 },
 {
   id:3,
   name:'Noel craddock',
   timeAgo:'7 months ago',
   message:`
   Can't believe with this 23cm high quality pizza is just less than 100k 😳😳😳, and the taste is so unbelievable. Can't expect more than this. High recommended 👍👍👍
   `,
   prifile_img:noelNoImage,
 },
 {
  id:4,
  name:'Eli Pezzali',
  timeAgo:'10 months ago',
  message:`
  Homemade Pizzas are awesome! really tasty and for a really good price!You can also eat spaghetti and mashed potatoes here.Furthermore, Yoda the owner of this place is a friendly, lovely, amazing and beautiful person !!! You have to come for the pizzas but also to share a great moment with him 😊
  `,
  prifile_img:pezzaliNoImage,
},
{
  id:5,
  name:'Luca Giusto',
  timeAgo:'10 months ago',
  message:`
  One homemade pizza you will never find anywhere else in Vietnam !! Yoda is very nice too 🙂
  `,
  prifile_img:lucaNoImage,
},
{
  id:6,
  name:'Cristian Ruf',
  timeAgo:'a year ago',
  message:`
  The pizzas are amazing. Excellent value money quality.I will come back for sure. The owner is really friendly.
  `,
  prifile_img:rufNoImage,
},
{
  id:7,
  name:'Angus McColl',
  timeAgo:'a year',
  message:`
  Cafe and provides a friendly service. Love this place. He does take-aways too. Prices are great too. Also offers beers and soft drinks.
  `,
  prifile_img:angusImage,
},
{
  id:8,
  name:'Casper Jan',
  timeAgo:'a year',
  message:`
  Fresh home-made pizza in different tastes.Also spaghetti and mashed potatoes.Delicious coffee, softdrinks, beer and more for reasonable prices.They have a vegetarian pizza too.English speaking!!!  `,
  prifile_img:casperImage,
}
 ];

 export const deviceResponsiveness = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
  };

 export default testimonials;
 

