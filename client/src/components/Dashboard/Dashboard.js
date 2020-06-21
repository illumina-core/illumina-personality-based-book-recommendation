import React, { Component } from 'react'

import Navbar from '../layout/Navbar'
import RecommendBooks from './RecommendBooks';
import RecentActivities from './RecentActivities';
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
                        <div className="row"><h4 className="">Welcome back {username}</h4></div>
                        <div className="row">
                        <div className="col-auto pl-0">
                            <button className="btn btn-outline-secondary .bg-transparent"> Recommend me a book!</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-secondary .bg-transparent"> Check out my personality</button>
                        </div>
                        </div>
                    </div>  
                </div>
                <div className="row" id="topbookshelves">
                    <div className="container-fluid">
                        <div className="row">
                            <h3 className="font-weight-light">
                                <a className="nav-link" href={url + '/book-shelves'}>Book Shelves</a>
                            </h3>
                        </div>
                        <TopBookshelves shelves={this.state.shelves} url={url}/>
                    </div>
                </div>
                <div className="row" id="recommend_books">
                    <h4 className="font-weight-light">Check out these books</h4>
                    <RecommendBooks />
                </div>
                {/* <div className="row" id="recent_activities">
                    <h4 className="font-weight-light w-100">Recent Activities</h4>
                    <RecentActivities />
                </div> */}
            </div>
            </div>
        )
    }
}

export default Dashboard