import React, { useState } from 'react'
import Navigation from '../Global/Navigation';
import RecommendBooks from './RecommendBooks';
import RecentActivities from './RecentActivities';
import TopBookshelves from './TopBookshelves';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { Button } from 'reactstrap';
import Footer from '../Global/Footer';

const Dashboard = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    
  return (    
        <div id="dash" className="container">
            <Navigation />
            <div style={{height:'35px'}}></div>
            <div id="header">
                <h4 class="font-weight-light">Welcome back Mbrz</h4>
                <div class="container">
                    <div class="row">
                    <div class="col-auto">
                        <Button outline color="secondary" onClick={toggle}> Recommend me a book!</Button>
                    </div>
                    <div class="col-auto">
                        <Button outline color="secondary" onClick={toggle}> Check out my personality</Button>
                    </div>
                    </div>
                </div>
            </div>
            <div id="topbookshelves">
                <h3 class="font-weight-light">Bookshelves</h3>
                <TopBookshelves />
            </div>
            <div style={{height:'35px'}}></div>
            <div id="recommend_books">
                <h4 class="font-weight-light">Check out these books</h4>
                <RecommendBooks />
            </div>
            <div style={{height:'30px'}}></div>
            <div id="recent_activities">
                <h4 class="font-weight-light">Recent Activities</h4>
                <RecentActivities />
            </div>
            <div id="others">
                <div className='container'>
                    <div className='row'>
                    <div className='col'>
                        <img src="./images/card1.jpg" alt="genres" style={{width: '350px', height: '350px', border:'1.5px solid #2C3554'}}/>
                    </div>
                    <div className='col'>
                        <img src="./images/card2.jpg" alt="whatsnew" style={{width: '350px', height: '350px', border:'1.5px solid #2C3554'}}/>
                    </div>
                    <div className='col'>
                        <img src="./images/card2.jpg" alt="learnmore" style={{width: '350px', height: '350px', border:'1.5px solid #2C3554'}}/>
                    </div>
                    </div>
                </div>
            </div>
            <footer style={{border:'1.5px solid #2C3554', borderBottom:'none', }}>
            <Footer />
            </footer>
        </div>
    )
}

export default Dashboard