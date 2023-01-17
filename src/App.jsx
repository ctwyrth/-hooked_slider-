import React from 'react';
import Slider from 'react-slick';

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

function App() {
   let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   };

   return (
      <div className="container">
         <Slider {...settings}>
            {sliderData.map((slide) => (
               <div className="card">
                  <div className="cardTitle">
                     <h1>{slide.fname}</h1>
                     <h2>{slide.lname}</h2>
                  </div>
                  <div className="cardContent">
                     <p>{slide.age}</p>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
}

const sliderData = [
   {
      fname: 'Harrison',
      lname: 'Ford',
      age: '32'
   },
   {
      fname: 'Carrie',
      lname: 'Fisher',
      age: '20'
   },
   {
      fname: 'Mark',
      lname: 'Hammil',
      age: '19'
   },
   {
      fname: 'Anthony',
      lname: 'Daniels',
      age: '30'
   },
   {
      fname: 'Alec',
      lname: 'Guiness',
      age: '55'
   },
   {
      fname: 'Peter',
      lname: 'Mayhew',
      age: '42'
   },
   {
      fname: 'Daisy',
      lname: 'Ridley',
      age: '24'
   },
   {
      fname: 'Adam',
      lname: 'Driver',
      age: '28'
   },
]

export default App
