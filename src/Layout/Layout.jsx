import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

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
import { selectStatus } from "../store/main/Reducers";
import DepartmentList from "../Components/Department/Department";
import UserList from "../Components/Users/UsersList";
import CreateUser from "../Components/Users/Create";
import UserView from "../Components/Users/View";

const Layout = () => {
  const [status, setStatus] = useState(false);
  const loaderStatus = useSelector(selectStatus);

  return (
    <>
      <BrowserRouter>
        <Header />
        {loaderStatus && <Loader></Loader>}
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
              <Route path="/userlist/view" element={<UserView />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default Layout;
