import React, { useState } from 'react'
import Login from './Login';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';

  const HomeNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Illumina</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Login /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=""><Button outline color="secondary">Register</Button>{' '}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }


export default HomeNav