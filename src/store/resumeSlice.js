import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  acadamy: "",
  contact: {
    phone: "",
    email: "",
    address: "",
  },
  achievement: [],
  skills: [],
  summery: "",
  education: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resumeBuilder: (state, action) => {
      state.name = action.payload.name;
      state.acadamy = action.payload.acadamy;
      state.contact = action.payload.contact;
      state.summery = action.payload.summery;
      state.skills = action.payload.skills;
      state.achievement = action.payload.achievement;
      state.education = action.payload.education;
    },
  },
});

export const { resumeBuilder } = resumeSlice.actions;

export default resumeSlice.reducer;
