import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "../components/GachaDemo.css";

const cardBackRed = "/card-back-3.png"; // 공통 뒷면 이미지

const capsuleImages = [
  "/capsule-red.png",
  "/capsule-blue.png",
  "/capsule-green.png",
  "/capsule-yellow.png",
];

const generateLoopingFountainPath = (direction = 1, steps = 40) => {
  const x = [],
    y = [];
  const h = 100 + Math.random() * 40 + (Math.random() > 0.5 ? 70 : 0);
  const w = 70 + Math.random() * 40;
  const angleDeg = -15 + Math.random() * 30;
  const angleRad = (angleDeg * Math.PI) / 180;
  const rollSteps = 15;

  for (let i = 0; i <= steps + rollSteps; i++) {
    const t = i / steps;
    if (i <= steps) {
      const yt = -4 * h * t * (1 - t);
      const xt = direction * w * Math.pow(t, 2) + Math.tan(angleRad) * yt;
      x.push(xt);
      y.push(yt);
    } else {
      const progress = (i - steps) / rollSteps;
      const lastX = x[steps];
      const wobble = Math.sin(progress * Math.PI * 4) * 5 * (1 - progress);
      x.push(lastX * (1 - progress) + wobble);
      y.push(Math.sin(progress * Math.PI * 2) * 4 * (1 - progress));
    }
  }
  return { x, y };
};

export default function GachaDemo() {
  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();
  const controls10 = useAnimation();
  const controls11 = useAnimation();
  const controls12 = useAnimation();
  const controls13 = useAnimation();
  const controls14 = useAnimation();
  const controls15 = useAnimation();
  const controls16 = useAnimation();
  const controls17 = useAnimation();
  const controls18 = useAnimation();
  const controls19 = useAnimation();
  const controls20 = useAnimation();
  const controls21 = useAnimation();
  const controls22 = useAnimation();
  const controls23 = useAnimation();
  const controls24 = useAnimation();
  const controls25 = useAnimation();
  const controls26 = useAnimation();
  const controls27 = useAnimation();
  const controls28 = useAnimation();
  const controls29 = useAnimation();

  const controlsList = [
    controls0,
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    controls7,
    controls8,
    controls9,
    controls10,
    controls11,
    controls12,
    controls13,
    controls14,
    controls15,
    controls16,
    controls17,
    controls18,
    controls19,
    controls20,
    controls21,
    controls22,
    controls23,
    controls24,
    controls25,
    controls26,
    controls27,
    controls28,
    controls29,
  ];

  const leverControls = useAnimation();
  const capsuleColors = ["red", "blue", "green", "yellow"];

  const [selectedColor, setSelectedColor] = useState(null);
  const [capsuleStage, setCapsuleStage] = useState("idle");
  const [showOpenCapsule, setShowOpenCapsule] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [flippedCardIndices, setFlippedCardIndices] = useState([]);
  const [cardQuestions, setCardQuestions] = useState([]);

  const capsulePosition = { bottom: "50px", left: "267px" };
  const openCapsulePosition = { bottom: "50px", left: "253px" };
  const openlightPosition = { bottom: "70px", left: "253px" };

  const questions = ["1등", "2등", "3등", "4등", "5등"];

  const rankFontSize = {
    "1등": "text-4xl",
    "2등": "text-3xl",
    "3등": "text-2xl",
    "4등": "text-xl",
    "5등": "text-lg",
  };

  const questionProbabilities = {
    "1등": "1%",
    "2등": "6%",
    "3등": "13%",
    "4등": "30%",
    "5등": "50%",
  };

  const handleReset = () => {
    setCapsuleStage("idle");
    setSelectedColor(null);
    setShowOpenCapsule(false);
    setShowCards(false);
    setFlippedCardIndices([]);
    setCardQuestions([]);
  };

  const getRandomRank = () => {
    const rand = Math.random() * 100;
    if (rand < 1) return "1등";
    else if (rand < 7) return "2등"; // 1% + 6%
    else if (rand < 20) return "3등"; // 1% + 6% + 13%
    else if (rand < 50) return "4등"; // +30%
    else return "5등"; // 나머지 50%
  };

  const handleLeverClick = async () => {
    await leverControls.start({
      rotate: [0, 360],
      transition: { duration: 0.8, ease: "easeInOut" },
    });
    const randomColor =
      capsuleColors[Math.floor(Math.random() * capsuleColors.length)];
    setSelectedColor(randomColor);
    setCapsuleStage("falling");
    setShowOpenCapsule(false);
    setShowCards(false);
    setFlippedCardIndices([]);
    setCardQuestions([]);
  };

  const handleCardClick = (index) => {
    if (flippedCardIndices.includes(index)) return;

    const newRank = getRandomRank();
    setFlippedCardIndices((prev) => [...prev, index]);

    setCardQuestions((prev) => {
      const updated = [...prev];
      updated[index] = newRank;
      return updated;
    });
  };

  const handleGlowComplete = () => {
    setCapsuleStage("done");
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected5 = shuffled.slice(0, 5); // ✅ 5개 선택
    setCardQuestions(selected5);
    setShowCards(true);
    setCardQuestions(["", "", "", "", ""]);
  };

  useEffect(() => {
    controlsList.forEach((controls, i) => {
      const goRight = Math.random() > 0.5;
      const direction = goRight ? 1 : -1;
      const { x, y } = generateLoopingFountainPath(direction, 40);
      controls.start({
        x,
        y,
        rotate: Array.from(
          { length: x.length },
          (_, idx) => idx * (360 / x.length) * direction
        ),
        transition: {
          duration: 1.5 + Math.random() * 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.05,
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (capsuleStage === "landed") {
      const timer = setTimeout(() => setCapsuleStage("opened"), 300);
      return () => clearTimeout(timer);
    }
  }, [capsuleStage]);

  useEffect(() => {
    if (capsuleStage === "opened") {
      const timer = setTimeout(() => setCapsuleStage("glow"), 500);
      return () => clearTimeout(timer);
    }
  }, [capsuleStage]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-10">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-green-700">🎰 상품 추천</h1>
      </div>

      {/* 반응형 레이아웃 */}
      <div className="relative w-full max-w-[600px] h-[640px] mb-10">
        {/* 캡슐 애니메이션 영역 (절대 위치 변경 안 함) */}
        <div className="absolute top-[180px] left-[70px] w-[400px] h-[200px] overflow-visible z-30">
          {controlsList.map((controls, i) => (
            <motion.img
              key={i}
              src={capsuleImages[i % capsuleImages.length]}
              alt={`capsule-${i}`}
              className="absolute w-12 h-12"
              style={{ bottom: 10, left: `50%`, transform: "translateX(-50%)" }}
              animate={controls}
            />
          ))}
        </div>

        <img
          src="/gacha-machine.png"
          alt="Gacha Machine"
          className="w-full h-full object-contain drop-shadow-xl absolute top-0 left-0 z-20"
        />

        <motion.img
          src="/lever.png"
          alt="레버"
          className="absolute w-[85px] h-[85px] top-[408px] left-[258px] z-40 cursor-pointer"
          animate={leverControls}
          onClick={handleLeverClick}
        />

        {capsuleStage === "falling" && selectedColor && (
          <motion.img
            src={`/capsule-${selectedColor}.png`}
            alt="Falling Capsule"
            className="absolute w-16 h-16 z-40"
            initial={{
              scale: 0.2,
              y: -110,
              x: 0,
              opacity: 1,
              rotate: -360,
            }}
            animate={{
              scale: 1,
              y: -45,
              x: 0,
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            style={{ bottom: "0px", left: capsulePosition.left }}
            onAnimationStart={() => {
              setTimeout(() => {
                setCapsuleStage("opened");
                setShowOpenCapsule(true);
              }, 750);
            }}
          />
        )}

        {showOpenCapsule &&
          ["opened", "glow", "done"].includes(capsuleStage) && (
            <motion.img
              src={`/capsule-${selectedColor}-open.png`}
              alt="Opened Capsule"
              className="absolute w-20 h-20 z-40"
              style={openCapsulePosition}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          )}

        {capsuleStage === "glow" && (
          <motion.div
            className="absolute z-[9999] w-[80px] h-[140px] rounded-full bg-gradient-to-t from-yellow-300 via-white to-transparent opacity-80 blur-md"
            style={{
              ...openlightPosition,
              transform: "translateX(-50%)",
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0.2, opacity: 0 }}
            animate={{ scaleY: [0.2, 1.2, 1.6], opacity: [0, 1, 0.9, 0.4] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onAnimationComplete={handleGlowComplete}
          />
        )}
      </div>

      {showCards && (
        <div className="absolute inset-0 z-[9999] flex flex-wrap justify-center items-center gap-4 px-4">
          {[0, 1, 2, 3, 4].map((i) => {
            const isFlipped = flippedCardIndices.includes(i);
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
                onClick={() => handleCardClick(i)}
              >
                <motion.div
                  className="w-52 h-72 rounded-xl shadow-xl cursor-pointer bg-white"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                  {/* 카드 앞면 */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-white border flex items-center justify-center p-4"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    {isFlipped && cardQuestions[i] && (
                      <div className="text-center">
                        <div
                          className={`font-bold ${
                            rankFontSize[cardQuestions[i]]
                          }`}
                        >
                          {cardQuestions[i]}
                        </div>
                        <div className="text-sm text-gray-500">
                          ({questionProbabilities[cardQuestions[i]]})
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 카드 뒷면 */}
                  <div
                    className="absolute w-full h-full"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={cardBackRed}
                      alt={`Card ${i}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ✅ 오른쪽 아래 고정된 다시 뽑기 버튼 */}
      {showCards && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <button
            onClick={handleReset}
            className="bg-white-500 text-white px-5 py-3 rounded-full shadow-lg text-lg hover:bg-red-600 transition"
          >
            🔁
          </button>
        </div>
      )}
    </div>
  );
}
