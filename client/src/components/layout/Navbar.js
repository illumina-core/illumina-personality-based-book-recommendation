import React, { Component } from 'react'
import UserMenu from './UserMenu'
import { Login } from '../Home/Login'
import { Register } from '../Home/Register'

export class Navbar extends Component {

    constructor(){
        super()
        this.state ={
            search: '',
            search_type: 'opt1'
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        if(this.state.search_type === 'opt1'){
            window.location.href = window.location.protocol + "//" + window.location.host + 
            "/search?title=" + this.state.search;
        }
        else if(this.state.search_type === 'opt2'){
            window.location.href = window.location.protocol + "//" + window.location.host + 
            "/search?genre=" + this.state.search;
        }
        else if(this.state.search_type === 'opt3'){
            window.location.href = window.location.protocol + "//" + window.location.host + 
            "/search?author=" + this.state.search;
        }
        else if(this.state.search_type === 'opt4'){
            window.location.href = window.location.protocol + "//" + window.location.host + 
            "/search?title=" + this.state.search;
        }
    }
   
    render() {
        const url = window.location.protocol + "//" + window.location.host
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
                                <a className="nav-link" href={url}>ILLUMINA</a>
                            </li>
                            <li className="nav-item mx-auto w-50">

                            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                                <input className="form-control mr-sm-2 w-75" type="search"  name="search"
                                value={this.state.search}
                                onChange={this.onChange}
                                placeholder="Search" aria-label="Search"/>

                                <div className="btn-group">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                {/* <button type="button" className="btn btn-outline-success my-2 my-sm-0 dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="search_type"
                                        value={'opt1'}
                                        checked={this.state.search_type === "opt1"}
                                        onChange={this.onChange}
                                        />Book Title
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="search_type"
                                        value={'opt2'}
                                        checked={this.state.search_type === "opt2"}
                                        onChange={this.onChange}
                                        />Genre
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="search_type"
                                        value={'opt3'}
                                        checked={this.state.search_type === "opt3"}
                                        onChange={this.onChange}
                                        />Author
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="search_type"
                                        value={'opt4'}
                                        checked={this.state.search_type === "opt4"}
                                        onChange={this.onChange}
                                        />User
                                    </label>
                                </div> */}
                                </div>
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