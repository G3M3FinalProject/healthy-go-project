import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import UserRegister from "../pages/register";
import { Restaurants } from "../pages/restaurants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" />
      <Route path="/profile" />
      <Route path="/restaurants/:id" element={<Restaurants />} />
      <Route path="*" element={<Navigate to="/homepage" />} />
    </Routes>
  );
};
export default AppRoutes;
