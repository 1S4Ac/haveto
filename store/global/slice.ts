import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Global {
  isLoading: boolean;
}

const initialState: Global = {
  isLoading: true,
};

const todosSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export default todosSlice.reducer;
export const { startLoading, stopLoading } = todosSlice.actions;
