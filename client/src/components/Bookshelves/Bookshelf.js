import React, { Component } from 'react'
import { remove_shelf_book, remove_shelf } from '../Services'
import { EditShelf } from './EditShelf'
import './Bookshelf.css';

export class Bookshelf extends Component {

  removeShelfBook(val) {
    const arr = val.split('||')
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

  removeShelf(shelf){
    remove_shelf(shelf).then(res =>{
        alert(res.data.result)
        window.location.reload()
    }).catch(err =>{
        alert(err)
    })
  }


  searchShelf(shelf){
    // Declare variables
    var input, filter, rows, b, i, txtValue;
    input = document.getElementById(shelf + 'search');
    filter = input.value.toUpperCase();
    rows = document.getElementsByName(shelf + 'book')

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < rows.length; i++) {
      b = rows[i].getElementsByTagName("b")[0];
      if (b) {
        txtValue = b.textContent || b.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  }

  render() {

    const url = window.location.protocol + "//" + window.location.host
    return (
      <div className="container-fluid pt-0" id="bks_book">
        <div className="row">
          <div className="col-7" id="bks_heading" style={{paddingTop:'5px', paddingBottom:'5px'}}><h3 className="font-weight-light"><strong>{this.props.shelf.shelf_title}</strong></h3></div>
          <div className="col" style={{paddingTop:'5px', paddingBottom:'5px', paddingRight:'20px', paddingLeft:'2px'}}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-8">
                  <input 
                  type="text"
                  className="form-control"
                  id={this.props.shelf.shelf_title + 'search'}
                  placeholder="Search Book Title"
                  onKeyUp={this.searchShelf.bind(this, this.props.shelf.shelf_title)}
                   />
                </div>
                <div className="col">
                  <button 
                  className="btn mr-1"
                  onClick={this.removeShelf.bind(this, this.props.shelf.shelf_title)}
                  style={{backgroundColor:'white', border:'1px solid #151B2D', paddingLeft:'10px', paddingRight:'10px'}}
                  >
                    <i className="fa fa-trash" aria-hidden="true" style={{color:'#151B2D'}}/>
                  </button>
                </div>
                <div className="col">
                  <EditShelf shelf={this.props.shelf} style={{display: "inline-block"}}/>
                </div>
              </div>
            </div>
          </div>
        </div >

        {
          this.props.books.map((book) =>(
            <div className="row" id="bks_info" name={this.props.shelf.shelf_title + 'book'} key={book.id}>
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
              
              <div className="col-auto">
                  <button
                  className="btn"
                  onClick={this.removeShelfBook.bind(this, book.id + '||' + this.props.shelf.shelf_title)}
                  style={{backgroundColor:'white', border:'1px solid #151B2D', paddingLeft:'10px', paddingRight:'10px'}}
                  >
                    <i className="fa fa-trash" aria-hidden="true" style={{color:'#151B2D'}}/>
                  </button>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Bookshelf      