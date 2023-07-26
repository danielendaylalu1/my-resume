import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    ui: uiReducer,
  },
});
