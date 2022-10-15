import React, { useState } from "react";
import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterYoutubeIcon,
  FooterContainer,
  FooterWrapper,
  FooterTwitterIcon,
  Column,
  FooterLikeIcon,
  Row,
  LinkText,
  TextWrap,
  Subtitle,
  EmptyContainer,
} from "../Footer/Footer.elements";

import { Button } from "../ButtonElement";

function Footer() {
  const [likeState, setLike] = useState(false);
  return (
    <FooterContainer>
      <FooterWrapper>
        <Row justify="space-between">
          <Column>
            <Button dark bgColor="#eeeeee" margin="2px" to="">
              Projects
            </Button>
            <Button dark bgColor="#eeeeee" margin="2px" to="">
              Clients
            </Button>
            <Button dark bgColor="#eeeeee" margin="2px" to="">
              Upcoming Events
            </Button>
          </Column>

          <Column>
            <TextWrap>
              <LinkText to="">FORUM</LinkText>

              <LinkText to="">&nbsp;|&nbsp;</LinkText>

              <LinkText to="">ABOUT</LinkText>
            </TextWrap>
          </Column>
        </Row>

        <Row justify="end">
          <div>
            <FooterFacebookIcon />
            <FooterInstagramIcon />
            <FooterTwitterIcon />
            <FooterYoutubeIcon />
          </div>
        </Row>
        <TextWrap>
          <Subtitle>
            
            Copyright 1999-2022
            <br />
            All Rights Reserved.
          </Subtitle>
        </TextWrap>
        <Row justify="center">
          
        </Row>
        
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
