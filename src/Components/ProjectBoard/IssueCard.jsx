import React from "react";
import Avatar from "../Navbar/Avatar";
import {
  TextWrap,
  IssueCardContainer,
  IssueCardWrapper,
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
      <IssueCardContainer>
      <TypeContainer>
        <DarkText>{props.status}</DarkText>
      </TypeContainer>
        <IssueCardWrapper>
          <Row>
            <DarkText>id:12312313</DarkText>
            <LightText>12/09/2000</LightText>
          </Row>
          <TextWrap>
            <Heading>Lorem, ipsum dolor.</Heading>
            <DarkText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              minus consequatur corporis consequuntur.
            </DarkText>
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
        </IssueCardWrapper>
      </IssueCardContainer>
    </>
  );
};

export default IssueCard;
