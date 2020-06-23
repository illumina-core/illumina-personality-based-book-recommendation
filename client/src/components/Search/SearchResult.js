import React, { Component } from 'react'

import { Navbar } from '../layout/Navbar'
import { SearchItem } from './SearchItem'

import Pagination from "react-js-pagination";
import { search_book } from '../Services'

export class SearchResult extends Component {

    constructor(){
        super()
        this.state ={
            books: [],
            total: 0,
            activePage: 1,
            shelves: []
        }
    }

    componentDidMount(){        
        search_book(window.location.href.split('?')[1]).then(res =>{  
            this.setState({books: JSON.parse(res.data.books)})
            this.setState({total: parseInt(res.data.total)})
            if(localStorage.logged_in){
              this.setState({shelves: res.data.shelves})
            }
        })
      }   

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber })
      }

    render() {
        return (
            <React.Fragment>
                  <Navbar />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="alert alert-info alert-dismissible w-100">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <h3>Search Result</h3>
                      </div>
                    </div>
                    <div className="row">
                    <Pagination
                      hideDisabled
                      activePage={this.state.activePage}
                      itemsCountPerPage={1}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={5}
                      innerClass={'pagination mx-auto mt-2'}
                      itemClass={'page-item'}
                      linkClass={'page-link'}
                      onChange={this.handlePageChange.bind(this)}
                    />
                    </div>

                    {
                    this.state.books.slice(10*(this.state.activePage-1), 10*this.state.activePage).map((book) => (
                        <SearchItem key={book['_id']['$oid']} book={book} shelves={this.state.shelves}/>
                    ))
                    }

                    <div className="row">
                    <Pagination
                      hideDisabled
                      activePage={this.state.activePage}
                      itemsCountPerPage={1}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={5}
                      innerClass={'pagination mx-auto mt-2'}
                      itemClass={'page-item'}
                      linkClass={'page-link'}
                      onChange={this.handlePageChange.bind(this)}
                    />
                    </div>
                  </div>                
                </React.Fragment>
        )
    }
}

export default SearchResult