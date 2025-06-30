import { createSlice } from "@reduxjs/toolkit";
import { quizData } from "@/Home/Quizdata";

const initialState = {
  questions: quizData,
  userAnswer: Array(quizData.length).fill(null),
};

export const quizSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { Questionindex, anser } = action.payload;
      state.userAnswer[Questionindex] = anser;
    },
  },
});

export const { setAnswer } = quizSlice.actions;
export default quizSlice.reducer;
