import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ImageUploading from "react-images-uploading";
import { update_profile_data, getUser } from '../Services'
import Radar from 'react-d3-radar';

export class AdminPanel extends Component {

    render() {
        const url = window.location.protocol + "//" + window.location.host
        return (
                <div>
                    <Navbar />
                    
                    <div className="container-fluid mx-auto" style={{width:'80%'}}>

                        <div className="row" style={{backgroundColor:'#151B2D'}}>
                            <div className="col">
                                <h3 className="font-weight-light" style={{color:'#fff'}}>Admin Panel</h3>
                            </div>
                        </div>

                        <div className="row" style={{border:'1.5px solid #151B2D'}}>
                            <div className="col">
                                <h5 className="font-weight-light"  data-toggle="collapse" href="#collapseExample" style={{color:'#151B2D', paddingTop:'5px'}}>Insert New Book</h5>
                            </div>
                        </div>
                        
                        <div className="row collapse" id="collapseExample" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Book Title</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Book Title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Book Description</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Author</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Author Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Genre</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Genre" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Rating</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Rating" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                        <div className="row" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col">
                                <h5 className="font-weight-light"  data-toggle="collapse" href="#collapseExample1" style={{color:'#151B2D', paddingTop:'5px'}}>Edit Book</h5>
                            </div>
                        </div>

                        <div className="row collapse" id="collapseExample1" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col" style={{padding:'5px'}}>
                            <input class="form-control" type="text" placeholder="Search Book Database" aria-label="Search" style={{width:'500px', border:'1.5px solid #151B2D'}}/>
                            <button type="button" class="btn btn-outline-dark">Edit Book Details</button>
                            <button type="button" class="btn btn-outline-dark">Delete Book</button>
                            </div>
                        </div>

                        <div className="row" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col">
                                <h5 className="font-weight-light"  data-toggle="collapse" href="#collapseExample2" style={{color:'#151B2D', paddingTop:'5px'}}>Remove Users</h5>
                            </div>
                        </div>

                        <div className="row collapse" id="collapseExample2" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col" style={{padding:'5px'}}>
                            <input class="form-control" type="text" placeholder="Search User Database" aria-label="Search" style={{width:'500px', border:'1.5px solid #151B2D'}}/>
                            <button type="button" class="btn btn-outline-dark">Delete User</button>
                            </div>
                        </div>

                        <div className="row" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col">
                            <div className="container-fluid" style={{height:'500px'}}>
                            <h3 style={{color:'#fff'}}>Heee</h3>
                        </div>
                            </div>
                        </div>


                    
                    
                    </div>
                
                <div />
                <Footer />
            </div>
        )
    }
}

export default AdminPanel