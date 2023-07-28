import { configureStore } from "@reduxjs/toolkit";
import formCreate from "./Role/reducers.js";
import formDept from "./Department/reducers.js";
import status from "./main/reducers.js";
import userDetails from "./Login/Reducers.js";
import formUser from "./User/reducers.js";

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
