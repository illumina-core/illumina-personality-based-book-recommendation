import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ImageUploading from "react-images-uploading";
import './Profile.css';
import { assign_user_personality, getUser, update_profile_data } from '../Services'
import Radar from 'react-d3-radar';

export class Profile extends Component {

    constructor(){
        super()
        this.state ={
            per_desc: '',
            edit: false,
            username: '',
            email: '',
            profile_pic: '',
            cluster: -1,
            uploaded: false
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = () =>{
        assign_user_personality(this.state.per_desc).then(res =>{
            alert('Personality assigned')
        }).catch(err =>{
            console.log(err)
        })
    }

    onSubmitProfile = () => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            profile_pic: this.state.profile_pic
        }

        update_profile_data(data).then(res =>{
            this.setState({edit: false})
            localStorage.setItem('username', this.state.username)
            localStorage.setItem('profile_pic', this.state.profile_pic)
            window.location.reload()
        })
    }

    edit = () => {
        this.setState({edit: true})
    }

    upload = (imageList) => {
        this.setState({uploaded: true})
        if(imageList.length > 0)
            this.setState({profile_pic: imageList[0]['dataURL']})
    }

    componentDidMount(){
        getUser().then(res =>{
            const user = JSON.parse(res.data.user)
            this.setState({per_desc: user['description']})
            this.setState({username: user['username']})
            this.setState({email: user['email']})
            this.setState({profile_pic: user['profile_pic']})
            this.setState({cluster: user['cluster']})
        })
    }

    render() {
        return (
        <div>
            <Navbar />
                
            <div className="container-fluid">
                    <div id="user_header" className="row">
                            {
                                this.state.edit && 
                                <div className="col">
                                    <ImageUploading 
                                    onChange={this.upload} 
                                    maxNumber={1}
                                    maxFileSize={5 * 1024 * 1024}
                                    acceptType={["jpg", "gif", "png", "PNG"]}
                                    >
                                        {({ imageList, onImageUpload, onImageRemoveAll }) => (
                                        
                                        <div className="upload__image-wrapper" >
                                            
                                            {imageList.map(image => (
                                            <div key={image.key} className="image-item" style={{paddingBottom:'10px'}}>
                                                {
                                                    this.state.uploaded &&
                                                    <img src={image.dataURL} onClick={onImageUpload} alt="img" width="80" height="80"  className="rounded img" style={{border: '2px solid white'}}/>
                                                }
                                            </div>
                                            ))}
                                            {
                                                !this.state.uploaded && 
                                                <div className="image-item" style={{paddingBottom:'10px'}}>
                                                    <img src={this.state.profile_pic} onClick={onImageUpload} alt="img" width="80" height="80"  className="rounded img" style={{border: '2px solid white'}}/>
                                                </div>
                                            }
                                            <div class="btn-group">
                                                <button className="btn" onClick={onImageUpload}>Upload Image</button>
                                                <button className="btn" onClick={onImageRemoveAll}>Remove Image</button>
                                            </div>
                                        </div>
                                        )}
                                    </ImageUploading>
                                </div>
                            }
                            {
                                !this.state.edit && <div className="col">
                                    <img alt="" src = {this.state.profile_pic} id="profile_pic" className="rounded img"/>
                                </div>
                            }

                        <div className={
                            (() => {
                                switch (this.state.edit) {
                                  case true:  return "col";
                                  case false: return "col-5";
                                }
                              })()
                        } style={{marginRight:'50px'}}>
                            <div className="row">
                                {
                                    !this.state.edit && 
                                    <h4 className="font-weight-light">{this.state.username}</h4>
                                }
                                {
                                    this.state.edit && 
                                    <React.Fragment>
                                    <div class="input-group mb-3">
                                        <input 
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        type="text" class="form-control" placeholder="username" name="username" />
                                        <div class="input-group-append">
                                            <span class="input-group-text">username</span>
                                        </div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <input 
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        type="text" class="form-control" placeholder="email" name="email" />
                                        <div class="input-group-append">
                                            <span class="input-group-text">email</span>
                                        </div>
                                    </div>
                                    <button className="btn" onClick={this.onSubmitProfile}>Submit Changes</button>
                                    </React.Fragment>
                                }
                            </div>
                            
                            <div className="row">
                                {
                                    !this.state.edit && 
                                    <button onClick={this.edit} className="btn btn-outline-secondary">Edit Profile</button>
                                }
                            </div>
                        </div>

                        <div className="col-md-5">
                            <h6 className="font-weight-light"><i><b>{this.state.per_desc}</b></i></h6>
                        </div>
                    </div>
                    
                    <div id="heading" className="row">
                        <h4 className="font-weight-light">My Personality</h4>
                    </div>
                    
                    <div id="personality" className="row" style={{borderLeft:'1.5px solid #151B2D', borderRight:'1.5px solid #151B2D', paddingTop:'15px'}}>
                        <div className="col">
                        <Radar
                            width={500}
                            height={500}
                            padding={70}
                            domainMax={5}
                            highlighted={null}
                            onHover={(point) => {
                                if (point) {
                                console.log('hovered over a data point');
                                } else {
                                console.log('not over anything');
                                }
                            }}
                            data={{
                                variables: [
                                {key: 'Conscientiousness', label: 'Conscientiousness'},
                                {key: 'Neuroticism', label: 'Neuroticism'},
                                {key: 'Extraversion', label: 'Extraversion'},
                                {key: 'Agreeableness', label: 'Agreeableness'},
                                {key: 'Openness', label: 'Openness'},
                                ],
                                sets: [
                                {
                                    key: 'me',
                                    label: 'My Scores',
                                    values: {
                                        Conscientiousness: 3.5245650279688165,
                                        Neuroticism: 2.6129679999038737,
                                        Extraversion: 2.794568623583456,
                                        Agreeableness: 3.755423601416593,
                                        Openness: 4.345827060550908,
                                    },
                                },
                                // {
                                //     key: 'temp1',
                                //     label: 'temp1',
                                //     values: {
                                //         Conscientiousness: 3.505763210778742,
                                //         Neuroticism: 2.37602776052686,
                                //         Extraversion: 3.43042389119491,
                                //         Agreeableness: 3.7470608387112776,
                                //         Openness: 4.0366246454403845,
                                //     },
                                // },
                                // {
                                //     key: 'temp2',
                                //     label: 'temp2',
                                //     values: {
                                //         Conscientiousness: 3.6133705746103457,
                                //         Neuroticism: 2.5229510811299973,
                                //         Extraversion: 3.5482717591744084,
                                //         Agreeableness: 3.91170613378943,
                                //         Openness: 4.247675437024291,
                                //     },
                                // },
                                {
                                    key: 'temp3',
                                    label: 'temp3',
                                    values: {
                                        Conscientiousness: 3.496248355474754,
                                        Neuroticism: 2.4761285524453447,
                                        Extraversion: 3.3476599180089828,
                                        Agreeableness: 3.4712547582394007,
                                        Openness: 4.274853906536047,
                                    },
                                },
                    
                                ],
                            }}
                        />
                        </div>
                        <div className="col">
                        {
                            this.state.edit && 
                        <form onSubmit={this.onSubmit}>
                            <div className="row justify-content-center">
                                <div className="form-group" style={{ paddingTop:'15px'}}>
                                    <textarea 
                                    className="form-control" 
                                    name="per_desc"
                                    value={this.state.per_desc}
                                    onChange={this.onChange}
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    style={{width:'500px', height:'180px'}} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button type="submit" className="btn btn-lg btn-outline-secondary">
                                    {
                                        this.state.cluster['cluster'] === -1 && 'Personalize Me'
                                    }
                                    {
                                        this.state.cluster['cluster'] !== -1 && 'Change Personality'
                                    }
                                </button>
                            </div>
                        </form>
                        }

                        </div>
                    </div>
                </div>
            
            <div style={{paddingBottom:'70px'}} />
            <Footer />
        </div>
        )
    }
}

export default Profile