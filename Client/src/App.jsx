import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import FormNewProduct from "./components/FormNewProduct/FormNewProduct";
import Products from "./components/Products/Products";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login"

// import Login from "./components/Login/Login";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route exact path="/home" component={Home}/> */}
        <Route path="/signup" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} /> 
        <Route path="/createProduct" element={<FormNewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;
