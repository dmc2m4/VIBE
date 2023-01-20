import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import FormSignUp from "./components/FormSignUp/FormSignUp";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={Landing} />
        {/* <Route exact path="/home" component={Home}/> */}
        <Route path="/signup" element={FormSignUp} />
        <Route exact path="/login" element={Login} />
      </Routes>
    </div>
  );
};

// const test1;
console.log(test2);

var test2; 


export default App;
