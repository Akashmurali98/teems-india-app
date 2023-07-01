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

export const { listusers } = usersSlice.actions;

export const selectUsersData = (state) => state.user.usersData;
export default usersSlice.reducer;
