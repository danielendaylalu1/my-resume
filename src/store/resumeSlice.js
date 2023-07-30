import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  profession: "",
  contact: {
    phone: "",
    email: "",
    address: "",
  },
  achievement: {
    ach: [],
    year: [],
  },
  skills: [],
  summery: "",
  education: {
    edu: [],
    major: [],
    syear: [],
    eyear: [],
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resumeBuilder: (state, action) => {
      state.name = action.payload.name;
      state.profession = action.payload.profession;
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
