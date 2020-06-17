import React from 'react';
import ReactStars from "react-rating-stars-component"

const RecentActivities = (props) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    
  return (
      
    <div className="container mh-50" style={{overflowY:'scroll'}}>
        <div className="row pb-2">
            <div className="col-md-1">
                <img alt="redwal" src="./images/redwall.jpg" style={{width:'80px'}}/>
            </div>
            <div className="col-md-10">
                <h5 className="font-weight-light">Added</h5>
                <h6 className="font-weight-dark">Bookshelf: Favourites</h6>
            </div>
            <div className="col-md-1">
            <p className="font-weight-light">5/13/20</p>
            </div>
        </div>
        <div className="row" style={{paddingBottom:'10px'}}>
            <div className="col-md-1">
                <img alt="redwal" src="./images/redwall.jpg" style={{width:'80px'}}/>
            </div>
            <div className="col-md-10">
                <h5 className="font-weight-light">Rated</h5>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                />
            </div>
            <div className="col-md-1">
            <p className="font-weight-light">5/13/20</p>
            </div>
        </div>
        <div className="row" style={{paddingBottom:'10px'}}>
            <div className="col-md-1">
                <img alt="redwal" src="./images/redwall.jpg" style={{width:'80px'}}/>
            </div>
            <div className="col-md-10">
                <h5 className="font-weight-light">Reviewed</h5>
                <h6 className="font-weight-dark">This book was very funny. Hehehehe.</h6>
            </div>
            <div className="col-md-1">
            <p className="font-weight-light">5/13/20</p>
            </div>
        </div>
    </div>
  );
};

export default RecentActivities;