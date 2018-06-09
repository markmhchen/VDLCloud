import React from "react";
import "tachyons";
import {Nav, Navbar, NavItem} from 'react-bootstrap/lib';

const ShowNavItem = (onRouteChange, isSigned) => {
    if(isSigned){
        return(
            <Nav>
                <NavItem onClick={() => onRouteChange("signin")} href="#">
                    Sign Out
                </NavItem>
            </Nav>
        )
    } else {
        return(
            <Nav>
                <NavItem onClick={() => onRouteChange("signin")} >
                Sign in
                </NavItem>
                <NavItem onClick={() => onRouteChange("register")} >
                Register
                </NavItem>
            </Nav>
        )
    }

}

const Navigation = ({onRouteChange, isSignedIn}) =>{

    return(
        <div className = "tr">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <div>DINEX VDL</div>
                    </Navbar.Brand>
                </Navbar.Header>
                
                    {ShowNavItem(onRouteChange, isSignedIn)}
                   
                    
                    {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown> */}
                
            </Navbar>;            
        </div>
    )
};

export default Navigation;