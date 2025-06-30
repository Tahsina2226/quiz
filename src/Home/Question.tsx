import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { setAnswer } from "../Redux/features/quizSlice";
import Quizcontrol from "./Quizcontrol";

export default function Question() {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const questions = quiz.questions;
  const userAnswer = quiz.userAnswer;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  if (questions.length === 0) return <p>No questions available.</p>;

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = userAnswer[currentIndex];

  const handleOptionClick = (option: string) => {
    dispatch(setAnswer({ Questionindex: currentIndex, anser: option }));
  };

  return (
    <div className="flex flex-col justify-center bg-blue-50 mx-auto p-6 max-w-3xl min-h-screen">
      <div className="bg-white shadow-md hover:shadow-lg p-6 border border-gray-200 rounded-xl transition-shadow duration-300">
        <h2 className="mb-3 font-semibold text-gray-700 text-2xl">
          প্রশ্ন {currentIndex + 1}:
        </h2>
        <p className="mb-6 text-gray-600 text-lg">{currentQuestion.question}</p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-3 border rounded-md w-full text-left transition-all duration-200 ${
                selectedAnswer === option
                  ? "bg-green-500 text-white border-green-600"
                  : "bg-blue-100 hover:bg-blue-200 text-blue-900 border-blue-200 hover:border-blue-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <Quizcontrol onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
}
