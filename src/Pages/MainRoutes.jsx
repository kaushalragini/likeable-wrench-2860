import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/ProductPage/product";
import { Category } from "../Components/ProductPage/Category";
import Checkout from "../Components/ProductPage/Checkout";
import BlankCart from "../Components/LoginAndNavbar/BlankCart";
import Account from "../Components/LoginAndNavbar/Account";
import BlankWishList from "../Components/LoginAndNavbar/BlankWishList";
import SettingPage from "../Components/LoginAndNavbar/SettingPage";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import Landing from "./Landing";
import { Cart } from "../Components/cartPage/Cartproduct";
const MainRoutes = () => {
  const location = "bangalore";
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path={`/:${location}`} element={<Home />} />
      <Route path={`/:${location}/:param`} element={<Category />} />
      <Route path={`/:${location}/:param/:para`} element={<Product />} />
      <Route path={`/:${location}/:param/:para/:id`} element={<Checkout />} />
      <Route path="/blank" element={<BlankCart />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<BlankWishList />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default MainRoutes;
