import React, { Component } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class TopBookshelves extends Component {
  
  render() {
    
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
    }
    
    const car_style = {
      border:'1.5px solid black'
    }
    return (
      <div>
        {
          this.props.shelves.length !== 0 && 
          <Carousel 
          swipeable={false}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          >
            {
              this.props.shelves.map((shelf) =>(
                <div key={shelf.shelf_title} className="container-fluid">
                  <div className="row">
                      <h4 className="text-center w-100">
                        <a className="text-dark text-decoration-none" href={this.props.url + "/book-shelves/" + shelf.shelf_title}>
                          {shelf.shelf_title}
                        </a>
                      </h4>
                  </div>
                  <div className="row">
                    <a href={this.props.url + "/book-shelves/" + shelf.shelf_title}>
                      <img className="img-fluid" alt={shelf.shelf_title} src={shelf.shelf_pic} style={car_style} />
                    </a>
                  </div>
                </div>
              ))
            }
      
          </Carousel>
        }
      </div>
      
    )
  }
}

export default TopBookshelves