import React, { Component } from 'react'
import UserMenu from './UserMenu'
import { Link } from 'react-router-dom'
import { Login } from '../Home/Login'
import { Register } from '../Home/Register'
import { useHistory } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {

    constructor(){
        super()
        this.state ={
            search: '',
            search_link: '',
            search_type: '/search?title='
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        this.setState({search_link: e.target.value + this.state.search})
    }

    onSearch = (e) =>{
        this.setState({search: e.target.value})
        this.setState({search_link: this.state.search_type + e.target.value})
    }
   
    // routeChange =(e)=> {
    //     e.preventDefault()
    //     // let history = useHistory();
    //     // console.log(this.props.history)
    //     console.log(this.props)
    //   }

    render() {
    
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
                        <ul className="navbar-nav w-75">
                            <li className="nav-item active">
                                <Link className="navbar-brand nav-link" to="/" >Illumina</Link>
                            </li>
                            <li className="nav-item  w-50">

                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 w-90" type="search"  name="search"
                                value={this.state.search}
                                onChange={this.onSearch}
                                placeholder="Search" aria-label="Search" style={{border:'1.5px solid #151B2D'}}/>

                                <div className="btn-group">
                                    <Link to={this.state.search_link}>
                                        <button onClick={this.routeChange} className="btn btn-outline-primary">Search</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                    
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{border:'1.5px solid #151B2D'}}>
                                        <div className="dropdown-item ">
                                            <input type="radio"
                                            defaultChecked={this.state.search_type === 'opt1' && true}
                                            name="search_type"
                                            value="/search?title="
                                            onClick={this.onChange}/> Book 
                                        </div>
                                        <div className="dropdown-item">
                                            <input type="radio"
                                            defaultChecked={this.state.search_type === 'opt2' && true}
                                            name="search_type"
                                            value="/search?genre="
                                            onClick={this.onChange}/> Genre
                                        </div>
                                        <div className="dropdown-item ">
                                            <input type="radio"
                                            defaultChecked={this.state.search_type === 'opt3' && true}
                                            name="search_type"
                                            value="/search?author="
                                            onClick={this.onChange} style={{color:'#151B2D'}}/> Author
                                        </div>
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