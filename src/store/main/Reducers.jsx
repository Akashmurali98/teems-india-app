import { createSlice } from "@reduxjs/toolkit";
// import {}
const initialState = {
  loader: false,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    loaderOpening: (state, action) => {
      state.loader = action.payload;
      console.log("reducer", state.loader);
    },
  },
});

export const { loaderOpening, loaderClosing } = statusSlice.actions;
export const selectStatus = (state) => state.main.loader;
export default statusSlice.reducer;
