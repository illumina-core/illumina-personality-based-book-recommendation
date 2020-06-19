import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import {logout} from '../Services'

export class UserMenu extends Component {

    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('logged_in')
        localStorage.removeItem('username')
        localStorage.removeItem('profile_pic')
        
        logout().then(res =>{
            window.location.href = window.location.protocol + "//" + window.location.host
        })
    }

    render() {
        const url = window.location.protocol + "//" + window.location.host
        return (
            <li className="nav-item dropdown ml-auto">
                <Link to="#" className="nav-link dropdown-toggle" id="navDropDownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="" src={localStorage.profile_pic} 
                width="32" height="32" className="rounded-circle img-fluid" style={{border: '2px solid black'}} />
                &nbsp;{localStorage.username}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navDropDownLink">
                    <a className="dropdown-item" href={url + '/dashboard'}>Dashboard</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href={url + '/profile'}>Profile</a>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={this.logOut.bind(this)}>Logout</button>
                </div>
            </li>
        )
    }
}

export default UserMenu
