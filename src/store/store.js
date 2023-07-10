import { configureStore } from "@reduxjs/toolkit";
import formCreate from "./Role/Reducers.js";
import formDept from "./Department/Reducers.js";
import status from "./main/Reducers.js";
import userDetails from "./Login/Reducers.js";
import formUser from "./User/Reducers.js";

const store = configureStore({
  reducer: {
    userInfo: userDetails,
    role: formCreate,
    dept: formDept,
    main: status,
    user: formUser,
  },
});

export default store;
