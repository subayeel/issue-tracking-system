import React, { useEffect, useState } from "react";

//import for image
import noproject from "../../Images/noproject.svg";
import { Img, ImgWrap } from "../Global";
import { issues } from "../../App";

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

  function displayIssue(issue) {
    return (
      <IssueCard
        projectName={issue.projectName}
        assigneeName={issue.assigneeName}
        status={issue.status}
        priority={issue.priority}
        type={issue.issueType}
        desc={issue.desc}
        summary={issue.summary}
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
    } else if (assigneeName !== "" && priority === "") {
      filterItem("", assigneeName);
    } else if (assigneeName === "" && priority !== "") {
      filterItem(priority, "");
    }
  }, [priority, assigneeName]);

  //function to filter based project priority and assigneeName
  const filterItem = (priority, assigneeName) => {
    if (priority && assigneeName) {
      const newItem = issues.filter((newVal) => {
        return (
          newVal.priority === priority && newVal.assigneeName === assigneeName
        );
        // comparing status for displaying data
      });
      setItem(newItem);
    } else if (priority && !assigneeName) {
      const newItem = issues.filter((newVal) => {
        return newVal.priority === priority;

        // comparing status for displaying data
      });
      setItem(newItem);
    } else if (assigneeName && !priority) {
      const newItem = issues.filter((newVal) => {
        return newVal.assigneeName === assigneeName;
        // comparing status for displaying data
      });
      setItem(newItem);
    }
  };

  //add project
  const addProject = () => {
    var newItem = [
      ...item,
      {
        assigneeName: "Apple",
        status: "DEVELOPMENT",
        priority: "HIGH",
        type: "HIGH",
      },
    ];
    setItem(newItem);
  };

  //reset filter
  const resetFilter = () => {
    document.getElementById("priorityId").value = "";
    document.getElementById("assigneeId").value = "";
    setPriority("");
    setAssigneeName("");
    setItem(issues);
  };
  if (item.length !== 0) {
    return (
      <>
        <ProjectBoardContainer>
          <ProjectBoardWrapper>
            <FilterContainer>
              <FilterWrapper>
                <Label>Filter:</Label>
                <SelectField id="priorityId" onChange={handleFilterChange}>
                  <option selected value="">
                    Priority filter
                  </option>
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </SelectField>

                <SelectField id="assigneeId" onChange={handleAssigneeChange}>
                  <option selected value="">
                    Assignee name filter
                  </option>
                  <option value="Abdul">Abdul</option>
                  <option value="John">John</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Chris">Chris</option>
                  <option value="Salman">Salman</option>
                </SelectField>
                <button onClick={resetFilter}>Reset Filter</button>
              </FilterWrapper>
            </FilterContainer>

            <HScrollWrapper>{item.map(displayIssue)}</HScrollWrapper>
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
                <button onClick={resetFilter}>Reset Filter</button>
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
