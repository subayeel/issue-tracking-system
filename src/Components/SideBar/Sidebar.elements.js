import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export const SidebarContainer = styled.div`
  display: grid;
  position: fixed;
  align-items: center;
  background-color: #3C4048;
  height: 100%;
  width: 40%;
  top: 80px;
  right: 0;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-200%")};
  transition: 0.2s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  background: transparent;

  display: block;
  position: absolute;
  transform: translate(-50%, 50%);
  top: 0;
  right: 0;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 14px;
  > img {
    width: 95px;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  font-size: 1.0rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(Link)`
  padding: 10px 22px;
  background-color: #835a3a;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: burlywood;
    cursor: pointer;
  }
`;
