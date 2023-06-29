import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
  //   viewData: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    listusers: (state, action) => {
      const data = action.payload;
      state.usersData = data;
    },
  },
});

export const { listusers } = formSlice.actions;

export const selectUsersData = (state) => state.role.listusers;
export default usersSlice.reducer;
