import React, { useEffect, useState } from "react";

// Define white and gold star colors
const colors = ["#FFD700"];

// Star component with circular motion and self-rotation

const Star = ({ left, delay, color }) => (
  <svg
    className="absolute top-0 animate-ripple"
    style={{
      left: `${left}%`,
      animationDelay: `${delay}S`,
      fill: color,
      width: "1.1rem",
      height: "1.1rem",
    }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Main component to render all rotating ripple stars
const RippleStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 25;
    const newStars = Array.from({ length: starCount }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)], // Random color
      id: Math.random(),
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {" "}
      {/* Full-screen black background */}
      {stars.map((star) => (
        <Star
          key={star.id} // Unique key for React list
          left={star.left} // Pass horizontal position
          delay={star.delay} // Pass delay
          color={star.color} // Pass color
        />
      ))}
    </div>
  );
};

export default RippleStars;
