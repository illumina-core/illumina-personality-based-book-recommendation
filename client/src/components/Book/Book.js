import React, { Component } from 'react'

import AddReview from './AddReview'

import ReactStars from 'react-star-rating-component'
import { Link } from 'react-router-dom'
import { get_book } from '../Services'

export class Book extends Component {

    constructor(){
        super()
        this.state ={
            data: {},
            links: {},
            extra: {},
            id: ''
        }
    }

    componentDidMount(){    
        
        get_book(window.location.pathname.split('/').pop()).then(res =>{                
            
            this.setState({data: JSON.parse(res.data.book)})
            this.setState({links: this.state.data['links']})
            this.setState({extra: this.state.data['extra_details']})
            this.setState({id: this.state.data['_id']['$oid']})
            
            
        }).catch(err =>{
            alert(err)
            // window.history.back()
        })

        return false
    }   

    render() {
        const {
            book_title,
            author,
            description,
            genres,
            cover_image,
            avg_rating
            // reviews
        } = this.state.data

        return (
            <div>
            <div style={{height:'35px', backgroundColor:'#EAEDF1'}} />
            <div id="book" className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div id='book_image' className='container'>
                        <div className='row' style={{paddingBottom:'20px'}}>
                            <div className="col" align="center">            
                                <img src={cover_image} className="rounded" alt="genres"/>
                            </div>
                        </div>
                        </div>
                        <div  id='book_sidebar' className='container'>
                        <div className='row'>
                            <div className="col" align="center">
                                <h4 className="font-weight-light" style={{marginBottom:'0px'}}>Rating: {avg_rating}</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col" align="center">Rate Book!</div>
                        </div>
                        <div className='row'>
                            <div className="col" align="center">
                                <ReactStars 
                                    size={25}
                                    half={true}
                                    name="rating"
                                    onChange={newRating =>{console.log(newRating)}}
                                />   
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col" align="center">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                    Add to Bookshelf
                                    </button>
                                    <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                    Shelf A</Link>
                                    <div className="dropdown-divider m-0"></div>
                                    <Link className="dropdown-item" to="#">
                                    Shelf B</Link>
                                    <div className="dropdown-divider m-0"></div>
                                    <Link className="dropdown-item" to="#">
                                    Shelf C</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add review */}
                        {localStorage.logged_in && <AddReview id={this.state.id}/>}
                        
                        <div className='row'>
                            <div className="col" align="center">
                                <div>
                                    <button data-toggle="collapse" data-target="#demo" className="font-weight-light"
                                    style={{fontSize:'18px'}}><u>Where to Read</u></button>
                                    <div id="demo" className="collapse">
                                    <p className="font-weight-light">
                                        {
                                        Object.entries(this.state.links).map( ([key, value]) =>  
                                            <a key={key} href={value} style={{display: 'block'}}>{key}</a>
                                        )}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-8' >
                        <div id = "book_info" className='container'>
                        <div className="adjust row">
                            <h2 className="font-weight-light">
                                <Link to={this.state.id}>
                                {book_title}
                                </Link>
                            </h2>
                        </div>
                        <div className="adjust row">
                            <h3 className="font-weight-light">Author(s): {[author].toString()}</h3>
                        </div>
                        <div className="adjust row">
                            <h5 className="font-weight-light">Genres: {[genres].toString()}</h5>
                        </div>
                        <div className="adjust row" style={{backgroundColor:'white'}}>
                            <p className="font-weight-light">{description}</p>
                        </div>
                        <div id="addi_info" className="adjust row" style={{backgroundColor:'white'}}>
                            <div >
                                <h5 className="font-weight-light" color="primary">
                                    <u>Additional Info</u>
                                </h5>
                                <h6 className="font-weight-light">                                
                                    {
                                    Object.entries(this.state.extra).map( ([key, value]) =>  
                                        <div key={key}><b>{key}</b> : {value}</div>
                                    )}
                                </h6>
                            </div>
                        </div>
                        <div id="review_header" className="row">
                            <h5 className="font-weight-light"><b>Reviews</b></h5>
                        </div>
                        <div className="row" style={{backgroundColor:'white'}}>
                            <div className="container">
                            <div id="review" className="row">
                                <div className='col-md-1'>
                                    <img src="#" className="rounded" alt="genres"></img>
                                </div>
                                <div className="col-md-11">
                                    <p className="star font-weight-light"><span id="star" className="rating -green rated-8"> ★★★★ </span>  Review by <strong className="name">Stephy_H</strong> </p>
                                    <p id="review_text" className="font-weight-light">This was funny, tense, gory &amp; excellent, it comes out the gate at full force and really keeps up at a pretty brisk pace of madness... It actually reminds me of early Danny Boyle like Shallow Grave, parts gave me vibes of Cabin Fever (2002) &amp; its also funny how it shares some similarities to The Lighthouse... Its straightforward unlike the lighthouse, and its a really loose connection but if you've seen both, hopefully you know where I'm coming from... This is a Dark comedy indie gem...</p>
                                </div>
                            </div>      
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Book
