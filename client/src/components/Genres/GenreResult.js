import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Genres } from './Genres'
import { get_genres } from '../Services'
import './Genre.css';

export class GenreResult extends Component {

    constructor(){
        super()
        this.state ={
            genreResults: {}
        }
    }

    componentDidMount(){
        get_genres().then(res =>{
            this.setState({genreResults: res.data.genreResults})
        })
    }

  render() {
    return (
      <div>
        <Navbar />
        <div style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
                <h4 className="font-weight-light" style={{color: 'white', fontSize: '27px', paddingTop: '5px', paddingLeft:'170px'}}>Genres</h4>
            </div>
        <div className="container">
            <div className="row">
                <div className="col px-2">
                    <ul className="list-group list-group-horizontal" style={{border:'1px solid black'}}>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_A">                    
                            <h6>A</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_B" >                    
                            <h6 >B</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_C" >                    
                            <h6 >C</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_D" >                    
                            <h6 >D</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_E" >                    
                            <h6 >E</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_F" >                    
                            <h6 >F</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_G" >                    
                            <h6 >G</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_H" >                    
                            <h6 >H</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_I" >                    
                            <h6 >I</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_J" >                    
                            <h6 >J</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_K" >                    
                            <h6 >K</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_L" >                    
                            <h6 >L</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_M" >                    
                            <h6 >M</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_N" >                    
                            <h6 >N</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_O" >                    
                            <h6 >O</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_P" >                    
                            <h6 >P</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_Q" >                    
                            <h6 >Q</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_R" >                    
                            <h6 >R</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_S" >                    
                            <h6 >S</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_T" >                    
                            <h6 >T</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_U" >                    
                            <h6 >U</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_V" >                    
                            <h6 >V</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_W" >                    
                            <h6 >W</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_X" >                    
                            <h6 >X</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_Y" >                    
                            <h6 >Y</h6>
                        </li>
                        <li className="list-group-item px-3" data-toggle="collapse" href="#genres_Z" >                    
                            <h6 >Z</h6>
                        </li>
                    </ul>   
                </div>    
            </div>
            <div className="row">
                <div className="col">
                    {
                    Object.entries(this.state.genreResults).map( ([alph, genres]) =>  
                        <Genres key={alph} alph={alph} gen_array={genres}/>
                    )}
                </div>     
            </div>
        </div>
      </div>
    )
  }
}
  
export default GenreResult