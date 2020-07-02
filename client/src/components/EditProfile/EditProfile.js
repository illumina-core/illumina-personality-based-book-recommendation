import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import './EditProfile.css';
import {get_other_user} from '../Services'

export class EditProfile extends Component {

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

                <div className="container-fluid p-0">
                    <div id="user_header" className="row">
                        <div className="col-md-auto">
                            <img alt="" src = "./images/upload_img.png" id="profile_pic" className="rounded img"/>
                        </div>

                        <div className="col-md-5" style={{marginRight:'50px'}}>
                            <div className="row">
                                <div className="form-group">
                                    <input type="text" minLength="3" className="form-control" 
                                    placeholder="Enter new username" name="edit_user" required/>
                                    <div className="valid-feedback">Valid.</div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <button className="btn btn-secondary">Save Changes</button>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="edit_desc" rows="3" placeholder="Tell us about yourself"></textarea>
                                <div className="valid-feedback">Valid.</div>
                            </div>                        
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
                    <h4 className="font-weight-light" style={{paddingTop:'20px'}}>User Settings</h4>
                        <div className="row" style={{borderTop:'1.5px solid #151B2D', paddingTop:'10px',paddingLeft:'10px'}}>
                            <form className="was-validated" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>New Email address</label>
                                        <input type="email" minLength="7" className="form-control" 
                                        placeholder="Enter new email" name="email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input type="password" minLength="5" className="form-control" 
                                        placeholder="Enter new password" name="password" required/>
                                    </div>
                                </form>
                        </div>
                        <button type="submit" className="btn btn-secondary">Confirm</button>
                </div>
            </div>
        )
    }
}

export default EditProfile