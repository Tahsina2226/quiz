import React from "react";

export default function Quizcontrol({ onPrev, onNext }) {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      <button
        onClick={onPrev}
        className="bg-teal-200 hover:bg-teal-300 px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-teal-800 transition-colors duration-200"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="bg-red-300 hover:bg-red-400 px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-red-900 transition-colors duration-200"
      >
        Next
      </button>
    </div>
  );
}
