import React, { Component } from 'react'
import ImageUploading from "react-images-uploading";
import ReactTooltip from "react-tooltip"
import {add_shelf} from '../Services'

export class AddShelf extends Component {

    constructor(){
        super()
        this.state ={
            shelf: '',
            pic: ''
        }
    }
   
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    upload = (imageList) => {
        if(imageList.length > 0)
            this.setState({pic: imageList[0]['dataURL']})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const data = {
            'shelf': this.state.shelf,
            'pic': this.state.pic
        }

        add_shelf(data).then(res =>{
            alert(res.data.result)
            window.location.reload(false)
        }).catch(err =>{
            alert(err)
        })
    }

    render() {
        return (
            <React.Fragment>
            <button type="button" className="btn w-100 bg-light border" data-tip="Create Shelf"  data-toggle="modal" data-target="#myModal">
                <i className="fa fa-plus" aria-hidden="true" />
            </button>
            <ReactTooltip />
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Create Shelf</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                            <ImageUploading 
                            onChange={this.upload} 
                            maxNumber={1}
                            maxFileSize={5 * 1024 * 1024}
                            acceptType={["jpg", "gif", "png", "PNG"]}
                            >
                                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                                
                                <React.Fragment>
                                        {imageList.map(image => (
                                            <div className="mb-3">
                                                <img src={image.dataURL} alt="img" className="rounded img"/>
                                            </div>
                                        ))}
                                    
                                    <div className="btn-group">
                                        <button 
                                        data-tip="Upload Image"
                                        className="btn btn-primary mr-2" onClick={onImageUpload}>
                                            <i className="fa fa-upload" aria-hidden="true"/>    
                                        </button>
                                        <button 
                                        data-tip="Remove Image"
                                        className="btn btn-primary mr-2" onClick={onImageRemoveAll}>
                                            <i className="fa fa-trash" aria-hidden="true"/>    
                                        </button>
                                        <ReactTooltip />
                                    </div>
                                </React.Fragment>
                                )}
                            </ImageUploading>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Shelf Title:</label>
                                <input type="text" className="form-control" name="shelf"
                                placeholder="1st character must not be numeric"
                                value={this.state.shelf}
                                pattern="^[a-zA-Z].*$"
                                onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"  className="btn btn-primary">Submit</button>
                        </form>

                       
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default AddShelf
