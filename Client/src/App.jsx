import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./views/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import LandingView from "./views/Landing/LandingView";
function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route exact path='/footer'
       element={<Home/>}/>
       <Route exact path="/landing"
       element={<LandingView/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
