import React, { Component } from 'react'
import { login } from '../Services'
import './Home.css';

export class Login extends Component {

    constructor(){
        super()
        this.state ={
            login_id: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const newUser = {
            login_id: this.state.login_id,
            password: this.state.password
        }

        login(newUser).then(res => {
            if(res.data.err){
                alert("Invalid login id or password")
            }
            else if (res.data.admin){
                alert(res.data.username + " has logged in successfully!")
                localStorage.setItem('logged_in', true)
                localStorage.setItem('admin', true)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('profile_pic', res.data.profile_pic)
                window.location.reload()
            }
            else{
                alert(res.data.username + " has logged in successfully!")
                localStorage.setItem('logged_in', true)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('profile_pic', res.data.profile_pic)
                window.location.reload()
            }
        }).catch(err => {
            alert(err)
        })
    }


    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary my-2 my-sm-0 mr-2" data-toggle="modal" data-target="#login">
                    Sign In
                </button>

                
                <div className="modal fade" id="login">
                    <div className="modal-dialog">
                    <div className="modal-content">
                    
                         {/* Modal Header  */}
                        <div className="modal-header">
                        <h4 className="modal-title">Sign In</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        {/* Modal body */}
                        <div className="modal-body">
                        <form className="was-validated" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Login ID:</label>
                                <input type="text" minLength="3" className="form-control" 
                                value={this.state.login_id}
                                onChange={this.onChange}
                                placeholder="Enter username/email" name="login_id" required/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter valid username/email of minimum 3 length.</div> 
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" minLength="5" className="form-control" 
                                value={this.state.password}
                                onChange={this.onChange}
                                placeholder="Enter password" name="password" required/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter valid password of minimum 5 length.</div> 
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
