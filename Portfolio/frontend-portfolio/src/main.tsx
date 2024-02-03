import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./page/Home.tsx";
import Experience from "./page/Experience.tsx";
import ContactUs from "./page/ContactUs.tsx";
import Project from "./page/Project.tsx";
import Login from "./page/Login.tsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
