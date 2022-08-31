import { Navigate, Route, Routes } from "react-router-dom";

// import { Login } from "../pages/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" />
      <Route path="/register" />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/checkout" />
      <Route path="/profile" />
      <Route path="/restaurants/:id" />
      <Route path="*" element={<Navigate to="/homepage" />} />
    </Routes>
  );
};
export default AppRoutes;
