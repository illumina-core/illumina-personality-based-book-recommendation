import React, { Component } from 'react'

import { Navbar } from '../layout/Navbar'

export class Home extends Component {


    render() {
        return (
            <div>
               <Navbar />
               <div className="container-fluid">
                    <div className="row card">
                        <img className="card-img-top" width="100%" src="./images/bko2.jpg" alt="Card  cap" />
                        <div className="card-img-overlay">
                            <h1 className="font-weight-light text-white" style={{fontSize:'60px', textShadow:'0 0 20px black', paddingTop:'35px', paddingBottom:'35px'}}>Welcome to Illumina</h1>
                            <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px black', paddingTop:'10px'}}>Discover books suitable for your personality</h4>
                            <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px black', paddingTop:'10px'}}>Curate your personal bookshelves</h4>
                            <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px black', paddingTop:'10px', paddingBottom:'50px'}}>Interact with similar people</h4>
                            <button className="btn btn-outline-secondary .bg-transparent text-white" 
                            style={{fontSize:'25px', border:'1px solid white'}}>
                            Learn how the project works</button>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop:'30px'}}> 
                        <h3 className="font-weight-light">Browse Genres</h3>
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" width="100%" src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" width="100%"  src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                            <div className="card">
                                <img className="card-img-top"width="100%"  src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                        </div>
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" width="100%" src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" width="100%"  src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                            <div className="card">
                                <img className="card-img-top"width="100%"  src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                        </div>
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" width="100%" src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" width="100%"  src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" width="100%"  src="./images/dummy.jpg" alt="Card  cap" />
                            </div>
                        </div>
                        <div style={{textAlign: 'center', paddingTop: '10px'}}>
                            <a href="genres">View All Genres</a>
                        </div>
                    </div>
                    <div className="row" style={{textAlign: 'center', paddingTop: '20px'}}>
                        <a href="about-us" style={{paddingRight: '10px', fontSize:'14px'}}>About Us</a>
                        <a href="contact-us" style={{fontSize:'14px'}}>Contact Us</a>
                    </div>
                    
                    </div>
            </div>
        )
    }
}

export default Home
