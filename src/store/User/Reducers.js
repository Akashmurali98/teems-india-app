import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    listusers: (state, action) => {
      state.userData = action.payload;
    },
    deleteUser: (state, action) => {
      const index = action.payload;
      state.userData.splice(index, 1);
    },
    createUser: (state, action) => {
      state.userData.push(action.payload);
    },
    
  },
});

export const { listusers, deleteUser,createUser } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export default userSlice.reducer;
