import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: ${({ round }) => (round ? "14px" : "")};;
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ primary }) => (primary ? "#3C4048" : "#060606")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 24px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#00ABB3" : "#EC9123")};
  }
  @media screen and (min-width:768px){
    max-width:120px;
  }
`;
