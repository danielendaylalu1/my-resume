import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  acadamy: "",
  contact: {
    phone: "",
    email: "",
    address: "",
  },
  achivment: [],
  skills: [],
  summery: "",
  education: {
    schoolName: "",
    year: "",
  },
  expirinece: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resumeBuilder: (state, action) => {},
  },
});

export const { a } = resumeSlice.actions;

export default resumeSlice.reducer;
