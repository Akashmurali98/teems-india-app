import React from "react";
import Header from "../Shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import PrivateRoutes from "../PrivateRoute";
import Myapplication from "../Components/Myapplication";
import RolesList from "../Components/Roles/RolesList";
import CreateRole from "../Components/Roles/Create";
import View from "../Components/Roles/View";
import CreateDept from "../Components/Department/CreateDept";
import ViewDept from "../Components/Department/ViewDept";
import Loader from "../Shared/Loader";
import { Provider } from "react-redux";
import store from "../store/store.jsx";
import { useEffect, useState } from "react";
import { selectStatus } from "../store/main/Reducers";
import { useSelector } from "react-redux";
import DepartmentList from "../Components/Department/Department";
import UsersList from "../Components/Users/UsersList";
import CreateUsers from "../Components/Users/Create";
import UsersView from "../Components/Users/View";

const Layout = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setStatus(token ? true : false);
  });
  const loaderStatus = useSelector(selectStatus);
  console.log(loaderStatus);
  return (
    <>
      <BrowserRouter>
        <Header />
        {loaderStatus && <Loader></Loader>}
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/myapplication" element={<Myapplication />} />
              <Route path="/rolesList" element={<RolesList />} />
              <Route path="/rolesList/createRole" element={<CreateRole />} />
              <Route path="/rolesList/viewRole/:id" element={<View />} />
              <Route path="/departmentList" element={<DepartmentList />} />
              <Route
                path="/departmentList/createDept"
                element={<CreateDept />}
              />
              <Route
                path="/departmentList/viewDept/:id"
                element={<ViewDept />}
              />
              <Route path="/usersList" element={<UsersList />} />
              <Route path="/usersList/create" element={<CreateUsers />} />
              <Route path="/usersList/view" element={<UsersView />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default Layout;
