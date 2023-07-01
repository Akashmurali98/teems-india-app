import { configureStore } from "@reduxjs/toolkit";
import formCreate from "./Role/Reducers.js";
import formDept from "./Department/Reducers.js";
import status from "./main/Reducers.js";
import userDetails from "./Login/reducers.js";

const store = configureStore({
  reducer: {
    role: formCreate,
    dept: formDept,
    main: status,
    user: userDetails,
  },
});

export default store;
