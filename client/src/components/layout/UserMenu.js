import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import {logout} from '../Services'

export class UserMenu extends Component {

    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('logged_in')
        if(localStorage.admin){
            localStorage.removeItem('admin')
        }
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
                <Link to="#" className="nav-link dropdown-toggle " id="navDropDownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="" src={localStorage.profile_pic} 
                width="32" height="32" className="rounded img-fluid" style={{border: '2px solid black'}}/>
                &nbsp;{localStorage.username}
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navDropDownLink" style={{border:'1.5px solid #151B2D'}}>
                    {
                        localStorage.admin && 
                        <React.Fragment>
                            <Link className="dropdown-item"to='/admin'>Admin Panel</Link>
                            <div className="dropdown-divider"></div>
                        </React.Fragment>
                    }
                    <Link className="dropdown-item" to='/dashboard'>Dashboard</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to='/profile'>Profile</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to='/book-shelves'>My Bookshelves</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to='/genres'>Genres</Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={this.logOut.bind(this)}>Logout</button>
                </div>
            </li>
        )
    }
}

export default UserMenu
