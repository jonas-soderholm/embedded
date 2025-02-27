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
    <pre
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre",
        background:
          "linear-gradient(90deg, red, orange, yellow, green, blue, purple, red)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "14px",
        backgroundSize: "50% auto", // Spread colors faster
        backgroundPosition: "0 100%", // Keep colors at full width
      }}
    >
      {asciiText}
    </pre>
  );
};

export default AsciiArt;
