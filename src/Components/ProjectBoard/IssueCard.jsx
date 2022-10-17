import React from "react";
import Avatar from "../Navbar/Avatar";
import {
  TextWrap,
  CardContainer,
  CardWrapper,
  Priority,
  PriorityContainer,
  Row,ProfileContainer,Text, LightText, DarkText,Heading,Heading2,TypeContainer
} from "./ProjectBoard.elements";

const IssueCard = (props) => {
  var vcolor=""
  if (props.priority ==="HIGH"){
    vcolor = "red"
  }else if(props.priority ==="MEDIUM"){
    vcolor = "orange"
  }else if(props.priority ==="LOW"){
    vcolor = "green"
  }
  return (
    <>
      <CardContainer>
      <TypeContainer>
        <DarkText>{props.type}</DarkText>
      </TypeContainer>
        <CardWrapper>
          <Row>
            <DarkText>id:12312313</DarkText>
            <LightText>12/09/2000</LightText>
          </Row>
          <TextWrap>
            <Heading>{props.projectName}</Heading>
            <DarkText>
              {props.desc}
            </DarkText>
            <LightText>
              {props.summary}
            </LightText>
          </TextWrap>
          <Row>
            <ProfileContainer>
              <Avatar />
              <Heading2> {props.assigneeName}</Heading2>
            </ProfileContainer>

            <PriorityContainer>
              <DarkText>Priority</DarkText>
              <Priority bgcolor={vcolor}>{props.priority}</Priority>
            </PriorityContainer>
          </Row>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default IssueCard;
