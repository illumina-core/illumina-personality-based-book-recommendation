import React, { Component } from 'react'
import { remove_user } from '../Services'

export class RemoveUser extends Component {

    constructor(){
        super()
        this.state ={
            username: "",
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    removeUser = (e) => {
        const data = {
            'username': this.state.username,
        }

        remove_user(data).then(res =>{
            alert(res.data.result)
        })
    }

    render() {


        return (
            <React.Fragment>
                            <div className="col" style={{padding:'5px'}}>
                            <form className="was-validated"> 
                                <div className="form-group">
                                    <textarea className="form-control" 
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    minLength="3" maxLength="1000"
                                    rows="1" 
                                    placeholder="Search User Database"
                                    style={{width:'500px', border:'1.5px solid #151B2D'}}
                                    />
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please enter valid username.</div> 
                                </div>
                            <button onClick={this.removeUser} className="btn btn-outline-dark">Delete User</button>
                            </form>
                            </div>
            </React.Fragment>
        )
    }
}

export default RemoveUser
