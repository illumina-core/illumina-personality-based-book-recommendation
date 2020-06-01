import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import {
    Card, 
    CardImg, 
    CardImgOverlay,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    CardDeck,
    Container,
    Row
  } from 'reactstrap';

const Home = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    
  return (
    <Container fluid={true} style={{padding: '0px;'}}>
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Illumina</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                      <Login />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                      <Register />
                  </NavLink>
                </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
      <Card inverse>
          <CardImg width="100%" src="./images/bko2.jpg" alt="Card image cap" />
          <CardImgOverlay>
            <h1 class="font-weight-light" style={{fontSize:'60px', textShadow:'0 0 20px black', paddingTop:'35px', paddingBottom:'35px'}}>Welcome to Illumina</h1>
            <h4 class="font-weight-light" style={{fontSize:'35px', textShadow:'0 0 20px black', paddingTop:'10px'}}>Discover books suitable for your personality</h4>
            <h4 class="font-weight-light" style={{fontSize:'35px', textShadow:'0 0 20px black', paddingTop:'10px'}}>Curate your personal bookshelves</h4>
            <h4 class="font-weight-light" style={{fontSize:'35px', textShadow:'0 0 20px black', paddingTop:'10px', paddingBottom:'50px'}}>Interact with similar people</h4>
            <Button outline color="secondary" href="/" 
            style={{fontSize:'25px', color:'white', border:'1px solid white'}}>
            Learn how the project works</Button>
          </CardImgOverlay>
      </Card>
      <Row style={{paddingTop:'30px'}}> 
          <h3 class="font-weight-light">Browse Genres</h3>
          <CardDeck border="dark" style={{paddingTop: '15px'}}>
            <Card border="dark">
              <CardImg top width="100%" src="./images/dummy.jpg" alt="Card image cap" />
            </Card>
            <Card border="dark">
              <CardImg top width="100%"  src="./images/dummy.jpg" alt="Card image cap" />
            </Card>
            <Card border="dark">
              <CardImg top width="100%"  src="./images/dummy.jpg" alt="Card image cap" />
            </Card>
          </CardDeck>
          <CardDeck border="dark" style={{paddingTop: '30px'}}>
            <Card border="dark">
              <CardImg top width="100%" src="./images/dummy.jpg" alt="Card image cap" />
            </Card>
            <Card border="dark">
              <CardImg top width="100%"  src="./images/dummy.jpg" alt="Card image cap" />
            </Card>
            <Card border="dark">
              <CardImg top width="100%"  src="./images/dummy.jpg" alt="Card image cap" />
            </Card>
          </CardDeck>
          <div className = "container"  style={{textAlign: 'center', paddingTop: '10px'}}>
            <a href="genres">View All Genres</a>
          </div>
      </Row>
      <Row style={{textAlign: 'center', paddingTop: '20px'}}>
          <a href="about-us" style={{paddingRight: '10px', fontSize:'14px'}}>About Us</a>
          <a href="contact-us" style={{fontSize:'14px'}}>Contact Us</a>
      </Row>
      
    </Container>
  )
}


export default Home