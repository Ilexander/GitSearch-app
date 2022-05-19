import { createSlice } from "@reduxjs/toolkit";

interface WindowState {
  currentWindow: string;
}

const initialState: WindowState = {
  currentWindow: "search",
};

export const windowSlice = createSlice({
  name: "fetchSlice",
  initialState,
  reducers: {
    switchWindow(state, action) {
      state.currentWindow = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchWindow } = windowSlice.actions;

export default windowSlice.reducer;
