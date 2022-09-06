import { Navigate, Route, Routes } from "react-router-dom";

import { IUser, useAuthUserContext } from "../contexts/authUserContext";
import { AboutUs } from "../pages/aboutus";
import { CheckOut } from "../pages/checkout";
import EditProfile from "../pages/editProfile";
import Home from "../pages/home";
import { Login } from "../pages/login";
import UserRegister from "../pages/register";
import { Restaurants } from "../pages/restaurants";
import { Teste } from "../pages/restaurants/teste";
import { UserRequests } from "../pages/userRequests";

const AppRoutes = () => {
  const { user } = useAuthUserContext();

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/restaurants" element={<Restaurants />}>
        <Route path=":id" element={<Teste />} />
      </Route>

      {user && Object.keys(user as IUser).length !== 0 && (
        <>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/requests" element={<UserRequests />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
export default AppRoutes;
