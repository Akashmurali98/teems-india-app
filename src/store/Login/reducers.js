import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentuser: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { currentuser } = userSlice.actions;
export const selectUserDetails = (state) => state.user.userDetails;
export default userSlice.reducer;
