import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { add_book_to_shelf } from '../Services'
import './Search.css';

export class SearchPersonalityItem extends Component {

    handleInput(e) {
        const arr = e.target.value.split('||')
        const data = {
            shelf: arr[0],
            book: arr[1]
        }
        add_book_to_shelf(data).then(res =>{
            alert(res.data.result)
        }).catch(err =>{
            alert(err)
        })
    }

    render() {
        const { 
            _id,
            book_title,
            authors,
            genres,
            description,
            cover_image,
            avg_rating
        } = this.props.book
        
        const url = window.location.protocol + "//" + window.location.host

        return (
            <div className="row shadow p-4 mx-1 mt-3 bg-white" style={{border:'1px solid black'}}>
            <div className="col-md-4" >
                <div className="row justify-content-center">
                    <img alt={book_title} width="200" height="100" src={cover_image} className="rounded img-fluid" style={{border: '2px solid #151B2D'}}/>
                </div>
                <div className="row justify-content-center">
                    <h5 className="font-weight-light" style={{paddingTop:'8px', paddingBottom:'5px', textAlign:'center'}}>Rating: <b>{avg_rating}</b></h5>
                </div>
                <div className="row justify-content-center">
                    {localStorage.logged_in && 
                            <div className="dropdown">  
                                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
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
                        }
                </div>
            </div>

            <div className="col-md-8">
                <h3 className="font-weight-light" style={{fontSize:'27px'}}>
                    <Link to={'/book/' + _id['$oid']} style={{color:'#151B2D'}}>
                        {book_title}
                    </Link>
                </h3>
                <h5 className="font-weight-light" style={{fontSize:'18px'}}><b>Authors:</b> {authors.toString()}</h5>
                <h5 className="font-weight-light" style={{fontSize:'18px'}}><b>Genres:</b> {genres.toString()}</h5>
                <h5 className="font-weight-light" style={{fontSize:'18px'}}><b>Description:</b></h5>

                

                <div id="module" class="container" style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <h5 className="font-weight-light collapse" style={{fontSize:'18px'}} id="collapseExample" aria-expanded="false">
                     {description.toString()}
                    </h5>
                    <Link role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{color:'#151B2D'}} />
                </div>
            </div>
        </div>
        )
    }
}

export default SearchPersonalityItem
