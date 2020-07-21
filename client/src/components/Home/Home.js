import React, { Component } from 'react'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Link } from 'react-router-dom'
export class Home extends Component {


    render() {
        
        return (
            <div>
               <Navbar />
               
                <div className="container-fluid" style={{backgroundColor:'#fff', paddingTop:'50px'}}>

                    <div className="container-fluid mx-auto" style={{width:'80%'}}>
                        <div className="row card" style={{border:'3.5px solid #151B2D'}}>
                            <img className="card-img-top" src="./images/bko2.jpg" alt="Card  cap" style={{width:'100%'}}/>
                            <div className="card-img-overlay">
                                <h1 className="font-weight-light text-white" style={{fontSize:'60px', textShadow:'0 0 20px #151B2D', paddingTop:'70px', paddingBottom:'35px'}}>Welcome to Illumina</h1>
                                <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px #151B2D', paddingTop:'10px'}}>Discover books suitable for your personality</h4>
                                <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px #151B2D', paddingTop:'10px'}}>Curate your personal bookshelves</h4>
                                <h4 className="font-weight-light text-white" style={{fontSize:'35px', textShadow:'0 0 20px #151B2D', paddingTop:'10px'}}>Explore new tastes and genres</h4>
                                <br />
                                <a href="https://github.com/illumina-core/illumina-personality-based-book-recommendation" className="font-weight-light" style={{fontSize:'35px', color:'#fff', textShadow:'0 0 20px #151B2D'}}>Learn how the project works</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="container-fluid mx-auto" style={{width:'80%', padding:'0px',paddingTop:'60px'}}>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="./images/carousel1.png" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./images/carousel2.png" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                    

                   
                                                
                        <div className="container-fluid mx-auto" style={{width:'80%', paddingLeft:'0px', paddingRight:'0px', paddingTop:'60px', backgroundColor:'#fff'}}> 
                            <h1 className="font-weight-light" style={{textAlign: 'center',}}>Browse Genres</h1>    
                            <div className="card-deck" style={{paddingTop:'20px', paddingBottom:'20px'}}>
                                <div className="card">
                                    <Link to='/search?genre=Adventure'>
                                    <img className="card-img-top" width="100%" src="./images/genre_adventure.jpg" alt="Card  cap" style={{border:'3px solid #151B2D'}}/>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to='/search?genre=Science%20Fiction'>
                                    <img className="card-img-top" width="100%"  src="./images/genre_sf1.jpg" alt="Card  cap" style={{border:'3px  solid #151B2D'}}/>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to='/search?genre=History'>
                                    <img className="card-img-top" width="100%"  src="./images/genre_history.jpg" alt="Card  cap" style={{border:'3px  solid #151B2D'}}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-deck">
                                <div className="card">
                                    <Link to='/search?genre=Fantasy'>
                                    <img className="card-img-top" width="100%" src="./images/genre_fantasy.jpg" alt="Card  cap" style={{border:'3px solid #151B2D'}}/>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to='/search?genre=Poetry'>
                                    <img className="card-img-top" width="100%"  src="./images/genre_poetry.jpg" alt="Card  cap" style={{border:'3px  solid #151B2D'}}/>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to='/search?genre=Graphic%20Novels'>
                                    <img className="card-img-top" width="100%"  src="./images/genre_gn.jpg" alt="Card  cap" style={{border:'3px  solid #151B2D'}}/>
                                    </Link>
                                </div>
                            </div>
                            <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '75px'}}>
                                <Link to="/genres" style={{color:'#151B2D', fontSize:'25px'}}>View All Genres</Link>
                            </div>
                    </div>
                    </div>

                    <Footer />
                    
                    </div>
            
        )
    }
}

export default Home
