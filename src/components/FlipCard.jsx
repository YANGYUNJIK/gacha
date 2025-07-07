import React from "react";
import "./FlipCard.css"; // 스타일 별도 분리

export default function FlipCard({ isFlipped, question }) {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* 카드 앞면 */}
        <div className="flip-card-front">
          <div className="w-full h-full flex items-center justify-center p-4 bg-white rounded-lg shadow">
            <p className="text-lg font-semibold">{question}</p>
          </div>
        </div>

        {/* 카드 뒷면 */}
        <div className="flip-card-back">
          <img
            src="/card-back.png"
            alt="Card Back"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
