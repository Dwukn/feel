'use client'

import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  // Mouse position and ripples state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number, y: number }[]>([]);

  // Handle mouse movement to update mouse position state
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Create ripple effect on mouse enter
  const handleMouseEnterBlob = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setRipples([...ripples, { x: clientX, y: clientY }]);
  };

  // Blob style based on mouse position
  const getBlobStyle = (xFactor: number, yFactor: number) => {
    const scaleX = 1 + (mousePosition.x / window.innerWidth) * xFactor;
    const scaleY = 1 + (mousePosition.y / window.innerHeight) * yFactor;
    const borderRadius = 50 + (mousePosition.x / window.innerWidth) * 20;
    return { scaleX, scaleY, borderRadius };
  };

  return (
    <div
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-purple-100 via-white h-screen border-black"
      onMouseMove={handleMouseMove} // Track mouse position on move
    >
      {/* Paint blobs overlapping */}
      <div className="absolute inset-x-0 top-[-50px] z-0">
        {/* Blob 1 */}
        <div
          className="absolute w-[600px] h-[600px] left-48 -bottom-48 rounded-full
          bg-gradient-to-r from-blue-300 via-pink-300 to-indigo-300 opacity-70
          mix-blend-multiply animate-blob animation-delay-4000"
        />

      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About FEEL</h2>
        <div className="prose lg:prose-xl mx-auto">
          <p className="text-gray-600">
            Every year in September, we host "FEEL," Hyderabad's first and largest mental wellness event,
            attracting over 3,000 attendees. The event features art therapy workshops, open mic sessions,
            and guest speakers, fostering a safe space for emotional expression and community connection.
          </p>
          <p className="text-gray-600">
            At GoodMind.app, your mental wellness is our priority. We help you take that leap from
            illness to wellness, stress to bliss.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutSection;
