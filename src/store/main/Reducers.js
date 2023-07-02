import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { setLoader } = statusSlice.actions;
export const selectStatus = (state) => state.main.loader;
export default statusSlice.reducer;
