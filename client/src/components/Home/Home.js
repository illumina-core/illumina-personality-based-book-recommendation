import React, { Component } from 'react'

import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
export class Home extends Component {


    render() {
        return (
            <div>
               <Navbar />
               <div style={{backgroundColor:'#fff'}}>
                <div className="container-fluid" style={{backgroundColor:'#fff', paddingTop:'50px'}}>
                        <div className="row card mx-auto" style={{width:'80%', border:'3.5px solid #151B2D'}}>
                            <img className="card-img-top" src="./images/bko2.jpg" alt="Card  cap" style={{width:'100%'}}/>
                            <div className="card-img-overlay">
                                <h1 className="font-weight-light text-white" style={{fontSize:'60px', textShadow:'0 0 20px #151B2D', paddingTop:'70px', paddingBottom:'35px'}}>Welcome to Illumina</h1>
                                <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px #151B2D', paddingTop:'10px'}}>Discover books suitable for your personality</h4>
                                <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px #151B2D', paddingTop:'10px'}}>Curate your personal bookshelves</h4>
                                <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px #151B2D', paddingTop:'10px', paddingBottom:'50px'}}>Interact with similar people</h4>
                                <a href="genres" className="font-weight-light" style={{fontSize:'35px', color:'#fff', textShadow:'0 0 20px #151B2D'}}>Learn how the project works</a>

                            </div>
                        </div>
                    
                        <div className="container-fluid mx-auto" style={{width:'80%', paddingTop:'60px', backgroundColor:'#fff'}}> 
                            <h2 className="font-weight-light" style={{textAlign: 'center',}}>Browse Genres</h2>    
                            <div className="card-deck" style={{paddingTop:'20px', paddingBottom:'20px'}}>
                                <div className="card">
                                    <img className="card-img-top" width="100%" src="./images/genre_adventure.jpg" alt="Card  cap" style={{border:'2.5px solid #151B2D'}}/>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" width="100%"  src="./images/genre_sf1.jpg" alt="Card  cap" style={{border:'2.5px solid #151B2D'}}/>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" width="100%"  src="./images/genre_history.jpg" alt="Card  cap" style={{border:'2.5px solid #151B2D'}}/>
                                </div>
                            </div>
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" width="100%" src="./images/genre_fantasy.jpg" alt="Card  cap" style={{border:'2.5px solid #151B2D'}}/>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" width="100%"  src="./images/genre_poetry.jpg" alt="Card  cap" style={{border:'2.5px solid #151B2D'}}/>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" width="100%"  src="./images/genre_gn.jpg" alt="Card  cap" style={{border:'2.5px solid #151B2D'}}/>
                                </div>
                            </div>
                            <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '75px'}}>
                                <a href="genres" style={{color:'#151B2D', fontSize:'20px'}}>View All Genres</a>
                            </div>
                        </div>
                    </div>

                    <Footer />
                    
                    </div>
            </div>
        )
    }
}

export default Home
