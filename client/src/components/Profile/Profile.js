import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './Profile.css';
import { assign_user_personality, getUser } from '../Services'

export class Profile extends Component {

    constructor(){
        super()
        this.state ={
            per_desc: ''
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = () =>{
        assign_user_personality(this.state.per_desc).then(res =>{
            alert('Personality assigned')
        }).catch(err =>{
            console.log(err)
        })
    }

    componentDidMount(){
        getUser().then(res =>{
            this.setState({per_desc: JSON.parse(res.data.user)['description']})
        })
    }

    render() {
        return (
        <div>
            <Navbar />
                
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
                            <h6 className="font-weight-light"><i><b>{this.state.per_desc}</b></i></h6>
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

                        <form onSubmit={this.onSubmit}>
                            <div className="row justify-content-center">
                                <div className="form-group" style={{ paddingTop:'15px'}}>
                                    <textarea 
                                    className="form-control" 
                                    name="per_desc"
                                    value={this.state.per_desc}
                                    onChange={this.onChange}
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    style={{width:'500px', height:'180px'}} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button type="submit" className="btn btn-lg btn-outline-secondary">Personalize Me</button>
                            </div>
                        </form>

                        </div>
                    </div>
                    <div className="row" style={{borderTop:'1.5px solid #151B2D'}}>
                        
                    </div>
                </div>
            
            <div style={{paddingBottom:'270px'}}></div>

            <Footer />
                
        </div>
        )
    }
}

export default Profile