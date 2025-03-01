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
    <>
      <div className="flex-row">
        <pre
          className="xl:text-[18px] lg:text-[12px] md:text-[10px] text-[3.5px] text-center font-extrabold"
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
        <div className="flex !text-slate-200 justify-center md:mt-[-5px] mt-[7px] text-center md:text-[17px] text-[11px]">
          Click on product to add, checkout the bundle to Amazon.
        </div>
        <div className="flex justify-center mb-4 text-center p-2 mt-6 border max-w-[800px] border-slate-200 md:text-[15px] text-[10px] mx-[11px] md:mx-auto">
          <div className="p-2 m-[-8px] border border-slate-200">
            Start embedded coding with a Raspberry Pi 4 + USB-C power. Test with
            its built-in light. For LCD or extras, use a breadboard + jumper
            wires (M-M, M-F, F-F).
          </div>
        </div>
      </div>
    </>
  );
};

export default AsciiArt;
