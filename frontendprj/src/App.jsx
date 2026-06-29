import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/collection' element={<Collection/>} />
        <Route path = '/about' element={<About/>} />
        <Route path = '/cart' element={<Cart/>} />
        <Route path = '/login' element={<Login/>} />
        <Route path = '/orders' element={<Orders/>} />
        <Route path = '/place-order' element={<PlaceOrder/>} />
        <Route path = '/product/:productId' element={<Product/>} />
        <Route path = '/contact' element={<Contact/>} />
        </Routes>
    </div>
  );
};

export default App;
