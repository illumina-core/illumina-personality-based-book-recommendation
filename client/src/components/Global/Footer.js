import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import {
    
    Collapse,
    Navbar,
    NavbarToggler,
    
    Nav,
    NavItem
} from 'reactstrap';

const Footer = (props) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
    <Navbar color="light" light expand="md">

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem style={{fontSize:'14px', paddingRight:'15px'}}>
                <a href='about-us'>About Us</a>
              </NavItem >
              <NavItem style={{fontSize:'14px'}}>
                <a href="contact-us">Contact Us</a>
              </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <FaTwitter style={{fontSize:'19px'}}/>
            </NavItem>
            <NavItem style={{paddingRight:'8px', paddingLeft:'8px'}}>
              <FaFacebook  style={{fontSize:'19px'}}/>
            </NavItem>
            <NavItem>
               <FaInstagram style={{fontSize:'19px'}}/>
            </NavItem>
         </Nav>
      </Collapse>
  </Navbar>
  </div>
  );
};

export default Footer;