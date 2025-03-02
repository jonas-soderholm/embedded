"use client";

import { useEffect, useState } from "react";

const AsciiArt = ({ speed = 0.5 }) => {
  const asciiTextPC = String.raw`
      ________  _______  __________  ____  __________     ______________    ____  ________________     __ __ __________
     / ____/  |/  / __ )/ ____/ __ \/ __ \/ ____/ __ \   / ___/_  __/   |  / __ \/_  __/ ____/ __ \   / //_//  _/_  __/
    / __/ / /|_/ / __  / __/ / / / / / / / __/ / / / /   \__ \ / / / /| | / /_/ / / / / __/ / /_/ /  / ,<   / /  / /   
   / /___/ /  / / /_/ / /___/ /_/ / /_/ / /___/ /_/ /   ___/ // / / ___ |/ _, _/ / / / /___/ _, _/  / /| |_/ /  / /    
/_____/_/  /_/_____/_____/_____/_____/_____/_____/   /____//_/ /_/  |_/_/ |_| /_/ /_____/_/ |_|  /_/ |_/___/ /_/   
 
  `;

  const asciiTextPhone = String.raw`
     ________  _______  __________  ____  __________  
     / ____/  |/  / __ )/ ____/ __ \/ __ \/ ____/ __ \  
   / __/ / /|_/ / __  / __/ / / / / / / / __/ / / / / 
  / /___/ /  / / /_/ / /___/ /_/ / /_/ / /___/ /_/ /  
/_____/_/  /_/_____/_____/_____/_____/_____/_____/  
  `;

  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const updateGradient = () => {
      setGradientPosition((prev) => (prev + speed) % 200);
      animationFrame = requestAnimationFrame(updateGradient);
    };

    animationFrame = requestAnimationFrame(updateGradient);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="flex flex-col items-center">
      <pre
        className="text-center font-extrabold overflow-x-auto sm:text-[18px] text-[12px]"
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
        <div className="hidden sm:block text-[8px] sm:text-[6.5px] md:text-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px]">
          {asciiTextPC}
        </div>

        <div className="block sm:hidden text-[8px]">{asciiTextPhone}</div>
      </pre>
      <div className="flex text-slate-200 justify-center text-center sm:text-[17px] text-[11px] mt-2">
        Click on product to add, checkout the bundle to Amazon.
      </div>
      <div className="flex justify-center border border-slate-200 max-w-[800px] p-[2px] text-center mt-4 sm:text-[15px] text-[10px] mx-4 mb-4">
        <div className="p-2 border border-slate-200">
          {`Microcontrollers power everyday gadgets like headphones and remotes.
          You could start embedded coding with just a microcontroller and USB
          power. All listed microcontrollers have a built-in light for quick
          code testing. If you add an LCD or other extras, add a breadboard and
          jumper wires. Have fun!`}
        </div>
      </div>
    </div>
  );
};

export default AsciiArt;

{
  /* <p>
Microcontrollers power everyday gadgets like headphones and remotes.
All you need to start embedded coding is a microcontroller and a
USB. Each microcontroller includes a built-in LED for quick coding
without extra setup. Add an LCD, sensors, motors, and other
components with a breadboard and Jumper Wires Kit. All listed
microcontrollers work on Windows, macOS, and Linux.
</p> */
}

{
  /* <div className="p-2 border border-slate-200">
Start embedded coding with a Raspberry Pi 4 + USB-C power. Test with
its built-in light. For LCD or extras, use a breadboard + jumper wires
(M-M, M-F, F-F).
</div> */
}
