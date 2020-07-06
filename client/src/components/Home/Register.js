import React, { Component } from 'react'
import { register } from '../Services'
import './Home.css';

export class Register extends Component {

    constructor(){
        super()
        this.state ={
            username: '',
            email: '',
            password: '',
            dob: ''
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            dob: this.state.dob
        }

        register(newUser).then(res => {
            if ('result' in res.data)
                alert(res.data.result)
            else
                alert(res.data.error)
            window.location.reload()
        })
    }


    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#register">
                    Register
                </button>
                
                <div className="modal fade" id="register">
                    <div className="modal-dialog">
                    <div className="modal-content">
                    
                         {/* Modal Header  */}
                        <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        {/* Modal body */}
                        <div className="modal-body">
                        <form className="was-validated" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username:</label>
                                <input type="text" minLength="3" 
                                className="form-control" placeholder="Enter username" 
                                value={this.state.username}
                                onChange={this.onChange}
                                name="username" id="username" required/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter valid username of minimum 3 length.</div> 
                            </div>                            
                            <div className="form-group">
                                <label>Email address:</label>
                                <input type="email" minLength="7" className="form-control" 
                                value={this.state.email}
                                onChange={this.onChange}
                                placeholder="Enter email" name="email" required/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a valid email.</div> 
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" minLength="5" className="form-control" 
                                value={this.state.password}
                                onChange={this.onChange}
                                placeholder="Enter email" name="password" required/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a password with a minimum length 5.</div> 
                            </div>
                            <div className="form-group">
                                <label>Date of Birth:</label>
                                <input type="date" className="form-control" 
                                value={this.state.dob}
                                onChange={this.onChange}
                                placeholder="Enter Date of Birth" name="dob" required/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a valid date.</div> 
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

export default Register