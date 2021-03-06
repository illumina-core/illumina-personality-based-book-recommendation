import React, { Component } from 'react'
import { AddBook } from './AddBook'
import { RemoveUser } from './RemoveUser'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import EditBook from './EditBook';


export class AdminPanel extends Component {

    render() {
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
                                <AddBook />
                            </div>
                        </div>
                    
                        <div className="row" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col">
                                <h5 className="font-weight-light"  data-toggle="collapse" href="#collapseExample1" style={{color:'#151B2D', paddingTop:'5px'}}>Edit Book</h5>
                            </div>
                        </div>

                        <div className="row collapse" id="collapseExample1" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <EditBook />
                        </div>

                        <div className="row" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <div className="col">
                                <h5 className="font-weight-light"  data-toggle="collapse" href="#collapseExample2" style={{color:'#151B2D', paddingTop:'5px'}}>Remove Users</h5>
                            </div>
                        </div>

                        <div className="row collapse" id="collapseExample2" style={{border:'1.5px solid #151B2D', borderTop:'none'}}>
                            <RemoveUser />
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