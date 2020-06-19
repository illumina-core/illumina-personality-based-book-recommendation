import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'
import {add_shelf} from '../Services'

export class AddShelf extends Component {

    constructor(){
        super()
        this.state ={
            shelf: '',
            pictures: []
        }
    }

    onDrop = (pic) =>{
        this.setState({
            pictures: this.state.pictures.concat(pic),
        });
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = () =>{
        add_shelf(this.state.shelf).catch(err =>{
            alert(err)
        })
    }

    render() {
        return (
            <div>
            <button type="button" className="btn" data-toggle="modal" data-target="#myModal">
                <i className="fa fa-plus" aria-hidden="true" />
            </button>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Create Shelf</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Shelf Title:</label>
                                <input type="text" className="form-control" name="shelf"
                                value={this.state.shelf}
                                onChange={this.onChange}
                                />
                            </div>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AddShelf
