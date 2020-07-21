import React, { Component } from 'react'
import ImageUploading from "react-images-uploading";
import SearchBook from './SearchBook';
import { update_book, delete_book } from '../Services'

export class EditBook extends Component {

    constructor(){
        super()
        this.state ={
            id: "",
            book_title: "",
            description: "",
            authors: "",
            genres: "",
            cover_image:"../images/default_book.png",
            links: {},
            extra_details: {},
            links_num: 0,
            extra_details_num: 0,
            edit: false,
            upload: false
        }
        this.onChange = this.onChange.bind(this)
    }

    selectBook = (book) => {
        this.setState({id: book['_id']['$oid']})
        this.setState({book_title: book['book_title']})
        this.setState({description: book['description']})
        this.setState({authors: book['authors'].toString()})
        this.setState({genres: book['genres'].toString()})
        this.setState({cover_image: book['cover_image']})
        this.setState({links: book['links']})
        if(book['extra_details']){
            this.setState({extra_details: book['extra_details']})
        }
        this.setState({edit: true})
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    upload = (imageList) => {
        if(imageList.length > 0){
            this.setState({cover_image: imageList[0]['dataURL']})
            this.setState({upload: true})
        }
    }

    addLink = (e) => {
        e.preventDefault()
        this.setState({links_num: this.state.links_num+1})
    }

    addExtraDetail = (e) => {
        e.preventDefault()
        this.setState({extra_details_num: this.state.extra_details_num+1})
    }

    updateBook = (e) => {
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
            'id': this.state.id,
            'book_title': this.state.book_title,
            'description': this.state.description,
            'authors': this.state.authors.split(','),
            'genres': this.state.genres.split(','),
            'cover_image': this.state.cover_image,
            'links': links,
            'extra_details': extra_details
        }

        update_book(data).then(res =>{
            alert(res.data.result)
            window.location.reload()
        })
    }

    deleteBook = (e) => {
        e.preventDefault()
        delete_book(this.state.id).then(res =>{
            alert(res.data.result)
            window.location.reload()
        })
    }

    render() {

        const links = []
        var i = 0
        for (i = 0; i < this.state.links_num; i++) {
            links.push(
                <div className="input-group mb-3" key={i}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Key</span>
                    </div>
                    <input type="text" maxLength="20"  name="link_key" className="form-control" placeholder="eg. Kindle"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter a valid website.</div> 
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value</span>
                    </div>
                    <input type="text" maxLength="150" name="link_value" className="form-control" placeholder="url"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter a valid website link.</div> 
                </div>
            )
        }

        const extra_details = []
        for (i = 0; i < this.state.extra_details_num; i++) {
            extra_details.push(
                <div className="input-group mb-3" key={i}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Key</span>
                    </div>
                    <input type="text" maxLength="20" name="extra_details_key" className="form-control" placeholder="eg. Original Title"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter a valid extra detail label.</div> 
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value</span>
                    </div>
                    <input type="text" maxLength="150" name="extra_details_value" className="form-control" placeholder="eg. This is the value"/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please enter valid extra detail information.</div> 
                </div>
            )
        }

        return (
        <div className="container">
            <div className="row">
                <div className="col p-3">
                    <SearchBook selectBook={this.selectBook} />
                </div>
            </div>
            {
                this.state.edit &&
            
            <div className="row">
                <div className="col">
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
                                !this.state.upload &&
                                <div style={{paddingBottom:'10px'}}>
                                    <img src={this.state.cover_image} alt="img" width="80" height="80"  className="rounded img" style={{border: '2px solid white'}}/>
                                </div>
                            }    
                            
                            <div className="btn-group">
                                <button className="btn btn-secondary" onClick={onImageUpload}>Upload Image</button>
                                {
                                    this.state.cover_image !== '../images/default_book.png' &&
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
                            rows="3" 
                            required
                            />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">PPlease enter a valid book description.</div> 
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
                            <div className="invalid-feedback">Please enter a valid author name.</div> 
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
                            {
                            Object.entries(this.state.links).map( ([key, value]) =>  
                            <div className="input-group mb-3" key={key}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Key</span>
                                </div>
                                <input defaultValue={key} type="text" maxLength="20" name="link_key" className="form-control" placeholder="eg. Kindle"/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a valid website.</div> 
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Value</span>
                                </div>
                                <input defaultValue={value} type="text" maxLength="150" name="link_value" className="form-control" placeholder="url"/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a valid website.</div> 
                            </div>
                            )}
                            {links}
                        </div>
                        <div className="form-group">
                            <label>Extra Details</label>
                            <button className="btn btn-secondary ml-2 mb-3" onClick={this.addExtraDetail}>PLUS</button>
                            {
                                
                            Object.entries(this.state.extra_details).map( ([key, value]) =>  
                            <div className="input-group mb-3" key={key}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Key</span>
                                </div>
                                <input defaultValue={key} type="text" maxLength="20"  name="extra_details_key" className="form-control" placeholder="eg. Kindle"/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a valid detail.</div> 
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Value</span>
                                </div>
                                <input defaultValue={value} type="text" maxLength="150" name="extra_details_value" className="form-control" placeholder="url"/>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please enter a valid detail.</div> 
                            </div>
                            )}
                            {extra_details}
                        </div>
                        <button onClick={this.updateBook} className="btn btn-secondary ml-2 mb-3">Update Book</button>
                        <button onClick={this.deleteBook} className="btn btn-secondary ml-2 mb-3">Delete Book</button>
                    </form>
                </div>
            </div>
            }
        </div>
        )
    }
}

export default EditBook
