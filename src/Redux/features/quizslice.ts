import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Store";
import { quizData } from "@/Home/Quizdata";

const initialState = quizData;

export const quizSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export default quizSlice.reducer;
//quizdata k ekane initial vabe set krse    eta r quiz data connected;
