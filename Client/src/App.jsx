import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import FormSignUp from "./components/FormSignUp/FormSignUp";
import ContainerForn from "./containers/containerForm/ContainerForn";
import Login from "./views/Login/Login";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route exact path="/home" component={Home}/> */}
        <Route path="/signup" element={<FormSignUp />} />
         <Route exact path="/login" element={<Login/>} /> 
      </Routes>
    </div>
  );
};

export default App;
