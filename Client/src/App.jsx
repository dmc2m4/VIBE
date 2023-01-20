import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import FormSignUp from "./components/FormSignUp/FormSignUp";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
// import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ShoppingCart />} />
        {/* <Route exact path="/home" component={Home}/> */}
        <Route path="/signup" element={<FormSignUp />} />
        {/* <Route exact path="/login" element={Login} /> */}
      </Routes>
    </div>
  );
};

export default App;
