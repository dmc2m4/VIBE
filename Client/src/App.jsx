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
import { About } from "./views/About/About";
// import Login from "./components/Login/Login";
import Favorites from "./components/Favorites/Favorites";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Profile } from "./components/MyAccount/Profile";
import { Direction } from "./components/MyAccount/Direction";
import { ShoppingHistory } from "./components/MyAccount/ShoppingHistory";
import { Add } from "./components/MyAccount/Add";
import Shop from "./components/Shop/Shop";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import FrequentQuestions from "./components/FrequentQuestions/FrequentQuestions";


const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? null : <About/> &&  <FrequentQuestions/> && <Navbar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/createProduct" element={<FormNewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/productDetail/:id" element={<DetailCard />} />
        <Route path="carousel" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites/:email" element={<Favorites />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/profile" element={<Profile />} />
        <Route path="/myaccount/direction" element={<Direction/>}/>
        <Route path="/myaccount/shoppinghistory" element={<ShoppingHistory/>}/>
        <Route path="/myaccount/direction/add" element={<Add/>}/>
        <Route path="/createReview/:id" element={<ReviewForm/>}/>
        <Route path="/frequentquestion" element={<FrequentQuestions />}/>
      </Routes>
    </div>
  );
};

export default App;
