import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './CustomNavBar.css';

const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <div className='class'>
        <img src="brain.jpeg" width={100} alt="Brain Technologies Logo" /></div>
        <div className="brain">
          <NavbarBrand href="/">Brain Technologies</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                COURSES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/about1">Python FullStack</DropdownItem>
                <DropdownItem href="/about2">Java FullStack</DropdownItem>
                <DropdownItem href="/about3">Data Science</DropdownItem>
                <DropdownItem href="/about4">Devops</DropdownItem>
                <DropdownItem href="/about5">AWS</DropdownItem>
                <DropdownItem href="/about6">Cyber Security</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav pills>
            <NavItem>
              <NavLink active href="/instagram">
                Contact-US
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
