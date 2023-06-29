import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roleData: [],
  viewData: [],
};

const formSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    createdrole: (state, action) => {
      state.roleData.push(action.payload);
      console.log(4);
    },
    deleterole: (state, action) => {
      const idToDelete = action.payload;
      console.log(idToDelete);
      console.log(state.roleData);
      state.roleData = state.roleData.filter((item) => item.id !== idToDelete);
    },
    viewrole: (state, action) => {
      const idToView = action.payload;
      state.viewData = idToView;
    },
    listrole : (state,action) => {
      const data = action.payload
      state.roleData = data 
    }
   },
});

export const { createdrole, deleterole, viewrole,listrole } = formSlice.actions;

export const selectFormData = (state) => state.role.roleData;
export const selectViewData = (state) => state.role.viewData;
export default formSlice.reducer;
