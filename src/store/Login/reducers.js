import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentuser: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { currentuser } = userInfoSlice.actions;
export const selectUserDetails = (state) => state.userInfo.userDetails;
export default userInfoSlice.reducer;
