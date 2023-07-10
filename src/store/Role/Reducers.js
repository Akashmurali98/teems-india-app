import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roleData: [],
  viewData: [],
};

const formSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    createRole: (state, action) => {
      state.roleData.push(action.payload);
    },
    deleteRole: (state, action) => {
      const idToDelete = action.payload;
      const index = state.roleData.findIndex((item) => item.id == idToDelete);
      state.roleData.splice(index, 1);
    },
    viewRole: (state, action) => {
      const idToView = action.payload;
      console.log(idToView)
      state.viewData = idToView;
    },
    listRole: (state, action) => {
      const data = action.payload;
      state.roleData = data;
    },
  },
});

export const { createRole, deleteRole, viewRole, listRole } = formSlice.actions;
export const selectFormData = (state) => state.role.roleData;
export const selectViewData = (state) => state.role.viewData;

export default formSlice.reducer;
