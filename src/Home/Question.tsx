import React, { useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import Quizcontrol from "./Quizcontrol";

export default function Question() {
  const questions = useAppSelector((state) => state.quiz);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  if (questions.length === 0) return <p>No questions available.</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col justify-center bg-gray-50 mx-auto p-6 max-w-3xl min-h-screen">
      <div className="bg-white shadow-md hover:shadow-lg p-6 border border-gray-200 rounded-xl transition-shadow duration-300">
        <h2 className="mb-3 font-semibold text-gray-700 text-2xl">
          প্রশ্ন {currentIndex + 1}:
        </h2>
        <p className="mb-6 text-gray-600 text-lg">{currentQuestion.question}</p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-3 border border-gray-300 hover:border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-800 text-left transition-colors duration-200"
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
