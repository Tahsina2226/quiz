import React from "react";
import { useAppSelector } from "../Redux/hooks";

export default function QuizSummary({
  currentIndex,
}: {
  currentIndex: number;
}) {
  const quiz = useAppSelector((state) => state.quiz);
  const questions = quiz.questions;
  const userAnswer = quiz.userAnswer;
  const total = questions.length;

  const correctCount = questions.filter(
    (q, i) => userAnswer[i] === q.correctAnswer
  ).length;

  const incorrectCount = userAnswer.filter(
    (answer, i) => answer !== null && answer !== questions[i].correctAnswer
  ).length;

  const progressPercent = ((currentIndex + 1) / total) * 100;

  return (
    <div className="space-y-2 mb-4">
      <div className="bg-gray-200 rounded-full w-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="text-gray-600 text-sm text-right">
        প্রশ্ন {currentIndex + 1} / {total}
      </p>

      <div className="flex justify-between mt-2 text-gray-700 text-sm">
        <p>
          ✅ Correct: {correctCount} / {total}
        </p>
        <p>❌ Incorrect: {incorrectCount}</p>
      </div>

      {currentIndex === total - 1 && (
        <p className="mt-4 font-semibold text-green-600 text-center">
          🎉 You've completed the quiz! Great job!
        </p>
      )}
    </div>
  );
}
