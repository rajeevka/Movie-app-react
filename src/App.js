import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import "./App.css";

const App = () => {
  
  return (
    <>
      <h1 className="header">HOOKED</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </>
  );
};

export default App;
