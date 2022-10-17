//Routing Componenents
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import React, { useState } from "react";

//Adding global theme
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/Global";

//importing components
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import CreateIssue from "./Components/CreateIssue/CreateIssue";
import CreateProject from "./Components/CreateProject/CreateProject";
import ProjectBoard from "./Components/ProjectBoard/ProjectBoard";

export const projects = [
  {
    projectName: "NodeJs",
    ownerName: "Abdul",
    startDate: "12/09/2022",
    endDate: "12/18/2022",
  },
];
export const issues = [
  {
    assigneeName: "John",
    desc: "asdasdad",
    issueType: "TASK",
    priority: "MEDIUM",
    projectName: "apiProject",
    storyPoint: "2",
    summary: "asdsad",
    tags: "#urgent #diy",
  },
  {
    assigneeName: "Abdul",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, mollitia? Sint, nam maxime?",
    issueType: "TASK",
    priority: "LOW",
    projectName: "nodeProject",
    storyPoint: "3",
    summary: "Lorem, ipsum dolor sit amet consectetur adipi",
    tags: "#urgent #diy",
  },
  {
    assigneeName: "Rahul",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, mollitia? Sint, nam maxime?",
    issueType: "BUG",
    priority: "MEDIUM",
    projectName: "nodeProject",
    storyPoint: "3",
    summary: "Lorem, ipsum dolor sit amet consectetur adipi",
    tags: "#urgent #diy",
  },
  {
    assigneeName: "Chris",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, mollitia? Sint, nam maxime?",
    issueType: "TASK",
    priority: "HIGH",
    projectName: "nodeProject",
    storyPoint: "3",
    summary: "Lorem, ipsum dolor sit amet consectetur adipi",
    tags: "#urgent #diy",
  },
];
function App() {
  const [item, setItem] = useState(issues);
  const [project, setProject] = useState(projects);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const theme = {
    colors: {
      primarybg: "#EAEAEA",
      secondarybg: "#B2B2B2",
      primaryColor: "#3C4048",
      secondaryColor: "#00ABB3",
    },
  };

  // //handler for setItem
  // const projectIssueHandler = ()=>{
  //   setItem(item )
  // }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route
            path="/"
            element={<ProjectBoard project={project} item={item} setItem={setItem} />}
          />
          <Route
            path="/createissue"
            element={<CreateIssue item={item} setItem={setItem} />}
          />
          <Route path="/createproject" element={<CreateProject project={project} setProject={setProject}/>} />
        </Routes>
        <Outlet />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
