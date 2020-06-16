import React, { Component } from 'react'
import ReactStars from 'react-star-rating-component'
import './Bookshelf.css';

export class Bookshelf extends Component {
  render() {
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
                size={25}
                half={true}
                name="rating"
                onChange={newRating => {console.log(newRating); }}/>
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
                size={25}
                half={true}
                name="rating"
                onChange={newRating => {console.log(newRating); }}/>
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
                size={25}
                half={true}
                name="rating"
                onChange={newRating => {console.log(newRating); }}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf      