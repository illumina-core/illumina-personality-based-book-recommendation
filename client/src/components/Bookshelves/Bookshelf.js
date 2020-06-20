import React, { Component } from 'react'
import './Bookshelf.css';

export class Bookshelf extends Component {

  render() {

    return (
      <div className="container-fluid pt-0" id="bks_book">
        <div className="row">
          <div className="col-auto" id="bks_heading"><h3><b>{this.props.shelf}</b></h3></div>
        </div >

        {
          this.props.books.map((book) =>(
            <div className="row" id="bks_info" key={book.id}>
              <div className="col-auto">
                <img alt={book.title} src={book.cover_image} className="rounded img-fluid" />
              </div>

              <div className="col-9">
                <h4 className="font-weight-light">{book.title}</h4>
                <h5 className="font-weight-light">{book.author.toString()}</h5>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Bookshelf      