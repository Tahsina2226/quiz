import React from "react";

interface QuizControlProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function Quizcontrol({ onPrev, onNext }: QuizControlProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrev}
        className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-md text-gray-800 transition"
      >
        পূর্ববর্তী
      </button>
      <button
        onClick={onNext}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white transition"
      >
        পরবর্তী
      </button>
    </div>
  );
}
