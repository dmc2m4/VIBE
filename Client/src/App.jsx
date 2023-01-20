import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
function App() {
  return (
    <div className="App">
      <ShoppingCart/>
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
