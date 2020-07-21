import React, { Component } from 'react'
import ImageUploading from "react-images-uploading";
import ReactTooltip from "react-tooltip"
import { update_shelf } from "../Services"

export class EditShelf extends Component {

    constructor(){
        super()
        this.state ={
            shelf: '',
            pic: "",
            uploaded: false
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    upload = (imageList) => {
        this.setState({uploaded: true})
        if(imageList.length > 0)
            this.setState({pic: imageList[0]['dataURL']})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const data = {
            "old_title": this.props.shelf.shelf_title,
            "new_title": this.state.shelf,
            "pic": this.state.pic
        }

        update_shelf(data).then(res =>{
            alert(res.data.result)
            window.location.reload()
        })
    }

    componentDidMount(){
        this.setState({pic: this.props.shelf.shelf_pic})
        this.setState({shelf: this.props.shelf.shelf_title})
    }

    render() {
        return (
            <React.Fragment>
            <button data-tip="Edit Shelf" style={{backgroundColor:'white', border:'1px solid #151B2D', paddingLeft:'10px', paddingRight:'10px'}}
             type="button" className="btn bg-white" data-toggle="modal" data-target={'#' + this.props.shelf.shelf_title + 'shelf'}>
                <i className="fa fa-edit" aria-hidden="true" />
            </button>
            <ReactTooltip />
            <div className="modal" id={this.props.shelf.shelf_title + 'shelf'}>
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Shelf</h4>
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

export default EditShelf
