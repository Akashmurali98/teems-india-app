import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = sessionStorage.getItem("token");
  const status = token ? true : false;
  let auth = { token: status };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
