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



/* Images for blog */
import creatureImg from '../assets/Images/blog_images/creature-img2.jpg.webp';
import P_blog1 from '../assets/Images/blog_images/p_blog1-768x432.jpg.webp';
import no_screenshot from '../assets/Images/blog_images/no_screenshot.png';
import p_blog2 from '../assets/Images/blog_images/p_blog2-768x432.jpg.webp';
import p_blog3 from '../assets/Images/blog_images/p_blog3-768x432.jpg.webp';
import p_blog4 from '../assets/Images/blog_images/p_blog4-768x432.jpg.webp'
import capturaDeTela1 from '../assets/Images/blog_images/Captura-de-tela-2022-10-27-203325-768x540.jpg.webp'
import capturaDeTela2 from '../assets/Images/blog_images/Captura-de-tela-RNB-TRIP.jpg.webp'














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





export const blogPost=[
  {
    id:1,
    img:creatureImg,
    title:'Yoda Pizza – Nha Trang’s Pizza Destination for Unforgettable Experiences',
    desc:'',
    author:' pierrecarvalho2003',
    date:'3 Aug, 23',
    url:'',
    category:'Restaurants'
  },
  {
    id:2,
    img:creatureImg,
    title:'Delicious Vegetarian Pizzas – Yoda Pizza’s Bounty of Flavors',
    desc:'',
    author:' pierrecarvalho2003',
    date:'3 Aug, 23',
    url:'',
    category:'Restaurants'

  },
  {
    id:3,
    img:creatureImg,
    title:'The Best Pizza Place in Nha Trang – Yoda Pizza’s Secret Ingredients to Success',
    desc:'',
    author:' pierrecarvalho2003',
    date:'3 Aug, 23',
    url:'',
    category:'Restaurants'

  },
  {
    id:4,
    img:capturaDeTela1,
    title:'Where to Eat Pizza in Nha Trang – Yoda Pizza’s Top Recommendations',
    desc:'',
    author:' pierrecarvalho2003',
    date:'3 Aug, 23',
    url:'',
    category:'Restaurants'

  },
  {
    id:5,
    img:capturaDeTela2,
    title:'The Best Pizza Delivery in Nha Trang, Vietnam – Yoda Pizza',
    desc:'',
    author:' pierrecarvalho2003',
    date:'2 Aug, 23',
    url:'',
    category:'Restaurants'

  },
  {
    id:6,
    img:p_blog2,
    title:'Events with Pizzas',
    desc:`It is a long established fact that a reader will be distracted by the readable content of a page`,
    author:'Nik',
    date:'27 Oct, 22',
    url:'',
    category:'Events'
  },
  {
    id:7,
    img:p_blog3,
    title:'Enjoy your Meal with your Family this Wednesday',
    desc:`It is a long established fact that a reader will be distracted by the readable content of a page when looking.`,
    author:'Nik',
    date:'27 Oct, 22',
    url:'',
    category:'Pizza Meal'
  },
  {
    id:8,
    img:p_blog4,
    title:'The Restaurant Expert',
    desc:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.`,
    author:'Nik',
    date:'27 Oct, 22',
    url:'',
    category:'Restaurants'

  },
  {
    id:9,
    img:P_blog1,
    title:'Types Of Pizza',
    desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .`,
    author:' pierrecarvalho2003',
    date:' Aug, 23',
    url:'',
    category:'Pizza'
  },
  {
    id:10,
    img:no_screenshot,
    title:'Yoda Pizza: A Pride LGBTQ Owned Loving Company Serving Up Delicious Pizza',
    desc:'',
    author:'Nik',
    date:'27 Oct, 22',
    url:'',
    category:'Uncategorized'

  }
]








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


/*  all datas about menu */


export const generalPizzaMenu=[
  {
  id:1,
  name:'Chicken Mushroom Pizza',
  price:'90K'
},
{
  id:2,
  name:'Minced Beef ‚quail eegs Pizza',
  price:'90K'
},
{
  id:3,
  name:'Sausage .Bacon Pizza',
  price:'90K'
},
{
  id:4,
  name:'Ham, Corn Pizza',
  price:'90K'
},
{
  id:5,
  name:'Cheese Pizza',
  price:'90K'
},
{
  id:6,
  name:'Vegetarian Pizza',
  price:'90'
},
{
  id:7,
  name:'Bacon, Corn, Mushroom Pizza',
  price:'90K'
},
{
  id:8,
  name:'Bacon, Corn, Mushroom Pizza',
  price:'90K'
}

]



export const spaghetti=[
  'BEEF SPAGHETTI',
  'BACON SPAGHETTI',
  'CHICKEN And MUSHROOM SPAGHETTI',
  'HAM And MUSHROOM SPAGHETTI',
  'VEGETARIAN SPAGHETTI'
];



export const ourPizza=[
  {
  id:1,
  name:'PIZZA GÀ Nam',
  price:'90K'
},
{
  id:2,
  name:'Pizza Thit Nguöi Bäp',
  price:'90K'
},
{
  id:3,
  name:'PIZZA B° Bâm Tring',
  price:'90K'
},
{
  id:4,
  name:'Pizza Xúch Xich Trung',
  price:'90K'
},
{
  id:5,
  name:'Pizza Xuch Xich Ba Roi',
  price:'90K'
},
{
  id:6,
  name:'Pizza Rau',
  price:'90'
},
{
  id:7,
  name:'Pizza Chà Bông',
  price:'90K'
}
]



export const vietinameseCoffee=[
  {
  id:1,
  name:'Black Coffee',
  price:'20K'
},
{
  id:2,
  name:'Coffee With Condensed Milk',
  price:'25K'
},
{
  id:3,
  name:'Coffee With Fresh Milk',
  price:'22K'
}];

export const otherDrinks=[
  {
  id:1,
  name:'Saigon Beer',
  price:'15K'
},
{
  id:2,
  name:'Coco Cola',
  price:'15K'
},
{
  id:3,
  name:'Pepsi',
  price:'15K'
},
{
  id:4,
  name:'7up',
  price:'15K'
},
{
  id:5,
  name:'Red Bul',
  price:'15K'
},
{
  id:6,
  name:'Revive',
  price:'15K'
},
{
  id:7,
  name:'Green Tea In A Bottle',
  price:'15K'
},
{
  id:8,
  name:'Small Water',
  price:'15K'
}

]

/* code to search from blogPost array and return unique category to display on client  */
export const uniqueCategory = [];
blogPost.map(cat => {
    if (uniqueCategory.indexOf(cat.category) === -1) {
        uniqueCategory.push(cat.category)

    }
});



 export default testimonials;
 

