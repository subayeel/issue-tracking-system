import React, { useEffect, useState } from "react";

//import for image
import noproject from "../../Images/noproject.svg";
import { Img, ImgWrap } from "../Global";
import { projects } from "../../App";

//styled componenets imports
import {
  ProjectBoardContainer,
  ProjectBoardWrapper,
  TextWrap,
  LightLargeText,
  HScrollWrapper,
  FilterContainer,
  FilterWrapper,
  Label,
  SelectField,
} from "./ProjectBoard.elements";

import { Button } from "../ButtonElement";

import IssueCard from "./IssueCard";

const ProjectBoard = (props) => {
  var item = props.item;
  var setItem = props.setItem;

  function displayProject(project) {
    return (
      <IssueCard
        assigneeName={project.assigneeName}
        status={project.status}
        priority={project.priority}
        type={project.type}
      ></IssueCard>
    );
  }

  const [priority, setPriority] = useState("");
  const [assigneeName, setAssigneeName] = useState("");

  //function to handle  priority filter change
  const handleFilterChange = (e) => {
    const selectedPriority = e.target.value;
    setPriority(selectedPriority);
  };

  //function to handle filter by assignee name
  const handleAssigneeChange = (e) => {
    const selectedAssigneeName = e.target.value;
    setAssigneeName(selectedAssigneeName);
  };

  useEffect(() => {
    if (priority !== "" && assigneeName !== "") {
      filterItem(priority, assigneeName);
    }
  }, [priority, assigneeName]);

  //function to filter based project priority
  const filterItem = (priority, assigneeName) => {
    const newItem = projects.filter((newVal) => {
      return (
        newVal.priority === priority && newVal.assigneeName === assigneeName
      );
      // comparing status for displaying data
    });
    setItem(newItem);
  };

  //function to filter based project assignee

  if (item.length !== 0) {
    return (
      <>
        <ProjectBoardContainer>
          <ProjectBoardWrapper>
            <FilterContainer>
              <FilterWrapper>
                <Label>Filter:</Label>
                <SelectField onChange={handleFilterChange}>
                  <option selected value="" disabled>
                    Priority filter
                  </option>
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </SelectField>

                <SelectField onChange={handleAssigneeChange}>
                  <option selected value="" disabled>
                    Assignee name filter
                  </option>
                  <option value="Abdul">Abdul</option>
                  <option value="John">John</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Salman">Salman</option>
                </SelectField>
              </FilterWrapper>
            </FilterContainer>

            <HScrollWrapper>{item.map(displayProject)}</HScrollWrapper>
          </ProjectBoardWrapper>
        </ProjectBoardContainer>
      </>
    );
  } else {
    return (
      <>
        <ProjectBoardContainer>
          <ProjectBoardWrapper>
            <FilterContainer>
              <FilterWrapper>
                <Label>Filter:</Label>
                <SelectField onChange={handleFilterChange}>
                  <option selected value="" disabled>
                    Priority filter
                  </option>
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </SelectField>

                <SelectField onChange={handleAssigneeChange}>
                  <option selected value="" disabled>
                    Assignee name filter
                  </option>
                  <option value="Abdul">Abdul</option>
                  <option value="John">John</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Salman">Salman</option>
                </SelectField>
              </FilterWrapper>
            </FilterContainer>
            <ImgWrap>
              <Img height="240px" src={noproject} />
            </ImgWrap>
            <TextWrap>
              <LightLargeText> No Projects Available</LightLargeText>
            </TextWrap>
            <Button to="/createproject" round primary>
              {" "}
              Create Project
            </Button>
          </ProjectBoardWrapper>
        </ProjectBoardContainer>
      </>
    );
  }
};

export default ProjectBoard;
