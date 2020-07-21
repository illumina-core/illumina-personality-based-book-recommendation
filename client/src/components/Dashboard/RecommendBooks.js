import React, { Component } from 'react'
import { get_book_recommendation } from '../Services'
import { Link } from 'react-router-dom';
export class RecommendBooks extends Component {

  constructor(){
    super()
    this.state ={
        recs: []
    }
}
  
  componentDidMount(){
    get_book_recommendation().then(res =>{
      this.setState({recs: JSON.parse(res.data.rec)})
    })
  }

  render() {
    return (
    <div className="container-fluid mx-auto" style={{width:'80%', border:'1.5px solid #2C3554'}}>

      <div className="row">
          <h3 className="font-weight-light recommend_heading" style={{width:'300px', paddingTop:'15px', paddingBottom:'15px', backgroundColor:'#151B2D', color:'white', border:'1.5px solid #151B2D', borderRadius:'0px 50px 50px 0px'}}>Check out these books</h3>
      </div>

      <div className="row" style={{paddingTop:'15px', paddingBottom:'12px'}}>
      {
        this.state.recs.slice(0, 2).map((book) =>(
          <div className="col" key={book['_id']['$oid']}>
            <div className="card" style={{border:'1.5px solid #151B2D'}}>
                <div className="row">
                    <div className="col-sm-4" >
                        <img className="card-img-top img-fluid" style={{width:'150px'}}
                          src={book.cover_image} alt="Card cap" />
                    </div>
                    <div className="col-sm-8" >
                      <div className="card-body">
                        <h3 className="card-title">
                          <Link to={'/book/' + book['_id']['$oid']} style={{color:'#151B2D'}}>{book.book_title}</Link>
                        </h3>
                        <p className="font-weight-light card-subtitle"><b>Authors:</b> {book.authors.toString()}</p>
                        <p className="font-weight-light card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        ))
      }
      </div>
      <div className="row" style={{paddingBottom:'12px'}}>
      {
        this.state.recs.slice(2, 4).map((book) =>(
          <div className="col" key={book['_id']['$oid']}>
            <div className="card" style={{border:'1.5px solid #151B2D'}}>
                <div className="row">
                    <div className="col-sm-4" >
                        <img className="card-img-top img-fluid" style={{width:'150px'}}
                          src={book.cover_image} alt="Card cap" />
                    </div>
                    <div className="col-sm-8" >
                      <div className="card-body">
                        <h3 className="card-title">
                          <Link to={'/book/' + book['_id']['$oid']} style={{color:'#151B2D'}}>{book.book_title}</Link>
                        </h3>
                        <p className="font-weight-light card-subtitle"><b>Authors:</b> {book.authors.toString()}</p>
                        <p className="font-weight-light card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        ))
      }
      </div>
      <div className="row" style={{paddingBottom:'12px'}}>
      {
        this.state.recs.slice(4, 6).map((book) =>(
          <div className="col" key={book['_id']['$oid']}>
            <div className="card" style={{border:'1.5px solid #151B2D'}}>
                <div className="row">
                    <div className="col-sm-4" >
                        <img className="card-img-top img-fluid" style={{width:'150px'}}
                          src={book.cover_image} alt="Card cap" />
                    </div>
                    <div className="col-sm-8" >
                      <div className="card-body">
                        <h3 className="card-title">
                          <Link to={'/book/' + book['_id']['$oid']} style={{color:'#151B2D'}}>{book.book_title}</Link>
                        </h3>
                        <p className="font-weight-light card-subtitle"><b>Authors:</b> {book.authors.toString()}</p>
                        <p className="font-weight-light card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        ))
      }
      </div>
      <div className="row" style={{paddingBottom:'12px'}}>
      {
        this.state.recs.slice(6, 8).map((book) =>(
          <div className="col" key={book['_id']['$oid']}>
            <div className="card" style={{border:'1.5px solid #151B2D'}}>
                <div className="row">
                    <div className="col-sm-4" >
                        <img className="card-img-top img-fluid" style={{width:'150px'}}
                          src={book.cover_image} alt="Card cap" />
                    </div>
                    <div className="col-sm-8" >
                      <div className="card-body">
                        <h3 className="card-title">
                          <Link to={'/book/' + book['_id']['$oid']} style={{color:'#151B2D'}}>{book.book_title}</Link>
                        </h3>
                        <p className="font-weight-light card-subtitle"><b>Authors:</b> {book.authors.toString()}</p>
                        <p className="font-weight-light card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
    )
  }
}

export default RecommendBooks