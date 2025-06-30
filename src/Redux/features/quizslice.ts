import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

export const selectCount = (state: RootState) => state.quiz.value;

export default counterSlice.reducer;
