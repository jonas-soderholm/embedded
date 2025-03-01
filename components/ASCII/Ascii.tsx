"use client";

import { useEffect, useState } from "react";

const AsciiArt = ({ speed = 0.5 }) => {
  const asciiText = String.raw`
      ________  _______  __________  ____  __________     ______________    ____  ________________     __ __ __________
     / ____/  |/  / __ )/ ____/ __ \/ __ \/ ____/ __ \   / ___/_  __/   |  / __ \/_  __/ ____/ __ \   / //_//  _/_  __/
    / __/ / /|_/ / __  / __/ / / / / / / / __/ / / / /   \__ \ / / / /| | / /_/ / / / / __/ / /_/ /  / ,<   / /  / /   
   / /___/ /  / / /_/ / /___/ /_/ / /_/ / /___/ /_/ /   ___/ // / / ___ |/ _, _/ / / / /___/ _, _/  / /| |_/ /  / /    
/_____/_/  /_/_____/_____/_____/_____/_____/_____/   /____//_/ /_/  |_/_/ |_| /_/ /_____/_/ |_|  /_/ |_/___/ /_/   
  `;

  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const updateGradient = () => {
      setGradientPosition((prev) => (prev + speed) % 200); // Smooth looping
      animationFrame = requestAnimationFrame(updateGradient);
    };

    animationFrame = requestAnimationFrame(updateGradient);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Container for Lines and ASCII Art */}
      <div className="relative inline-block">
        {/* Left Side Lines - Start at ASCII Start, Extend Out */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <div className="w-[21rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
          <div className="w-[20.5rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
          <div className="w-[20rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
          <div className="w-[19.5rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
        </div>

        {/* ASCII Art (Centered) */}
        <pre
          className="relative lg:text-[18px] md:text-[10px] text-[5px] text-center font-extrabold z-10"
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre",
            background: `linear-gradient(
              90deg,
              rgba(255, 100, 100, 0.9),
              rgba(255, 180, 100, 0.9),
              rgba(255, 255, 150, 0.9),
              rgba(150, 255, 150, 0.9),
              rgba(150, 200, 255, 0.9),
              rgba(200, 150, 255, 0.9),
              rgba(255, 100, 100, 0.9)
            )`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            backgroundPosition: `${gradientPosition}% center`,
          }}
        >
          {asciiText}
        </pre>

        {/* Right Side Lines - Start at ASCII End, Extend Out */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 items-end">
          <div className="w-[19.5rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
          <div className="w-[20rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
          <div className="w-[20.5rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
          <div className="w-[21rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
        </div>
      </div>
      <div className="flex  justify-center mb-4 mx-auto text-center p-2 mt-[10px] border max-w-[800px] border-slate-200 md:text-[18px] text-[10px] shadow-[2px_2px_0px_gray]">
        <div className="p-2 m-[-8px] border border-slate-200">
          To start learning embedded coding you could start with a Raspberry Pi
          4 and a matching USB-C power cable for a simple kit to test with the
          built-in light. To add an LCD or other components, you'll need a
          breadboard and a jumper wires kit (from the cable section, 40+ pieces,
          M-M, M-F, F-F) to connect everything properly.
        </div>
      </div>
    </div>
  );
};

export default AsciiArt;
