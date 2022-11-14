import React from "react";
import Avatar from "../Navbar/Avatar";
import Modal from "react-modal";
import { useState, useEffect, useReducer } from "react";

import {
  TextWrap,
  CardContainer,
  CardWrapper,
  Priority,
  PriorityContainer,
  Row,
  ProfileContainer,
  Text,
  LightText,
  DarkText,
  Heading,
  Heading2,
  TypeContainer,
} from "./ProjectBoard.elements";

const IssueCard = (props) => {
  var vcolor = "";
  if (props.priority === "HIGH") {
    vcolor = "red";
  } else if (props.priority === "MEDIUM") {
    vcolor = "orange";
  } else if (props.priority === "LOW") {
    vcolor = "green";
  }

  //modal state
  const [modalState, setModal] = useState(false);

  //modal functions
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const issues = props.issues;
  const setIssues = props.setIssues;

  const currentCard = issues[props.id];

  async function updateCard() {
    // var nu = issues.filter(key===props.key)
    currentCard.type = document.getElementById("type").value;
    currentCard.summary = document.getElementById("summary").value;
    currentCard.assigneeName = document.getElementById("assigneeName").value;
    await setIssues(issues);
    setModal(false);
    console.log(issues);
  }

  return (
    <>
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>Close</button>
        <div>Current Type: {props.type}</div>
        <input placeholder="type" id="type" type="text"></input>
        <div>Current Summary:{props.summary}</div>
        <input placeholder="Summary" id="summary" type="text"></input>
        <div>Current Assignee Name: {props.assigneeName}</div>
        <input
          id="assigneeName"
          placeholder="Assignee Name"
          type="text"
        ></input>
        <button onClick={()=>{updateCard()}}> Update</button>
      </Modal>
      <CardContainer onClick={openModal}>
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
            <DarkText>{props.desc}</DarkText>
            <LightText>{props.summary}</LightText>
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
