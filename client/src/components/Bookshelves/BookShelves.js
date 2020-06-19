import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Bookshelf from './Bookshelf'
import AddShelf from './AddShelf'
import ReactTooltip from "react-tooltip"
import {getUser} from '../Services'
import './Bookshelves.css';

export class BookShelves extends Component {

  constructor(){
    super()
    this.state ={
        user: {},
        shelves: []
    }
  }

  componentDidMount(){
    
    getUser().then(res => {
      this.setState({user: JSON.parse(res.data.user)})
      this.setState({shelves: this.state.user['shelves']})
    }).catch(err =>{
      alert(err)
    })
  }

  componentWillUnmount(){
    if ('shelf_title' in this.props.match.params){
      document.getElementById(this.props.match.params.shelf_title).click()
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid h-100 pb-0" id="bookshelves">
          <div className="row" style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
            <div className="col"><h3 className="text-light">My Bookshelves</h3></div>
          </div>
          
          <div className="row" id="bookshelf_icons">
            <div className="col-auto" md="auto" id="icons_col">

              <div className="container-fluid">
                <div className="row">
                  {/* add shelf */}
                  <AddShelf />
                </div>
              </div>

              {
                this.state.shelves.map((shelf) =>(
                  <div id="icon_div" key={shelf.shelf_title}>
                    <img 
                    className="rounded img-fluid" 
                    alt={shelf.shelf_title} 
                    data-tip={shelf.shelf_title} 
                    src={shelf.shelf_pic} 
                    data-toggle="collapse" 
                    data-target={"#" + shelf.shelf_title} 
                    id="toggler2" 
                    />
                  <ReactTooltip />
                  </div>
                ))
              }
            </div>

            <div className="col px-0">
            {/* {
              this.state.shelves.map((shelf) =>( 
                <div id={shelf.shelf_title} className="collapse" key={shelf.shelf_title}>
                  <Bookshelf books={shelf.shelved_books} shelf={shelf.shelf_title} user={this.state.user.username}/>
                </div>
              ))
            } */}
            </div>

          </div>                    
        </div>  
      </div>
    )
  }
}
  
export default BookShelves