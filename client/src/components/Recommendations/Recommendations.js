import React, { useState } from 'react'
import Navigation from '../Global/Navigation';
import Footer from '../Global/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recommendations.css';
import ReactStars from 'react-rating-stars-component';
import { BrowserRouter as Router} from 'react-router-dom';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    UncontrolledCollapse, Button, Container, Row, Col, Popover, PopoverHeader, PopoverBody
  } from 'reactstrap';

const Recommendations = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
      <Router>
         
        <Container>
            
            <Navigation />

            <Container id="recommendations" style={{border: '1.5px solid #151B2D'}}>
                    <Row style={{backgroundColor:'#151B2D'}}>
                        <Col>
                            <h3 class="font-weight-light">Recommendations</h3>
                        </Col>
                    </Row>

                    <Row id="recommendations_details">
                        <Col md="auto">
                            <img src="./images/redwall.jpg" class="rounded img-fluid"></img>
                        </Col>

                        <Col md="8">
                            <h4 class="font-weight-light" >Redwall</h4>
                            <h5 class="font-weight-light" >Brian Jacques</h5>
                            <h5 class="font-weight-light" >Genres: Fantasy, Adventure</h5>
                        </Col>

                        <Col md="auto">
                        <h5 class="font-weight-light" style={{paddingTop:'8px', paddingBottom:'5px', textAlign:'center'}}>Rating: <b>4.5</b></h5>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                                <DropdownToggle caret outline color="secondary">
                                    Add to Bookshelf
                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Bookshelf A</DropdownItem>
                                    <DropdownItem>Bookshelf B</DropdownItem>
                                    <DropdownItem>Bookshelf C</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
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

export default Recommendations