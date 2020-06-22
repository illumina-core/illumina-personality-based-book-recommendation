import React, { Component } from 'react'
import { get_book_recommendation } from '../Services'

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
    const url = window.location.protocol + "//" + window.location.host
    return (
    <div className="container-fluid" style={{paddingTop:'16px'}}>

      <div className="row" style={{paddingBottom:'12px'}}>
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
                          <a href={url + '/book/' + book['_id']['$oid']}>
                            {book.book_title}
                          </a>
                        </h3>
                        <p className="card-subtitle"><b>Authors:</b> {book.author.toString()}</p>
                        <p className="card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
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
                          <a href={url + '/book/' + book['_id']['$oid']}>
                            {book.book_title}
                          </a>
                        </h3>
                        <p className="card-subtitle"><b>Authors:</b> {book.author.toString()}</p>
                        <p className="card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
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
                          <a href={url + '/book/' + book['_id']['$oid']}>
                            {book.book_title}
                          </a>
                        </h3>
                        <p className="card-subtitle"><b>Authors:</b> {book.author.toString()}</p>
                        <p className="card-subtitle"><b>Genres:</b> {book.genres.toString()}</p>
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