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
    assigneeName: "Salman",
    status: "COMPLETED",
    priority: "LOW",
    type: "HIGH",
  },
];
function App() {
  const [item, setItem] = useState(projects);
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
            element={<ProjectBoard item={item} setItem={setItem} />}
          />
          <Route
            path="/createissue"
            element={<CreateIssue item={item} setItem={setItem} />}
          />
          <Route path="/createproject" element={<CreateProject />} />
        </Routes>
        <Outlet />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
