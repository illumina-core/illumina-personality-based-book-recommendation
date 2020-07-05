import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Genres } from './Genres'
import { get_genres } from '../Services'
import './GenreResult.css';

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
        <div className="container-fluid pt-0" id="genres" >
            <div className="row" style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
                <div className="col ">
                    <h3 className="font-weight-light" style={{color: 'white', fontSize: '27px', paddingTop: '5px'}}>Genres</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-auto"  style={{border:'1px solid black'}}>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item" data-toggle="collapse" href="#genres_A" >                    
                            <h3>A</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_B" >                    
                            <h3 >B</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_C" >                    
                            <h3 >C</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_D" >                    
                            <h3 >D</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_E" >                    
                            <h3 >E</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_F" >                    
                            <h3 >F</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_G" >                    
                            <h3 >G</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_H" >                    
                            <h3 >H</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_I" >                    
                            <h3 >I</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_J" >                    
                            <h3 >J</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_K" >                    
                            <h3 >K</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_L" >                    
                            <h3 >L</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_M" >                    
                            <h3 >M</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_N" >                    
                            <h3 >N</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_O" >                    
                            <h3 >O</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_P" >                    
                            <h3 >P</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_Q" >                    
                            <h3 >Q</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_R" >                    
                            <h3 >R</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_S" >                    
                            <h3 >S</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_T" >                    
                            <h3 >T</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_U" >                    
                            <h3 >U</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_V" >                    
                            <h3 >V</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_W" >                    
                            <h3 >W</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_X" >                    
                            <h3 >X</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_Y" >                    
                            <h3 >Y</h3>
                        </li>
                        <li className="list-group-item" data-toggle="collapse" href="#genres_Z" >                    
                            <h3 >Z</h3>
                        </li>
                    </ul>   
                </div>    

                <div className="col-md-auto">
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