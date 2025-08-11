import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    // Reduced number of stars (increased divisor from 10000 to 20000)
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5, // Reduced from 3+1 to 2+0.5
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.2, // Reduced from 0.5+0.5 to 0.3+0.2
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 2; // Reduced from 4 to 2
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.5, // Reduced from 2+1 to 1.5+0.5
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 20, // Increased delay from 15 to 20 for less frequent appearance
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 40 + "px", // Reduced from 50 to 40
            height: meteor.size * 1.5 + "px", // Reduced from 2 to 1.5
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s", // Added "s" unit
            animationDuration: meteor.animationDuration + "s",
            opacity: 0.6, // Added opacity to make meteors less bright
          }}
        />
      ))}
    </div>
  );
};
