import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Import the useRouter hook


const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState<{ x: number, y: number }[]>([]);

    const router = useRouter(); // Get the router instance

    const handleClick = () => {
      router.push('/register'); // Redirect to the register page
    };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterBlob = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    console.log('Mouse entered at:', clientX, clientY);  // Debugging
    setRipples([...ripples, { x: clientX, y: clientY }]);
  };

  const getBlobStyle = (xFactor: number, yFactor: number) => {
    const scaleX = 1 + (mousePosition.x / window.innerWidth) * xFactor;
    const scaleY = 1 + (mousePosition.y / window.innerHeight) * yFactor;
    const borderRadius = 50 + (mousePosition.x / window.innerWidth) * 20;
    return { scaleX, scaleY, borderRadius };
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Paint effect background */}
      <div className="absolute inset-0 bg-purple-100">
        {/* top left purple blob */}
        <motion.div
          className="absolute w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] md:w-[400px] md:h-[400px] -left-24 top-0 rounded-full
            bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 opacity-70
            mix-blend-multiply animate-blob"
          style={{
            transformOrigin: 'center',
          }}
          animate={{
            x: (mousePosition.x / 100) * 2,
            y: (mousePosition.y / 100) * 2,
            scaleX: getBlobStyle(2, 1).scaleX,
            scaleY: getBlobStyle(2, 1).scaleY,
            borderRadius: `${getBlobStyle(2, 1).borderRadius}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          onMouseEnter={handleMouseEnterBlob} // Trigger ripple effect on mouse touch
        />

        {/* Ripples */}
        {ripples.map((ripple, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-purple-400 opacity-40"
            style={{
              left: ripple.x - 50, // Adjust the position for center alignment
              top: ripple.y - 50,
              width: 100,
              height: 100,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 4, // Increase the scale to create the ripple effect
              opacity: 0,
            }}
            transition={{
              duration: 1.5, // Duration of the ripple animation
              ease: 'easeOut',
            }}
          />
        ))}

        {/* top right yellow-pink blob */}
        <motion.div
          className="absolute w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] md:w-[400px] md:h-[400px] -right-24 top-0 rounded-full
            bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-500 opacity-70
            mix-blend-multiply animate-blob"
          style={{
            transformOrigin: 'center',
          }}
          animate={{
            x: (mousePosition.x / 100) * 2,
            y: (mousePosition.y / 100) * 2,
            scaleX: getBlobStyle(2, 1).scaleX,
            scaleY: getBlobStyle(2, 1).scaleY,
            borderRadius: `${getBlobStyle(2, 1).borderRadius}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          onMouseEnter={handleMouseEnterBlob} // Trigger ripple effect on mouse touch
        />

        {/* Ripples */}
        {ripples.map((ripple, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-purple-400 opacity-40"
            style={{
              left: ripple.x - 50, // Adjust the position for center alignment
              top: ripple.y - 50,
              width: 100,
              height: 100,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 4, // Increase the scale to create the ripple effect
              opacity: 0,
            }}
            transition={{
              duration: 1.5, // Duration of the ripple animation
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Paint drips */}
        <div className="absolute top-0 left-0 w-full h-16
          bg-[linear-gradient(180deg,transparent_0%,transparent_50%,rgba(139,92,246,0.2)_50%,transparent_100%)]
          bg-[length:40px_30px]" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen py-20">
        {/* Main title */}
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-[150px] sm:text-[100px] md:text-[80px] font-extrabold tracking-wider
            text-transparent stroke-purple-600 stroke-2 fill-none
            [text-shadow:4px_4px_0_#fff]">
            FEEL
          </h1>
        </div>

        {/* Register button */}
        <div className="mb-12">
      <button
        className="px-12 py-4 text-xl font-semibold text-white
          bg-gradient-to-r from-purple-600 to-pink-600 rounded-full
          hover:from-purple-700 hover:to-pink-700 transform hover:scale-105
          transition-all duration-300 shadow-lg"
        onClick={handleClick} // Trigger the redirect on click
      >
        Register Now
      </button>
    </div>

        {/* temp remove in prod */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
      </div>
    </div>
  );
};

export default HeroSection;
