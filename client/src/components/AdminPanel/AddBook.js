import React, { Component } from 'react'
import { add_book } from '../Services'
import ImageUploading from "react-images-uploading";

export class AddBook extends Component {

    constructor(){
        super()
        this.state ={
            book_title: "",
            description: "",
            authors: "",
            genres: "",
            cover_image:"../static/images/default_book.png",
            links: 0,
            extra_details: 0

        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    upload = (imageList) => {
        if(imageList.length > 0){
            this.setState({cover_image: imageList[0]['dataURL']})
        }
    }

    addLink = (e) => {
        e.preventDefault()
        this.setState({links: this.state.links+1})
    }

    addExtraDetail = (e) => {
        e.preventDefault()
        this.setState({extra_details: this.state.extra_details+1})
    }

    addBook = (e) => {
        e.preventDefault()
        const link_key = document.getElementsByName('link_key')
        const link_value = document.getElementsByName('link_value')
        const links = {}
        var x = 0
        for(x = 0; x < link_key.length; x++){
            if(link_key[x].value.length === 0){
                continue
            } if(link_value[x].value.length === 0){
                continue
            }
            links[link_key[x].value] = link_value[x].value
        }
        
        const extra_detail_key = document.getElementsByName('extra_details_key')
        const extra_detail_value = document.getElementsByName('extra_details_value')
        const extra_details = {}
        for(x = 0; x < extra_detail_key.length; x++){
            if(extra_detail_key[x].value.length === 0){
                continue
            } 
            if(extra_detail_value[x].value.length === 0){
                continue
            }
            extra_details[extra_detail_key[x].value] = extra_detail_value[x].value
        }

        const data = {
            'book_title': this.state.book_title,
            'description': this.state.description,
            'authors': this.state.authors.split(','),
            'genres': this.state.genres.split(','),
            'cover_image': this.state.cover_image,
            'links': links,
            'extra_details': extra_details
        }

        add_book(data).then(res =>{
            alert(res.data.result)
            window.location.reload(false)
        })
    }

    render() {

        const links = []
        var i = 0
        for (i = 0; i < this.state.links; i++) {
            links.push(
                <div className="input-group mb-3" key={i}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Key</span>
                    </div>
                    <input type="text" maxLength="20" required  name="link_key" className="form-control" placeholder="eg. Kindle"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter a valid website.</div> 
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value</span>
                    </div>
                    <input type="text" maxLength="150" required name="link_value" className="form-control" placeholder="url"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter a valid website link.</div> 
                </div>
            )
        }

        const extra_details = []
        for (i = 0; i < this.state.extra_details; i++) {
            extra_details.push(
                <div className="input-group mb-3" key={i}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Key</span>
                    </div>
                    <input type="text" maxLength="20" required name="extra_details_key" className="form-control" placeholder="eg. Original Title"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter a valid extra detail label.</div> 
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value</span>
                    </div>
                    <input type="text" maxLength="150" required name="extra_details_value" className="form-control" placeholder="eg. This is the value"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter valid extra detail information.</div> 
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="form-group">
                    <label>Book Image</label>
                    <br />
                    <ImageUploading 
                    className="form-control"
                    onChange={this.upload} 
                    maxNumber={1}
                    maxFileSize={5 * 1024 * 1024}
                    acceptType={["jpg", "gif", "png", "PNG"]}
                    >
                    {({ imageList, onImageUpload, onImageRemoveAll }) => (
                        <React.Fragment>
                        {imageList.map(image => (
                        <div key={image.key} style={{paddingBottom:'10px'}}>
                            <img src={image.dataURL} alt="img" width="80" height="80"  className="rounded img" style={{border: '2px solid white'}}/>
                        </div>
                        ))}
                        {
                            this.state.cover_image === '../static/images/default_book.png' &&
                            <div style={{paddingBottom:'10px'}}>
                                <img src='../static/images/default_book.png' alt="img" width="80" height="80"  className="rounded img" style={{border: '2px solid white'}}/>
                            </div>
                        }
                        <div className="btn-group">
                            <button className="btn btn-secondary" onClick={onImageUpload}>Upload Image</button>
                            {
                                this.state.cover_image !== '../static/images/default_book.png' &&
                                <button className="btn btn-secondary" onClick={onImageRemoveAll}>Remove Image</button>
                            }
                        </div>
                    </React.Fragment>
                    )}
                    </ImageUploading>
                </div>
                <form className="was-validated">
                    <div className="form-group">
                        <label>Book Title</label>
                        <input type="text" className="form-control"  placeholder="Book Title" 
                        name="book_title"
                        value={this.state.book_title}
                        onChange={this.onChange}
                        minLength="3" maxLength="100"
                        required
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please enter a valid book title.</div> 
                    </div>
                    <div className="form-group">
                        <label>Book Description</label>
                        <textarea className="form-control" 
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        minLength="3" maxLength="1000"
                        placeholder="Book Description"
                        rows="3" 
                        required
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please enter a valid book description.</div> 
                    </div>
                    <div className="form-group">
                        <label>Author(s)</label>
                        <input type="text" className="form-control" 
                        name="authors"
                        value={this.state.authors}
                        onChange={this.onChange}
                        minLength="3"
                        maxLength="500"
                        required
                        placeholder="For multiple authors seperate by comma [,] eg. aut1,aut2" />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please enter a valid author name</div> 
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input type="text" className="form-control" 
                        name="genres"
                        value={this.state.genres}
                        onChange={this.onChange}
                        minLength="3" 
                        maxLength="500"
                        required
                        placeholder="For multiple genres seperate by comma [,] eg. gen1,gen2" />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please enter a valid genre.</div> 
                    </div>
                    <div className="form-group">
                        <label>Links</label>
                        <button className="btn btn-secondary ml-2 mb-3" onClick={this.addLink}>PLUS</button>
                        
                        {links}
                    </div>
                    <div className="form-group">
                        <label>Extra Details</label>
                        <button className="btn btn-secondary ml-2 mb-3" onClick={this.addExtraDetail}>PLUS</button>
                        
                        {extra_details}
                    </div>
                    <button onClick={this.addBook} className="btn btn-secondary ml-2 mb-3">Add Book</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddBook
