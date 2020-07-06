import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import './Profile.css';
import {get_other_user} from '../Services'

export class Profile extends Component {

    // componentDidMount(){
    //     get_other_user().then(res =>{

    //     })
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                </div>

                <div className="container-fluid p-0 mx-auto" style={{width:'80%'}}>
                    <div id="user_header" className="row">
                        <div className="col-md-auto">
                            <img alt="" src = "./images/letter.jpg" id="profile_pic" className="rounded img"/>
                        </div>

                        <div className="col-md-5" style={{marginRight:'50px'}}>
                            <div className="row">
                                <h4 className="font-weight-light">Mbrz</h4>
                            </div>
                            
                            <div className="row">
                                <button className="btn btn-outline-secondary">Edit Profile</button>
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
                            <div className="row justify-content-center">
                                <div class="form-group" style={{ paddingTop:'15px'}}>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{width:'500px', height:'180px'}}></textarea>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button className="btn btn-lg btn-outline-secondary">Personalize Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{borderTop:'1.5px solid #151B2D'}}>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile