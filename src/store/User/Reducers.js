import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    listUser: (state, action) => {
      state.userData = action.payload;
    },
    deleteUser: (state, action) => {
      const data = action.payload;
      const index = state.userData.findIndex(((item) => item.id == data.id ))
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
