import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentuser: (state, action) => {
      const data = action.payload;
      state.userDetails = data.roles[0];
    },
  },
});

export const { currentuser } = userInfoSlice.actions;
export const selectUserDetails = (state) => state.userInfo.userDetails;
export default userInfoSlice.reducer;
