import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component"
import './Bookshelf.css';

export class Bookshelf extends Component {

  render() {

    const ratingChanged = (newRating) => {
      console.log(newRating);
    }

    return (
      <div className="container-fluid" id="bks_book">
        <div className="row">
          <div className="col-auto" id="bks_heading"><h3><b>Favourites</b></h3></div>
        </div >

        <div className="row" id="bks_info">
          <div className="col-auto">
            <img alt="title" src="./images/redwall.jpg" className="rounded img-fluid"></img>
          </div>

          <div className="col-9">
            <h4 className="font-weight-light">Redwall</h4>
            <h5 className="font-weight-light">Brian Jacques</h5>
          </div>
          
          <div className="col-auto">
          <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
          </div>
        </div>
        
        <div className="row" id="bks_info">
          <div className="col-auto">
            <img alt="title" src="./images/redwall.jpg" className="rounded img-fluid"></img>
          </div>

          <div className="col-9">
            <h4 className="font-weight-light">Redwall</h4>
            <h5 className="font-weight-light">Brian Jacques</h5>
          </div>
          
          <div className="col-auto">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />,
          </div>
        </div>
        
        <div className="row" id="bks_info">
          <div className="col-auto">
            <img alt="title" src="./images/redwall.jpg" className="rounded img-fluid"></img>
          </div>

          <div className="col-9">
            <h4 className="font-weight-light">Redwall</h4>
            <h5 className="font-weight-light">Brian Jacques</h5>
          </div>
          
          <div className="col-auto">
          <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf      