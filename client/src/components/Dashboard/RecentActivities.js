import React from 'react';
import ReactStars from 'react-rating-stars-component'

const RecentActivities = (props) => {
    
  return (
      
    <div class="container" style={{overflowY:'scroll', height: '350px'}}>
        <div class="row" style={{paddingBottom:'10px'}}>
            <div class="col-md-1">
                <img alt="redwal" src="./images/redwall.jpg" style={{width:'80px'}}/>
            </div>
            <div class="col-md-10">
                <h5 class="font-weight-light">Added</h5>
                <h6 class="font-weight-dark">Bookshelf: Favourites</h6>
            </div>
            <div class="col-md-1">
            <p class="font-weight-light">5/13/20</p>
            </div>
        </div>
        <div class="row" style={{paddingBottom:'10px'}}>
            <div class="col-md-1">
                <img alt="redwal" src="./images/redwall.jpg" style={{width:'80px'}}/>
            </div>
            <div class="col-md-10">
                <h5 class="font-weight-light">Rated</h5>
                <ReactStars
                    size={25}
                    half={true}
                    onChange={newRating => {
                        console.log(newRating);
                    }}
                />
            </div>
            <div class="col-md-1">
            <p class="font-weight-light">5/13/20</p>
            </div>
        </div>
        <div class="row" style={{paddingBottom:'10px'}}>
            <div class="col-md-1">
                <img alt="redwal" src="./images/redwall.jpg" style={{width:'80px'}}/>
            </div>
            <div class="col-md-10">
                <h5 class="font-weight-light">Reviewed</h5>
                <h6 class="font-weight-dark">This book was very funny. Hehehehe.</h6>
            </div>
            <div class="col-md-1">
            <p class="font-weight-light">5/13/20</p>
            </div>
        </div>
    </div>
  );
};

export default RecentActivities;