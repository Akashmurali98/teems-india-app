import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "../Components/Authentication/Login";
import PrivateRoutes from "../PrivateRoute";
import RoleList from "../Components/Roles/RolesList";
import CreateRole from "../Components/Roles/Create";
import Header from "../Shared/Header";
import View from "../Components/Roles/View";
import CreateDept from "../Components/Department/CreateDept";
import ViewDept from "../Components/Department/ViewDept";
import Loader from "../Shared/Loader";
import store from "../store/store.js";
import { selectStatus } from "../store/main/reducers";
import DepartmentList from "../Components/Department/Department";
import UserList from "../Components/Users/UsersList";
import CreateUser from "../Components/Users/Create";
import PageNotFound from "../Shared/PageNotFound";
import DynamicLayout from "../Components/Layout/DynamicLayout";

import "../assets/Css/layout.css";

const Layout = () => {
  const loaderStatus = useSelector(selectStatus);
  let token = sessionStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        {token && <Header />}
        {loaderStatus && <Loader></Loader>}
        <React.StrictMode>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/rolelist" element={<RoleList />} />
                <Route path="/rolelist/createrole" element={<CreateRole />} />
                <Route path="/rolelist/viewrole/:id" element={<View />} />
                <Route path="/departmentlist" element={<DepartmentList />} />
                <Route
                  path="/departmentlist/createdept"
                  element={<CreateDept />}
                />
                <Route
                  path="/departmentlist/viewdept/:id"
                  element={<ViewDept />}
                />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/userlist/create" element={<CreateUser />} />
                <Route path="/userlist/create/:id" element={<CreateUser />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/dynamicLayout" element={<DynamicLayout />} />
              </Route>
            </Routes>
          </Provider>
        </React.StrictMode>
      </BrowserRouter>
    </>
  );
};

export default Layout;
