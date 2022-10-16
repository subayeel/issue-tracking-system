import styled from "styled-components";
import { CenterFlexContainer } from "../Global";

export const ProjectBoardContainer = styled.div`
  max-width: 1140px;
  margin: 80px auto 0 auto;
`;

export const ProjectBoardWrapper = styled(CenterFlexContainer)`
  height: 90vh;
  justify-content: start;
  flex-direction: column;
`;

export const TextWrap = styled.div`
  width: 100%;
  text-align: start;
  margin: 14px 0;
`;
export const LightText = styled.h3`
  color: #b2b2b2;
  font-size: 14px;
  margin: 0;
  
  font-weight: 500;
`;

export const LightLargeText = styled.h3`
color: #b2b2b2;
font-size: 18px;
margin: 0;
text-align: center;
font-weight: 600;
`;
export const DarkText = styled.h3`
  color: #3c4048;
  margin:0;
  font-size: 14px;
  font-weight: 500;
`;

export const IssueCardContainer = styled.div`
  max-width: 1140px;
  
  margin: 14px;
`;
export const IssueCardWrapper = styled(CenterFlexContainer)`
  flex-direction: column;
  padding: 7px;
  width: 320px;
  border-radius: 7px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.13);
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const PriorityContainer = styled(CenterFlexContainer)`
  display: flex;
  flex-direction: column;
`;

export const Priority = styled(CenterFlexContainer)`
  background-color: ${(props) => props.bgcolor};
  color: white;
  padding: 4px 7px;
  font-size: 12px;
  font-weight: 500;
`;

export const ProfileContainer = styled(CenterFlexContainer)`
  
`;
export const Text = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #3c4048;
`;

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: #3c4048;
  
`;

export const Heading2 = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 0 14px;
  color: #3c4048;
  
`;

export const TypeContainer = styled.div`
width: 100%;
margin-bottom: 14px;
`

export const CardContainer = styled.div`
display: flex;
flex-direction: row;
`

export const HScrollWrapper = styled.div`
  overflow: auto;
  

  > div {
    display: inline-block;
    
  }
`;

export const FilterContainer = styled.div`
width: 100%;
justify-content: space-around;

`

export const FilterWrapper = styled.div`
justify-content: right;
`

export const Label = styled.label`
  width: 100%;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 600;
  margin-right: 24px;
`;

export const SelectField = styled.select`
  width:20%;

  padding: 12px 14px;
  margin: 8px 7px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 7px;
  box-sizing: border-box;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin: 0 7px 0 0;
`;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  margin-top: 14px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;