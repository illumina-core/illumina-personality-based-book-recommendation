import React, { Component } from 'react'
import UserMenu from './UserMenu'
import { Login } from '../Home/Login'
import { Register } from '../Home/Register'
import './Navbar.css';

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
        console.log(this.state.search_type)
    }

    onSubmit(e){
        e.preventDefault()
        if(this.state.search){
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
        }
        if(this.state.search_type === 'opt4'){
            window.location.href = window.location.protocol + "//" + window.location.host + 
            "/search?personality";
        }
    }
   
    render() {
        const url = window.location.protocol + "//" + window.location.host
        return (
            <div className="container-fluid">
                <div className="row" style={{backgroundColor:'#F8F9FA', borderBottom:'2px solid #151B2D'}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-#F8F9FA mx-auto" style={{width:'80%'}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {/* x` */}
                        <ul className="navbar-nav w-75">
                            <li className="nav-item active">
                                <a className="navbar-brand nav-link" href={url} >Illumina</a>
                            </li>
                            <li className="nav-item  w-50">

                            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                                <input className="form-control mr-sm-2 w-90" type="search"  name="search"
                                value={this.state.search}
                                onChange={this.onChange}
                                placeholder="Search" aria-label="Search" style={{border:'1.5px solid #151B2D'}}/>

                                <div className="btn-group">
                                    <button className="btn btn-outline-primary" type="submit">Search</button>
                                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                    
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{border:'1.5px solid #151B2D'}}>
                                        <div className="dropdown-item ">
                                            <input type="radio"
                                            defaultChecked={this.state.search_type === 'opt1' && true}
                                            name="search_type"
                                            value='opt1'
                                            onClick={this.onChange}/> Book 
                                        </div>
                                        <div className="dropdown-item">
                                            <input type="radio"
                                            defaultChecked={this.state.search_type === 'opt2' && true}
                                            name="search_type"
                                            value='opt2'
                                            onClick={this.onChange}/> Genre
                                        </div>
                                        <div className="dropdown-item ">
                                            <input type="radio"
                                            defaultChecked={this.state.search_type === 'opt3' && true}
                                            name="search_type"
                                            value='opt3'
                                            onClick={this.onChange} style={{olor:'#151B2D'}}/> Author
                                        </div>
                                        {/* {
                                            localStorage.logged_in &&
                                            <React.Fragment>
                                                <div className="dropdown-divider" />
                                                <button 
                                                className="dropdown-item" 
                                                name="search_type"
                                                value='opt4'
                                                onClick={this.onChange}>
                                                    Personality Recommendaion
                                                </button>
                                            </React.Fragment>
                                        } */}
                                    </div>
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