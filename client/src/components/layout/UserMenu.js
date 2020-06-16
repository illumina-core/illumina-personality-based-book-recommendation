import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import {logout, getUser} from '../Services'

export class UserMenu extends Component {

    constructor(){
        super()
        this.state ={
            user: {}
        }
    }

    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('logged_in')
        
        logout().then(res =>{
            window.location.href = window.location.protocol + "//" + window.location.host
        })
    }

    componentDidMount(){        
        getUser().then(res => {
            this.setState({user: JSON.parse(res.data.user)})
        }).catch(err =>{
            alert(err)
        })

    }

    render() {

        const { profile_pic } = this.state.user
        const url = window.location.protocol + "//" + window.location.host
        return (
            <li className="nav-item dropdown ml-auto">
                <Link to="#" className="nav-link dropdown-toggle" id="navDropDownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="" src={profile_pic} 
                width="32" height="32" className="rounded-circle img-fluid" style={{border: '2px solid black'}} />
                &nbsp;Profile
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
