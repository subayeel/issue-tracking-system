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
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="">
            Home
          </SidebarLink>
          <SidebarLink onClick={toggle} to="">
            Content
          </SidebarLink>
          <SidebarLink onClick={toggle} to="">
            Topics
          </SidebarLink>
          <SidebarLink onClick={toggle} to="">
            Misconception
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin"> Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
