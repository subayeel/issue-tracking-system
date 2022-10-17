import React from "react";
import {
  StyledDrawer,
  DrawerButton,
  DrawerContent,
  TextWrap,
  DrawerQuestion,
  LightText,
  DarkText,
  Row,
  ProfileContainer,
  Heading2,
  CardContainer,
  CardWrapper,
  LightLargeText,
} from "./ProjectBoard.elements";

import Avatar from "../Navbar/Avatar";

const ProjectCard = (props) => {
  var state = props.state;
  var setState = props.setState;
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <LightLargeText>{props.projectName}</LightLargeText>

          <LightText>Start Date:{props.startDate}</LightText>
          <DarkText>End Date:{props.endDate}</DarkText>
          <TextWrap>
            W Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            tenetur neque quibusdam corporis quae magni officiis unde vel modi
            debitis sit dignissimos fugiat veritatis voluptatum tempora odit
            incidunt quidem, temporibus ipsam, aut officia eum sed reiciendis.
            Totam enim earum impedit! Pariatur mollitia repudiandae fuga saepe
            ipsam quis reprehenderit consequuntur corporis!
          </TextWrap>
          <Row>
            <ProfileContainer>
              <Avatar />
              <Heading2> {props.ownerName}</Heading2>
            </ProfileContainer>
          </Row>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default ProjectCard;
