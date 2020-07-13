import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './Profile.css';
import { assign_user_personality, getUser } from '../Services'
import Radar from 'react-d3-radar';

export class Profile extends Component {

    constructor(){
        super()
        this.state ={
            per_desc: ''
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

    componentDidMount(){
        getUser().then(res =>{
            this.setState({per_desc: JSON.parse(res.data.user)['description']})
        })
    }

    render() {
        return (
        <div>
            <Navbar />
                
            <div className="container-fluid p-0 mx-auto" style={{width:'80%'}}>
                    <div id="user_header" className="row">
                        <div className="col-md-auto">
                            <img alt="" src = "./images/letter.jpg" id="profile_pic" className="rounded img"/>
                        </div>

                        <div className="col-md-5" style={{marginRight:'50px'}}>
                            <div className="row">
                                <h4 className="font-weight-light">Mbrz</h4>
                            </div>
                            
                            <div className="row">
                                <button className="btn btn-outline-secondary">Edit Profile</button>
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
                                // {
                                //     key: 'temp3',
                                //     label: 'temp3',
                                //     values: {
                                //         Conscientiousness: 3.496248355474754,
                                //         Neuroticism: 2.4761285524453447,
                                //         Extraversion: 3.3476599180089828,
                                //         Agreeableness: 3.4712547582394007,
                                //         Openness: 4.274853906536047,
                                //     },
                                // },
                    
                                ],
                            }}
                        />
                        </div>
                        <div className="col">

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
                                <button type="submit" className="btn btn-lg btn-outline-secondary">Personalize Me</button>
                            </div>
                        </form>

                        </div>
                    </div>
                    <div className="row" style={{borderTop:'1.5px solid #151B2D'}}>
                        
                    </div>
                </div>
            
            <div style={{paddingBottom:'270px'}}></div>

            <Footer />
                
        </div>
        )
    }
}

export default Profile