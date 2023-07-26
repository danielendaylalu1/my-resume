import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isVisible: false,
  },
  reducers: {
    toogle: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toogle } = uiSlice.actions;
export default uiSlice.reducer;
