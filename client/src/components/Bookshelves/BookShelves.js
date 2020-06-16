import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Bookshelf from './Bookshelf'
import ReactTooltip from "react-tooltip"
import './Bookshelves.css';

export class BookShelves extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid h-100 pb-0" id="bookshelves">
          <div className="row" style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
            <div className="col"><h3 className="text-light">My Bookshelves</h3></div>
          </div>
          
          <div className="row" id="bookshelf_icons">
            <div className="col-auto" md="auto" id="icons_col">
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks2.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler2" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks1.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler1" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks3.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler3" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks4.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler4" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks1.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler1" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks2.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler2" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks3.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler3" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks4.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler4" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks1.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler1" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks2.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler2" className="rounded img-fluid" /></div>
              <div id="icon_div"><img data-tip="Favourites" src="./images/bks3.jpg" data-toggle="collapse" data-target="#book-shelf" id="toggler3" className="rounded img-fluid" /></div>
              <ReactTooltip />
            </div>

            <div className="col px-0">
              <div id="book-shelf" className="collapse"><Bookshelf /></div>
            </div>

          </div>                    
        </div>  
      </div>
    )
  }
}
  
export default BookShelves