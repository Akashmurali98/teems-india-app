import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deptData: [],
  view: {},
};

const deptSlice = createSlice({
  name: "dept",
  initialState,
  reducers: {
    createDept: (state, action) => {
      state.deptData.push(action.payload);
    },
    deleteDept: (state, action) => {
      const idToDelete = action.payload;
      const index = state.deptData.findIndex((item) => item.id == idToDelete);
      state.deptData.splice(index, 1);
    },
    viewDept: (state, action) => {
      const idToView = action.payload;
      state.view = idToView;
    },
    listDept: (state, action) => {
      const data = action.payload;
      state.deptData = data;
    },
  },
});

export const { createDept, deleteDept, viewDept, listDept } = deptSlice.actions;
export const selectFormData = (state) => state.dept.deptData;
export const selectViewData = (state) => state.dept.view;

export default deptSlice.reducer;
