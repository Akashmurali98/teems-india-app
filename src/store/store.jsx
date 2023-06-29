import { configureStore } from "@reduxjs/toolkit";
import formCreate from "./Role/Reducers.jsx";
import formDept from "./Department/Reducers.jsx";
import status from "./main/Reducers.jsx";

const store = configureStore({
  reducer: {
    role: formCreate,
    dept: formDept,
    main: status,
  },
});

export default store;
