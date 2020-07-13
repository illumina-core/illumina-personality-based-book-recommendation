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
          <div className="col-11" id="bks_heading" style={{paddingTop:'5px', paddingBottom:'5px'}}><h3 className="font-weight-light"><b>{this.props.shelf}</b></h3></div>
          <div className="col-auto" style={{paddingTop:'5px', paddingBottom:'5px', paddingRight:'20px', paddingLeft:'2px'}}>
            <button
              className="btn btn-danger"
              value={this.props.shelf}
              onClick={e => this.removeShelf(e)}
              style={{backgroundColor:'white', border:'1px solid #151B2D', paddingLeft:'10px', paddingRight:'10px'}}><i className="fa fa-trash" aria-hidden="true" style={{color:'#151B2D'}}/></button>
          </div>
        </div >

        {
          this.props.books.map((book) =>(
            <div className="row" id="bks_info" key={book.id}>
              <div className="col-auto">
                <img alt={book.title} src={book.cover_image} className="rounded img-fluid" />
              </div>

              <div className="col-10">
                <h4 className="font-weight-light">
                  <a href={url + '/book/' + book.id} style={{color:'#151B2D'}}>
                    <b>{book.title}</b>
                  </a>
                </h4>
                <h5 className="font-weight-light">{book.authors.toString()}</h5>
              </div>

              {localStorage.logged_in && 
              <div className="col-auto">
                  <button
                  className="btn btn-danger"
                  value={book.id + '||' + this.props.shelf}
                  onClick={e => this.removeShelfBook(e, 'value')}
                  style={{backgroundColor:'white', border:'1px solid #151B2D', paddingLeft:'10px', paddingRight:'10px'}}>
                    <i className="fa fa-trash" aria-hidden="true" style={{color:'#151B2D'}}/></button>
              </div>}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Bookshelf      