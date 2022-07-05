import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDataFlag: false,
};

export const personalDataSlice = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    setToTrue: (state, action) => {
      state.personalDataFlag = true;
    },

    defaultPersonalSettings: (state, action) => {
      state.personalDataFlag = false;
    },
  },
});

export const { setToTrue, defaultPersonalSettings } = personalDataSlice.actions;

export default personalDataSlice.reducer;
