import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserMenu from './UserMenu'
import { Login } from '../Home/Login'
import { Register } from '../Home/Register'

export class Navbar extends Component {

    constructor(){
        super()
        this.state ={
            search: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        window.location.href = "http://localhost:3000/search?title=" + this.state.search;
    }
   
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav w-75">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">ILLUMINA <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item mx-auto w-50">

                            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                                <input className="form-control mr-sm-2 w-75" type="search"  name="search"
                                value={this.state.search}
                                onChange={this.onChange}
                                placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>

                            </li>
                        </ul>
                        <ul className="navbar-nav w-25">
                            {localStorage.logged_in && <UserMenu />}
                            {!localStorage.logged_in && <li className="nav-item ml-auto"><Login /></li>}
                            {!localStorage.logged_in && <li className="nav-item"><Register /></li>}
                        </ul>
                    </div>
                </nav>
                </div>
            </div>
        );
    }
}
export default Navbar