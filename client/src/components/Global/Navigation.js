import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Form, Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Navigation = (props) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
    <Navbar  light expand="md" style={{border:'1.5px solid #151B2D', borderTop:'none', backgroundColor:'white'}}>
    <NavbarBrand href="/" >Illumina</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem>
              <Form inline style={{}}>
                      <Input type="text" name="search" id="search" placeholder="Search" className="ml-sm-3" style={{width:'300px', border:'1.5px solid #1F3057'}}/>
                      
                  </Form>

              </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
              <NavItem>
                  <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <a href="someplace" style={{paddingRight: '3px'}}>
                      <img alt="img" src = "./images/letter.jpg" width="32" height="32" class="rounded-circle img-fluid" style={{border: '2px solid black'}}/>
                      
                      </a>
                      Mbrz
                      </DropdownToggle>
                      <DropdownMenu right style={{border:'1.5px solid #151B2D'}}>
                           <DropdownItem>
                          Profile
                          </DropdownItem>
                          <DropdownItem>
                          My Bookshelves
                          </DropdownItem>
                          <DropdownItem>
                          My Recommendations
                          </DropdownItem>
                          <DropdownItem>
                          Activities
                          </DropdownItem>
                          <DropdownItem>
                          Friends
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                          Settings
                          </DropdownItem>
                          <DropdownItem>
                          Sign Out
                          </DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
              </NavItem>
          </Nav>
      </Collapse>
  </Navbar>
  </div>
  );
};

export default Navigation;