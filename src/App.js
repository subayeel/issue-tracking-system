import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/Global";

import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";

import Sidebar from "./Components/SideBar/Sidebar"
import { HomeContainer } from "./Components/HomeComponent/Home.elements";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const theme = {
    colors: {
      primarybg: "#ECEFFF",
      secondarybg: "#FCFFDF",
      primaryColor: "#3F9DA7",
      brownBtnColor: "#835A3A",
    },
  };

  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />

      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          
          
        </Routes>
        <Outlet />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
