import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route exact path='/footer'
       element={<Footer/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
