import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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

const TopBookshelves = (props) => {

  return (
    <Carousel 
    swipeable={false}
    draggable={true}
//   showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
     infinite={true}
//   autoPlay={props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
  keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
  >
    <div><img alt="img1" src="./images/bks1.jpg" style={{width: '300px', height: '300px', border:'1.5px solid black'}}></img></div>
    <div><img alt="img2" src="./images/bks2.jpg" style={{width: '300px', height: '300px',border:'1.5px solid black'}}></img></div>
    <div><img alt="img3" src="./images/bks3.jpg" style={{width: '300px', height: '300px',border:'1.5px solid black'}}></img></div>
    <div><img alt="img4" src="./images/bks4.jpg" style={{width: '300px', height: '300px',border:'1.5px solid black'}}></img></div>
    </Carousel>
  );
}

export default TopBookshelves;

