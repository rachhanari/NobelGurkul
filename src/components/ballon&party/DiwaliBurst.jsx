import React, { useEffect, useState } from "react";

const createSparkle = () => ({
  id: Math.random(),
  x: Math.random() * window.innerWidth,
  y: -20,
  speed: 2 + Math.random() * 4,
  color: `hsl(${Math.random() * 360}, 100%, 50%)`,
});

const createBoomShot = () => ({
  id: Math.random(),
  x: Math.random() * window.innerWidth,
  y: window.innerHeight,
  speed: 4 + Math.random() * 3,
  explodeHeight: 150 + Math.random() * 250,
  exploded: false,
  color: `hsl(${Math.random() * 360}, 100%, 50%)`,
});

const DiwaliFireworkRain = () => {
  const [sparkles, setSparkles] = useState([]);
  const [booms, setBooms] = useState([]);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setSparkles((prev) => [...prev, createSparkle()]);
    }, 80);

    const boomInterval = setInterval(() => {
      setBooms((prev) => [...prev, createBoomShot()]);
    }, 700);

    const anim = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((sparkle) => ({
            ...sparkle,
            y: sparkle.y + sparkle.speed,
          }))
          .filter((sparkle) => sparkle.y < window.innerHeight + 20)
      );

      setBooms((prev) =>
        prev
          .map((boom) => {
            if (!boom.exploded && boom.y < boom.explodeHeight) {
              return { ...boom, exploded: true };
            }
            return { ...boom, y: boom.y - boom.speed };
          })
          .filter((boom) => boom.y > -50)
      );
    }, 30);

    return () => {
      clearInterval(sparkleInterval);
      clearInterval(boomInterval);
      clearInterval(anim);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999]">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: "absolute",
            left: sparkle.x,
            top: sparkle.y,
            width: 3,
            height: 10,
            backgroundColor: sparkle.color,
            borderRadius: "2px",
            opacity: 0.8,
          }}
        />
      ))}
      {booms.map(
        (boom) =>
          boom.exploded && (
            <div
              key={boom.id}
              style={{
                position: "absolute",
                left: boom.x - 15,
                top: boom.y - 15,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${boom.color} 0%, transparent 70%)`,
                opacity: 0.9,
              }}
            />
          )
      )}
    </div>
  );
};

export default DiwaliFireworkRain;
