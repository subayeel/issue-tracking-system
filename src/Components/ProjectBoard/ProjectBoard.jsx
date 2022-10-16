import React, { useState } from "react";

//import for image
import noproject from "../../Images/noproject.svg";
import { Img, ImgWrap } from "../Global";

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

var projects = [
  {
    assigneeName: "Abdul",
    status: "DEVELOPMENT",
    priority: "HIGH",
    type: "HIGH",
  },
  {
    assigneeName: "Rahul",
    status: "TO DO",
    priority: "LOW",
    type: "HIGH",
  },
  {
    assigneeName: "John",
    status: "TESTING",
    priority: "HIGH",
    type: "HIGH",
  },
  {
    assigneeName: "Chris",
    status: "TESTING",
    priority: "MEDIUM",
    type: "HIGH",
  },
  {
    assigneeName: "Salman",
    status: "COMPLETED",
    priority: "HIGH",
    type: "HIGH",
  },
  {
    status: "COMPLETED",
    priority: "LOW",
    type: "HIGH",
  },
];

const ProjectBoard = (props) => {
  const projectAvailable = props.projectAvailable;
  const [item, setItem] = useState(projects);
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

  //function to handle  priority filter change
  const handleFilterChange = (e) => {
    const priority = e.target.value;
    filterItem(priority);
  };

  //function to handle filter by assignee name
  const handleAssigneeChange = (e) => {
    var sortOrder = e.target.value;
    // const assigneeName = [...new Set(projects.map((Val) => Val.name))];
    if (sortOrder == "ascending") {
      var sortedAscending = item.sort((a, b) =>
        a.assigneeName > b.assigneeName ? 1 : -1
      );

      setItem(sortedAscending);
      console.log("ascending");
    } else if (sortOrder === "descending") {
      var sortedDescending = item.sort((a, b) =>
      a.assigneeName < b.assigneeName ? 1 : -1
    );
      setItem(sortedDescending);
    }
  };

  //function to filter based project priority
  const filterItem = (priority) => {
    const newItem = projects.filter((newVal) => {
      return newVal.priority === priority;
      // comparing status for displaying data
    });
    setItem(newItem);
  };

  if (projects.length !== 0) {
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
                  <option value="ascending">Ascending A-Z</option>
                  <option value="descending">Descending Z-A</option>
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
