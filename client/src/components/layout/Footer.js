import React, { Component } from 'react'
import UserMenu from './UserMenu'
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"



export class Footer extends Component {

    render() {
        return (
            <div style={{backgroundColor:'#151B2D'}}>
            <div className="container-fluid mx-auto" style={{width:'80%', paddingTop:'5px', paddingBottom:'5px', textAlign: 'center', backgroundColor:'#151B2D'}}> 
            <nav className="navbar navbar-expand-lg navbar-light bg-#F8F9FA">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color:'white'}}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color:'white'}}>Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <FaTwitter style={{fontSize:'19px', color:'white'}}/>
                            </li>
                            <li className="nav-item" style={{paddingRight:'8px', paddingLeft:'8px'}}>
                                <FaFacebook  style={{fontSize:'19px', color:'white'}}/>
                            </li>
                            <li className="nav-item">
                            <FaInstagram style={{fontSize:'19px', color:'white'}}/>
                            </li>
                        </ul>


                    </div>
                </nav>
            </div>
        </div>
        );
    }
}
export default Footer


