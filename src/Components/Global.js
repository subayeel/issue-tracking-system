import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    background: #fff;
    font-family:  'Segoe UI';
    margin: 0;
    box-sizing: border-box;
    
}
`;

export const CenterFlexContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

export const ImgWrap = styled(CenterFlexContainer)`
overflow: hidden;
margin-top:14px;
`

export const Img = styled.img`
height: ${(props)=>props.height};
width: ${(props)=>props.width};
object-fit: contain;
`

export default GlobalStyle;
