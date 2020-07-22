import React, { Component } from 'react'
import {add_review} from '../Services'

export class AddReview extends Component {

    constructor(){
        super()
        this.state ={
            review: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
                
        const rev = {
            review: this.state.review,
            book: this.props.id
        }

        add_review(rev).then(res => {
            window.location.reload(false)
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        return (
            <div className='row'>
            <div className="col" align="center">
                <button type="button" className="btn btn-outline-primary mb-2" data-toggle="modal" data-target="#myModal" style={{paddingRight:'40px', paddingLeft:'40px'}}>
                Add Review
                </button>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Submit Review</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                <label>Review:</label>
                                <textarea type="text" minLength="10" className="form-control" 
                                value={this.state.review}
                                onChange={this.onChange}
                                placeholder="Enter review" name="review"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
         
        )
    }
}

export default AddReview
