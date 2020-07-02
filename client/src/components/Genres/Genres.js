import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import './Genres.css';
import GenreResult from './GenreResult';

export class Genres extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div class="container-fluid pt-0" id="genres" >
            <div class="row" style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
                <div class="col ">
                    <h3 class="font-weight-light" style={{color: 'white', fontSize: '27px', paddingTop: '5px'}}>Genres</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-auto"  style={{border:'1px solid black'}}>
                    <ul class="list-group list-group-horizontal"s>
                        <li class="list-group-item" data-toggle="collapse" href="#genres_a" >                    
                            <h3 >A</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >B</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >C</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >D</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >E</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >F</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >G</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >H</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >I</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >J</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >K</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >L</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >M</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >N</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >O</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >P</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >Q</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >R</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >S</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >T</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >U</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >V</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >W</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >X</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >Y</h3>
                        </li>
                        <li class="list-group-item" >                    
                            <h3 >Z</h3>
                        </li>
                </ul>
                </div>    

                <div class="col-md-auto">
                    <div class="collapse" id="genres_a">
                        <div class="row"  style={{paddingTop:'40px'}}>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">Abuse</li>
                                    <li class="list-group-item">Academia</li>
                                    <li class="list-group-item">Academic</li>
                                    <li class="list-group-item">Academics</li>
                                    <li class="list-group-item">Accounting</li>
                                    <li class="list-group-item">Action</li>
                                    <li class="list-group-item">Activism</li>
                                    <li class="list-group-item">Adaptations</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">Addition</li>
                                    <li class="list-group-item">Adolescence</li>
                                    <li class="list-group-item">Adoption</li>
                                    <li class="list-group-item">Adult</li>
                                    <li class="list-group-item">Adventure</li>
                                    <li class="list-group-item">Adventures</li>
                                    <li class="list-group-item">Aeroplanes</li>
                                    <li class="list-group-item">Africa</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">African</li>
                                    <li class="list-group-item">Agriculture</li>
                                    <li class="list-group-item">Aircraft</li>
                                    <li class="list-group-item">Airships</li>
                                    <li class="list-group-item">Albanian</li>
                                    <li class="list-group-item">Alchemy</li>
                                    <li class="list-group-item">Alcohol</li>
                                    <li class="list-group-item">Alexandria</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">Alexandria</li>
                                    <li class="list-group-item">Algebra</li>
                                    <li class="list-group-item">Algeria</li>
                                    <li class="list-group-item">Algorithms</li>
                                    <li class="list-group-item">Alternate</li>
                                    <li class="list-group-item">Alternative</li>
                                    <li class="list-group-item">Amateur</li>
                                    <li class="list-group-item">Amazon</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">American</li>
                                    <li class="list-group-item">Americana</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>     
            </div>
        </div>


       
      </div>
    )
  }
}
  
export default Genres