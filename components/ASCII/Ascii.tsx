"use client";

const AsciiArt = () => {
  const asciiText = String.raw`
    ________  _______  __________  ____  __________     ______________    ____  ________________     __ __ __________
   / ____/  |/  / __ )/ ____/ __ \/ __ \/ ____/ __ \   / ___/_  __/   |  / __ \/_  __/ ____/ __ \   / //_//  _/_  __/
  / __/ / /|_/ / __  / __/ / / / / / / / __/ / / / /   \__ \ / / / /| | / /_/ / / / / __/ / /_/ /  / ,<   / /  / /   
 / /___/ /  / / /_/ / /___/ /_/ / /_/ / /___/ /_/ /   ___/ // / / ___ |/ _, _/ / / / /___/ _, _/  / /| |_/ /  / /    
/_____/_/  /_/_____/_____/_____/_____/_____/_____/   /____//_/ /_/  |_/_/ |_| /_/ /_____/_/ |_|  /_/ |_/___/ /_/   
                                                    
  `;

  return (
    <>
      <div className="flex-row">
        <pre
          className=" lg:text-[15px] md:text-[10px]  text-[5px] text-center"
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre",
            background: `linear-gradient(
                90deg,
                rgba(255, 100, 100, 0.7),  /* Light Red */
                rgba(255, 180, 100, 0.7),  /* Light Orange */
                rgba(255, 255, 150, 0.7),  /* Light Yellow */
                rgba(150, 255, 150, 0.7),  /* Light Green */
                rgba(150, 200, 255, 0.7),  /* Light Blue */
                rgba(200, 150, 255, 0.7),  /* Light Purple */
                rgba(255, 100, 100, 0.7)   /* Light Red again */
              )`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "50% auto", // Spread colors faster
            backgroundPosition: "0 100%", // Keep colors at full width
          }}
        >
          {asciiText}
        </pre>
        <div className="flex !text-slate-200 justify-center md:mt-[-22px] mt-[7px] text-center md:text-lg text-[11px]">
          Click on product to add, checkout the bundle to Amazon.
        </div>
        <div className="flex justify-center mb-4  mx-auto text-center p-2 mt-6 border max-w-[800px] border-slate-200 md:text-[15px] text-[10px]">
          To start learning embedded coding you could start with a Raspberry Pi
          4 and a matching USB-C power cable for a simple kit to test with the
          built-in light. To add an LCD or other components, you'll need a
          breadboard and a jumper wires kit (from the cable section, 40+ pieces,
          M-M, M-F, F-F) to connect everything properly.
        </div>
      </div>
    </>
  );
};

export default AsciiArt;
