import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Bookshelf from './Bookshelf'
import AddShelf from './AddShelf'
import ReactTooltip from "react-tooltip"
import {get_user_shelf} from '../Services'
import './Bookshelves.css';

export class BookShelves extends Component {

  constructor(){
    super()
    this.state ={
        shelves: []
    }
  }

  componentDidMount(){    
    get_user_shelf().then(res => {
      this.setState({shelves: JSON.parse(res.data.shelves)})
    }).catch(err =>{
      alert(err)
    })
  }

  render() {
    return (
      <div style={{backgroundColor:'#EAEDF1'}}>
        
        <Navbar />
        <div className="container-fluid h-100 pb-0" id="bookshelves" style={{width:'80%', backgroundColor:'white'}}>
          <div className="row" style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
            <div className="col"><h3 className="font-weight-light" style={{color: 'white', fontSize: '27px', paddingTop: '5px', paddingLeft:'170px'}}>My Bookshelves</h3></div>
          </div>
          
          <div className="row" id="bookshelf_icons">
            <div className="col-1"  id="icons_col">

              <div className="container-fluid">
                <div className="row py-1">
                  {/* add shelf */}
                  <AddShelf />
                </div>
              </div>

              {
                this.state.shelves.map((shelf) =>( 
                  <div id="icon_div" key={shelf.shelf_title}>
                    <img 
                    className="img-fluid btn-light" 
                    alt={shelf.shelf_title} 
                    data-tip={shelf.shelf_title} 
                    src={shelf.shelf_pic} 
                    data-toggle="collapse" 
                    data-target={"#" + shelf.shelf_title} 
                    />
                  <ReactTooltip />
                  </div>
                  ))
              }
            </div>

            <div className="col-11 px-0">
            {
              this.state.shelves.map((shelf) =>(
                <React.Fragment key={shelf.shelf_title}>
                  {
                  this.props.match.params.shelf_title === shelf.shelf_title &&
                  <div id={shelf.shelf_title} className="collapse show">
                    <Bookshelf books={shelf.books} shelf={shelf.shelf_title} />
                  </div>
                  }
                  {
                  this.props.match.params.shelf_title !== shelf.shelf_title &&
                  <div id={shelf.shelf_title} className="collapse">
                    <Bookshelf books={shelf.books} shelf={shelf.shelf_title} />
                  </div>
                  }
                </React.Fragment>
              ))
            }
            </div>
          </div>                    
        </div>  
      </div>
    )
  }
}
  
export default BookShelves