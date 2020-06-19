import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
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

const Bookshelf = (props) => {

  return (
    <Carousel 
    swipeable={false}
    draggable={true}  
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    keyBoardControl={true}
  >
    <div><img alt="book_title" src="./images/redwall.jpg" style={{width: '150px', border:'1.5px solid black'}}></img></div>
    <div><img alt="book_title" src="./images/redwall.jpg" style={{width: '150px', border:'1.5px solid black'}}></img></div>
    <div><img alt="book_title" src="./images/redwall.jpg" style={{width: '150px', border:'1.5px solid black'}}></img></div>
    <div><img alt="book_title" src="./images/redwall.jpg" style={{width: '150px', border:'1.5px solid black'}}></img></div>
    <div><img alt="book_title" src="./images/redwall.jpg" style={{width: '150px', border:'1.5px solid black'}}></img></div>
    <div><img alt="book_title" src="./images/redwall.jpg" style={{width: '150px', border:'1.5px solid black'}}></img></div>
    </Carousel>
  );
}

export default Bookshelf;

