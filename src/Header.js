import React, {PropTypes} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Header.css';
const Header =props =>{
  let brand;
  if(props.brandName){
    brand =(
      <Navbar.Brand>
        <a href="#">{props.brandName ? props.brandName :"Anonymous"}</a>
      </Navbar.Brand>
    );
  } else {
    brand =(
      <Navbar.Brand>
      Anonymous
      </Navbar.Brand>
    )
  }
  return(

      <Navbar className ='Header'>
        <Navbar.Header>
        {brand}

        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Test Link</NavItem>
          <NavItem eventKey={2} href="#">Test Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
  );
};
Header.propTypes = {
  brandName: PropTypes.string.isRequired
};
export default Header;
