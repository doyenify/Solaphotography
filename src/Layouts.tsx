import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../src/Pages/Home";
import Portfolio from "../src/Pages/Portfolio";
import About from "../src/Pages/About";
import Hello from "../src/Pages/Hello";

const Layout: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Container>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Portfolio" element={<Portfolio/>} /> 
          <Route path="About" element={<About/>} />
          <Route path="Hello" element={<Hello/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};
export default Layout;