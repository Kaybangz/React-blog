import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import BlogPages from "./pages/BlogPages/Index";
import Home from "./pages/Home/Index";

const App = () => {
  return (
    <div>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPages />} /> 
      </Routes>
    </div>
    <footer className="main__footer">
        <h2>&copy;Built by Kaybangz</h2>
      </footer>
    </div>
  );
};

export default App;
