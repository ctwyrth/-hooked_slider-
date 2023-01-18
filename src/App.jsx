import React from 'react';
import Slider from 'react-slick';

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

function App() {
   const settings = {
      dots: true,
      infinite: false,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            }
         },
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2,
            }
         },
         {
            breakpoint: 600,
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
            {sliderData.map((slide, idx) => (
               <div className="card" key={idx}>
                  <div className="card-background" style={{backgroundImage: `url(${slide.image})`}}>
                     <div className="cardTitle">
                        <h3>{slide.fname}</h3>
                        <h1>{slide.lname.toUpperCase()}</h1>
                     </div>
                     <div className="cardContent">
                        <p>{slide.character}</p>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
         <div className="container">
            <div className="slidesTest">
               {sliderData.map((slide, idx) => (
                  <div className="card2" style={{backgroundImage: `url(${slide.image})`}} key={idx}>
                     <div className="cardTitle">
                        <h3>{slide.fname}</h3>
                        <h1>{slide.lname.toUpperCase()}</h1>
                     </div>
                     <div className="cardContent">
                        <p>{slide.character}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

const sliderData = [
   {
      fname: 'Harrison',
      lname: 'Ford',
      character: 'Han Solo',
      image: './assets/hansolo.jpg',
   },
   {
      fname: 'Carrie',
      lname: 'Fisher',
      character: 'Princess Leia',
      image: './assets/princessleia.jpg',
   },
   {
      fname: 'Mark',
      lname: 'Hamill',
      character: 'Luke Skywalker',
      image: './assets/lukeskywalker.jpg',
   },
   {
      fname: 'Anthony',
      lname: 'Daniels',
      character: 'C-3PO',
      image: './assets/c3po.jpg',
   },
   {
      fname: 'Alec',
      lname: 'Guinness',
      character: 'Obi-wan Kenobi',
      image: './assets/obiwan.jpg',
   },
   {
      fname: 'Peter',
      lname: 'Mayhew',
      character: 'Chewbacca',
      image: './assets/chewbacca.jpg',
   },
   {
      fname: 'Daisy',
      lname: 'Ridley',
      character: 'Rey Skywalker',
      image: './assets/reyskywalker.jpg',
   },
   {
      fname: 'Adam',
      lname: 'Driver',
      character: 'Kylo Ren',
      image: './assets/kyloren.jpg',
   },
]

export default App
