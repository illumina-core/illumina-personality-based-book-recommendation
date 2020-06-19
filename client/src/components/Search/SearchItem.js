import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { add_book_to_shelf } from '../Services'

export class SearchItem extends Component {

    handleInput(e) {
        const arr = e.target.value.split('||')
        const data = {
            shelf: arr[0],
            book: arr[1]
        }
        add_book_to_shelf(data).then(res =>{
            alert('Book added')
        }).catch(err =>{
            alert(err)
        })
    }

    render() {
        const { 
            _id,
            book_title,
            author,
            genres,
            cover_image,
            avg_rating
        } = this.props.book
        
        return (
            <div className="row shadow p-4 mx-1 mt-3 bg-white">
            <div className="col-md-auto" >
                <img alt={book_title} width="70" src={cover_image} className="rounded img-fluid" />
            </div>

            <div className="col-8">
                <h2 className="font-weight-light" >
                    <Link to={'/book/' + _id['$oid']}>
                        {book_title}
                    </Link>
                </h2>
                <h5 className="font-weight-light" ><b>Authors:</b> {author.toString()}</h5>
                <h5 className="font-weight-light" ><b>Genres:</b> {genres.toString()}</h5>
            </div>

            <div className="col-md-auto">
                <h5 className="font-weight-light" style={{paddingTop:'8px', paddingBottom:'5px', textAlign:'center'}}>Rating: <b>{avg_rating}</b></h5>
                <div className="dropdown">  
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                        Add to Bookshelf
                    </button>
                    <div className="dropdown-menu p-0">
                        {
                            this.props.shelves.map((shelf) =>(
                                <button key={shelf} 
                                value={shelf + '||' + _id['$oid']}
                                onClick={e => this.handleInput(e, "value")}
                                className="dropdown-item border border-top-0 border-right-0 border-left-0"
                                >{shelf}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SearchItem
