import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
  SidebarMenu,
  LogoContainer,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <SidebarWrapper>
        <LogoContainer>
          <img width="75px"
            src="https://seeklogo.com/images/I/its-logo-D8F21DA8FE-seeklogo.com.png"
            alt=""
          />
        </LogoContainer>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            Project Board
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/createproject">
            Create Project
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/createissue">
            Create Issue
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
