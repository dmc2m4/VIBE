import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import FormNewProduct from "./components/FormNewProduct/FormNewProduct";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "../src/views/Home/Home";
import DetailCard from "./components/DetailCard/DetailCard";
import ContainerProduct from "./containers/containerProductHome/ContainerProduct";
import Slider from "./components/Carousel/Carousel";
import About from "./views/About/About";
// import Login from "./components/Login/Login";
import Favorites from "./components/Favorites/Favorites";
import Filters from "./components/Filters/Filters";


const App = () => {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" ? <Navbar/>: null}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createProduct" element={<FormNewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/productDetail/:id" element={<DetailCard/>} />
        <Route path="carousel" element={<Slider/>} />
        <Route path="imagen" element={<About/>} />
        <Route path="/favorites/:email" element={<Favorites/>} />
        <Route path="/filters" element={<Filters/>} />
      </Routes>
    </div>
  );
};

export default App;
