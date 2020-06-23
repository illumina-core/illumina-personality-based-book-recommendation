import React, { Component } from 'react'
import { remove_shelf_book, remove_shelf } from '../Services'
import './Bookshelf.css';

export class Bookshelf extends Component {

  removeShelfBook(e) {
    const arr = e.target.value.split('||')
    const data = {
        book: arr[0],
        shelf: arr[1]
    }
    remove_shelf_book(data).then(res =>{
        alert('Book removed')
        window.location.reload()
    }).catch(err =>{
        alert(err)
    })
  }

  removeShelf(e){
    remove_shelf(this.props.shelf).then(res =>{
        alert('Shelf removed')
        window.location.reload()
    }).catch(err =>{
        alert(err)
    })
  }


  render() {

    const url = window.location.protocol + "//" + window.location.host
    return (
      <div className="container-fluid pt-0" id="bks_book">
        <div className="row">
          <div className="col-9" id="bks_heading"><h3><b>{this.props.shelf}</b></h3></div>
          <div className="col-auto">
            <button
              className="btn btn-danger"
              value={this.props.shelf}
              onClick={e => this.removeShelf(e)}
              ><i className="fa fa-trash" aria-hidden="true" /> Remove</button>
          </div>
        </div >

        {
          this.props.books.map((book) =>(
            <div className="row" id="bks_info" key={book.id}>
              <div className="col-auto">
                <img alt={book.title} src={book.cover_image} className="rounded img-fluid" />
              </div>

              <div className="col-9">
                <h4 className="font-weight-light">
                  <a href={url + '/book/' + book.id}>
                    {book.title}
                  </a>
                </h4>
                <h5 className="font-weight-light">{book.author.toString()}</h5>
              </div>

              {localStorage.logged_in && 
              <div className="col-auto">
                  <button
                  className="btn btn-danger"
                  value={book.id + '||' + this.props.shelf}
                  onClick={e => this.removeShelfBook(e, 'value')}
                  ><i className="fa fa-trash" aria-hidden="true" /> Remove</button>
              </div>}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Bookshelf      