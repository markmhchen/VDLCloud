import React from "react";
import "tachyons";
import {Nav, Navbar, NavItem} from 'react-bootstrap/lib';


const Navigation = ({onRouteChange}) =>{
    return(
        <div className = "tr">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <div>DINEX VDL</div>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={() => onRouteChange("signin")} >
                    Sign in
                    </NavItem>
                    <NavItem onClick={() => onRouteChange("register")} >
                    Register
                    </NavItem>
                    <NavItem onClick={() => onRouteChange("signin")} href="#">
                    Sign Out
                    </NavItem>
                    {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown> */}
                </Nav>
            </Navbar>;            
        </div>
    )
};

export default Navigation;