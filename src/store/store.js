import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["resume/resumeBuilder"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["resume.skills", "Value"],
        // Ignore these paths in the state
        ignoredPaths: [`resume.skills`],
      },
    }),
});
