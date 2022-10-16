import React from "react";

import {
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavbarContainer, 
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navbar.elements";

import Avatar from "./Avatar";

import { FaBars, FaRegWindowClose } from "react-icons/fa";

function Navbar({toggle,isOpen}) {
  return (
    <Nav>
      <NavbarContainer>
      
        <MobileIcon onClick={toggle}>
          {isOpen ?<FaRegWindowClose/>:<FaBars/>}
        </MobileIcon>
      
      
        <NavLogo to="/"> 
          <img
            src="https://seeklogo.com/images/I/its-logo-D8F21DA8FE-seeklogo.com.png"
            alt=""
          />
        </NavLogo>
        
        <NavMenu>
          <NavItem>
            <NavLinks to="/">
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/createissue">
              Create Issue
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/createproject">
              Create Project
            </NavLinks>
          </NavItem>
          
        </NavMenu>
        <Avatar></Avatar>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
