import { Navigate, Route, Routes } from "react-router-dom";

import { CheckOut } from "../components/checkout";
import { AboutUs } from "../pages/aboutus";
import Home from "../pages/home";
import { Login } from "../pages/login";
import UserRegister from "../pages/register";
import { Restaurants } from "../pages/restaurants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/profile" />
      <Route path="/restaurants/:id" element={<Restaurants />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
export default AppRoutes;
