import React, { Component } from 'react'

import AddReview from './AddReview'

import { Link } from 'react-router-dom'
import { get_book, add_book_to_shelf, remove_review } from '../Services'
import { Navbar } from '../layout/Navbar'
import  Rating  from './Rating'


export class Book extends Component {

    constructor(){
        super()
        this.state ={
            data: {},
            links: {},
            extra: {},
            reviews: [],
            user_rating: 0,
            id: '',
            shelves: []
        }
    }

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

    removeReview(e){
        remove_review(this.state.id).then(res =>{
            alert('Book removed')
        }).catch(err =>{
            alert(err)
        })
    }

    componentDidMount(){    
        
        get_book(window.location.pathname.split('/').pop()).then(res =>{                
            this.setState({data: JSON.parse(res.data.book)})
            this.setState({links: this.state.data['links']})
            this.setState({extra: this.state.data['extra_details']})
            this.setState({reviews: this.state.data['reviews']})
            this.setState({id: this.state.data['_id']['$oid']})  
             
            if(localStorage.logged_in){
                this.setState({shelves: res.data.shelves})
            }
            this.state.reviews.forEach(review => {
                if(review.username === localStorage.username){
                    this.setState({user_rating: review.rating})   
                }
            });
            
        }).catch(err =>{
            alert(err)
            window.history.back()
        })
    }

    render() {
        const {
            book_title,
            authors,
            description,
            genres,
            cover_image,
            avg_rating
        } = this.state.data
        
        return (
            <div>
            <Navbar />
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
                                <h4 className="font-weight-light" style={{marginBottom:'0px'}}>Average Rating: {avg_rating}</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col pt-2" align="center">Rate Book!</div>
                        </div>
                        <div className='row'>
                            <div className="col">
                                {/* ================ RATING ==================*/}
                                {localStorage.logged_in && 
                                <Rating 
                                className={"mx-auto"}
                                value={this.state.user_rating} 
                                id={this.state.id} 
                                edit={true} 
                                size={25}
                                />
                                }
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col" align="center">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                    Add to Bookshelf
                                    </button>
                                    <div className="dropdown-menu p-0">
                                    {
                                        this.state.shelves.map((shelf) =>(
                                            <button key={shelf} 
                                            value={shelf + '||' + this.state.id}
                                            onClick={e => this.handleInput(e, "value")}
                                            className="dropdown-item border border-top-0 border-right-0 border-left-0"
                                            >{shelf}</button>
                                        ))
                                    }
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
                            <h3 className="font-weight-light">Author(s): {[authors].toString()}</h3>
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

{/* ============================ REVIEWS ============================================= */}

                            <div className="container">
                                { 
                                this.state.reviews.map((review) =>  
                                <div id="review" className="row" key={review.username}>
                                        <div className='col-1'>
                                            <img 
                                            className="rounded img-fluid" 
                                            src={review.profile_pic}
                                            alt="profile pic" 
                                            />
                                        </div>
                                        <div className="col-9 p-0">
                                            Review by <strong className="name">{review.username}</strong> 
                                            <Rating
                                             className={"mx-0"}
                                             value={review.rating} 
                                             id={this.state.id} 
                                             edit={false}
                                            />
                                            <p id="review_text" className="font-weight-light">{review.review_text}</p>
                                        </div>
                                        {
                                            localStorage.logged_in && 
                                        <div className="col-2">
                                            <button
                                            className="btn btn-danger"
                                            onClick={e => this.removeReview(e)}
                                            ><i className="fa fa-trash" aria-hidden="true" /> Remove</button>
                                        </div>
                                        }
                                </div>
                                )}
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
