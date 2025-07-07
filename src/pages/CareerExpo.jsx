import React, { useState } from "react";
import FlipCard from "../components/FlipCard";

const sampleQuestions = [
  "GBSW의 슬로건은?",
  "ICT의 약자는?",
  "HTML의 역할은?",
  "CSS는 무엇을 제어할까?",
  "React는 어떤 프레임워크일까?",
];

export default function CareerExpo() {
  const [flippedCards, setFlippedCards] = useState([false, false, false, false, false]);

  const handleStart = () => {
    const newFlipped = [...flippedCards];
    newFlipped[0] = true;
    setFlippedCards(newFlipped);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🎓 랜덤 문제 맞추기</h1>

      {/* 카드 영역 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flippedCards.map((flipped, idx) => (
          <FlipCard
            key={idx}
            isFlipped={flipped}
            question={sampleQuestions[idx]}
          />
        ))}
      </div>

      {/* 버튼 */}
      <div className="mt-10 space-x-4">
        <button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow"
        >
          문제 풀기
        </button>
        <button
          onClick={() => setFlippedCards([false, false, false, false, false])}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded shadow"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
