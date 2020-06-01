import React, { useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from 'react-rating-stars-component'
import './Bookshelf.css';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledCollapse, Button, Collapse, CardBody, Card, Form, FormGroup, Label, Input, FormText, Container, Row, Col,
} from 'reactstrap';


const Bookshelf = (props) => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
          <Container id="bks_book">
              <Row id="bks_heading">
                <Col md="auto">
                    <h3 class="font-weight-light"><b>Favourites</b></h3>
                </Col>
              </Row >

              <Row id="bks_info">
                <Col md="auto">
                  <img src="./images/redwall.jpg" class="rounded img-fluid"></img>
                </Col>

                <Col md="9">
                  <h4 class="font-weight-light">Redwall</h4>
                  <h5 class="font-weight-light">Brian Jacques</h5>
                </Col>

                <Col md="auto">
                <ReactStars
                    size={25}
                    half={true}
                    onChange={newRating => {console.log(newRating); }}/>
                </Col>
              </Row>

              <Row id="bks_info">
                <Col md="auto">
                  <img src="./images/redwall.jpg" class="rounded img-fluid"></img>
                </Col>

                <Col md="9">
                  <h4 class="font-weight-light">Redwall</h4>
                  <h5 class="font-weight-light">Brian Jacques</h5>
                </Col>

                <Col md="auto">
                <ReactStars
                    size={25}
                    half={true}
                    onChange={newRating => {console.log(newRating); }}/>
                </Col>


              </Row>

              <Row id="bks_info">
                <Col md="auto">
                  <img src="./images/redwall.jpg" class="rounded img-fluid"></img>
                </Col>

                <Col md="9">
                  <h4 class="font-weight-light">Redwall</h4>
                  <h5 class="font-weight-light">Brian Jacques</h5>
                </Col>

                <Col md="auto">
                <ReactStars
                    size={25}
                    half={true}
                    onChange={newRating => {console.log(newRating); }}/>
                </Col>


              </Row>


              

              



          </Container>
      );
}

export default Bookshelf;

