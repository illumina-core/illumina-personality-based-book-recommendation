import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import './Profile.css';

export class Profile extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                </div>

                <div className="container-fluid p-0">
                    <div id="user_header" className="row">
                        <div className="col-md-auto">
                            <img alt="" src = "./images/letter.jpg" id="profile_pic" className="rounded img"/>
                        </div>

                        <div className="col-md-5" style={{marginRight:'50px'}}>
                            <div className="row">
                                <h4 className="font-weight-light">Mbrz</h4>
                            </div>
                            
                            <div className="row">
                                <button className="btn btn-secondary">Edit Profile</button>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <h6 className="font-weight-light"><i><b>“Don't believe in the you that believes in me and don't believe in the me that believes in you. Believe in the you that believes in yourself."</b></i></h6>
                        </div>
                    </div>
                    
                    <div id="heading" className="row">
                        <h4 className="font-weight-light">My Personality</h4>
                    </div>
                    
                    <div id="personality" className="row" style={{borderLeft:'1.5px solid #151B2D', borderRight:'1.5px solid #151B2D', paddingTop:'15px'}}>
                        <div className="col">
                            <span></span>
                        </div>
                        <div className="col">
                            <button className="btn btn-lg btn-secondary">Personalize Me</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile