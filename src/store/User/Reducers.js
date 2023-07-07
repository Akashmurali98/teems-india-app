import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    listusers: (state, action) => {
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
  },
});

export const { listusers, deleteUser, creatseUser, editUser } =
  userSlice.actions;

export const selectUserData = (state) => state.user.userData;
export default userSlice.reducer;
