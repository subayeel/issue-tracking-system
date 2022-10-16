import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  height: 80px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(0, 0, 0, 0.01) ;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    transition: 0.6s all ease;
  }

  
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  max-width: 1140px;
  
  justify-content: space-between;
  padding: 0 24px;
  
  
`;

export const NavLogo = styled(LinkR)` 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  overflow: hidden;
  img {
    height: 36px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
    img {
      height: 30px;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  padding: 0;
  align-items: center;
  text-align: center;
  list-style: none;
  color: #3c7c90;
  margin-right: 14px;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 50px;
  &:hover{
    background-color: #eeeeee;
  }
`;

export const NavLinks = styled(LinkR)`
  display: flex;
  color: #2B2A29;
  text-decoration: none;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  white-space: nowrap;
  border: 2px solid #835a3a;
  background: transparent;
  padding: 5px 22px;
  outline: none;
  color: #835a3a;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in;
    color: #fff;
    background-color: #835a3a;
  }
`;

export const AvatarContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
`

export const AvatarWrapper = styled.div`
width: 55px;
height: 55px;
border-radius:100%;
overflow: hidden;
`

export const ImgWrap = styled.div`
display:flex;
justify-content: center;
align-items: center;
object-fit:cover;
`

export const Img = styled.img`
width: 100%;
`

