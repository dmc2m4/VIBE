import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import FormNewProduct from "./components/FormNewProduct/FormNewProduct";
import Products from "./components/Products/Products";
import Register from "./views/Register/Register";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Login from "./views/Login/Login";
import Home from "../src/views/Home/Home";
import DetailCard from "./components/DetailCard/DetailCard";
import ContainerProduct from "./containers/containerProductHome/ContainerProduct";
import SettingsAccount from "./components/SettingsAccount/SettingsAccount"
// import Login from "./components/Login/Login";


const App = () => {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" ? <Navbar/>: null}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/createProduct" element={<FormNewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/productDetail/:id" element={<DetailCard/>} />
        <Route path="container" element={<ContainerProduct/>} />
        <Route path="/settings" element={<SettingsAccount/>} />
      </Routes>
    </div>
  );
};

export default App;
