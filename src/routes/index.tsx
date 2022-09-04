import { Navigate, Route, Routes } from "react-router-dom";

import { AboutUs } from "../pages/aboutus";
import { CheckOut } from "../pages/checkout";
import EditProfile from "../pages/editProfile";
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
      <Route path="/profile" element={<EditProfile />} />
      <Route path="/restaurants/:id" element={<Restaurants />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
export default AppRoutes;
