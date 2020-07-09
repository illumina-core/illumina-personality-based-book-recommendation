import React, { Component } from 'react'

import { Navbar } from '../layout/Navbar'
import { SearchItem } from './SearchItem'
import { SearchPersonalityItem } from './SearchPersonalityItem'

import Pagination from "react-js-pagination";
import { search_book, recommend_books_by_personality } from '../Services'

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
      if(this.props.location.search.split('?')[1].split('=')[0] === 'personality'){
        recommend_books_by_personality().then(res =>{
          if(res.data.nope){
            alert('Persoanlity not assigned')
            window.location.href = window.location.protocol + "//" + window.location.host + "/profile";
          }
          this.setState({books: res.data.books})
          this.setState({total: res.data.total})
          this.setState({shelves: res.data.shelves})
        })
      }
      else{
        search_book(window.location.href.split('?')[1]).then(res =>{  
          this.setState({books: JSON.parse(res.data.books)})
          this.setState({total: parseInt(res.data.total)})
          if(localStorage.logged_in){
            this.setState({shelves: res.data.shelves})
          }
        })
      }
    }   

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber })
      }

    render() {
      const type = this.props.location.search.split('?')[1].split('=')[0]
        return (
            <React.Fragment>
                  <Navbar />

                  <div className="row" style={{backgroundColor:"#151B2D", color:'#fff', paddingTop:'5px', paddingBottom:'5px'}}>

                  <h4 className="font-weight-light" style={{paddingLeft:'190px'}}>
                    Search Results
                    {type === 'personality' && " for Personality Recommendation"}
                    {type === 'title' && " for Book Title"}
                    {type === 'genre' && " for Genre"}
                    {type === 'author' && " for Author"}
                  </h4>

                  </div>
                  <div className="container-fluid mx-auto" style={{width:'80%'}}>

                    {type === 'personality' && this.state.books.slice(10*(this.state.activePage-1), 10*this.state.activePage).map((book) => (
                          <SearchPersonalityItem key={book['_id']['$oid']} book={book} shelves={this.state.shelves}/>
                      ))}

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