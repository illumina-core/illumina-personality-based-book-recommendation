import React, { Component } from 'react'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import RecommendBooks from './RecommendBooks';
import TopBookshelves from './TopBookshelves';

import { getUser } from '../Services'

import './Dashboard.css';

export class Dashboard extends Component {

    constructor(){
        super()
        this.state ={
            user: {},
            shelves: []
        }
    }
    componentDidMount(){        
        getUser().then(res => {
            this.setState({user: JSON.parse(res.data.user)})
            this.setState({shelves: this.state.user['shelves']})
            
        }).catch(err =>{
            alert(err)
        })
    }

    render() {

        const { 
            username
         } = this.state.user

        const url = window.location.protocol + "//" + window.location.host
        
        return (
            <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row" id="header">
                    <div className="container">
                        <div className="row"><h4 className="font-weight-light">Welcome back {username}</h4></div>
                        <div className="row">
                        <div className="col-auto pl-0">
                            <button className="btn btn-outline-secondary .bg-transparent"> 
                                <a href={url + '/search?personality'} style={{color:'white'}}>Recommend me a book!</a>
                            </button>

                            
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-secondary .bg-transparent">
                                <a href={url + '/profile'} style={{color:'white'}}>Check out my personality</a> 
                            </button>
                        </div>
                        </div>
                    </div>  
                </div>

                <div className="row" id="topbookshelves">
                    <div className="container-fluid mx-auto" style={{width:'80%'}}>
                        <div className="row justify-content-center align-items-center" >
                            <h2 className="font-weight-light" style={{textAlign: 'center', paddingTop:'25px'}}>
                                <a className="nav-link" href={url + '/book-shelves'} style={{color:'#151B2D', fontSize:'35px'}}>Bookshelves</a>
                            </h2>
                        </div>
                        <TopBookshelves shelves={this.state.shelves} url={url}/>
                    </div>
                </div>


                <div className="row" id="recommend_books">
                    
                    <RecommendBooks />
                </div>
                {/* <div className="row" id="recent_activities">
                    <h4 className="font-weight-light w-100">Recent Activities</h4>
                    <RecentActivities />
                </div> */}
            </div>
            <Footer />
            </div>
        )
    }
}

export default Dashboard