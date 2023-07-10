import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  viewData: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    listUser: (state, action) => {
      const data = action.payload;
      state.userData = data;
    },
    deleteUser: (state, action) => {
      const idToDelete = action.payload;
      const index = state.userData.findIndex((item) => item.id == idToDelete);
      state.userData.splice(index, 1);
    },
    createUser: (state, action) => {
      state.userData.push(action.payload);
    },
    editUser: (state, action) => {
      const data = action.payload;
      const idTOEdit = data.id;
      const index = state.userData.findIndex((item) => item.id == idTOEdit);
      console.log(index);
      state.userData.splice(index, 1, data);
    },
    viewUser: (state, action) => {
      const idToView = action.payload;
      state.viewData = idToView;
    },
  },
});

export const { listUser, deleteUser, createUser, editUser, viewUser } =
  userSlice.actions;

export const selectUserData = (state) => state.user.userData;
export const selectViewData = (state) => state.user.viewData;
export const overAllData = (state) => state

export default userSlice.reducer;
