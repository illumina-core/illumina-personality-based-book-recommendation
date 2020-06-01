import React, { useState } from 'react'
import Navigation from '../Global/Navigation';
import Footer from '../Global/Footer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Bookshelves.css';
import Bookshelf from './Bookshelf';

import { BrowserRouter as Router} from 'react-router-dom';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    UncontrolledCollapse, Button, Collapse, CardBody, Card, Container, Row, Col,
  } from 'reactstrap';

  const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
const Book = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
      <Router>
            <Container style={{height:'100%'}}>
                        
                <Navigation />

                 <Container id="bookshelves" style={{height:'100%', paddingBottom:'0px'}}>
                    <Row style={{borderBottom:'1.5px solid #151B2D', backgroundColor: '#151B2D'}}>
                        <Col>
                            <h3 class="font-weight-light">My Bookshelves</h3>
                        </Col>
                    </Row>
                    <Row id="bookshelf_icons">
                        <Col md="auto" id="icons_col">
                                    <div id="icon_div"> <img src="./images/bks1.jpg" id="toggler1" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks2.jpg" id="toggler2" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks3.jpg" id="toggler3" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks4.jpg" id="toggler4" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks1.jpg" id="toggler1" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks2.jpg" id="toggler2" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks3.jpg" id="toggler3" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks4.jpg" id="toggler4" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks1.jpg" id="toggler1" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks2.jpg" id="toggler2" class="rounded img-fluid" ></img></div>
                                    <div id="icon_div"> <img src="./images/bks3.jpg" id="toggler3" class="rounded img-fluid" ></img></div>

                        </Col>
                        <Col style={{paddingLeft:'0px', paddingRight:'0px'}}>
                            <div>
                                <UncontrolledCollapse toggler="#toggler1">
                                    <Bookshelf />
                                </UncontrolledCollapse>
                            </div>
                        </Col>
                    </Row>


                    
                 </Container>

                
                <footer style={{border:'1.5px solid #2C3554', borderBottom:'none'}}>
                    <Footer />
                </footer>
            </Container>
         
     </Router>
  )
}

export default Book