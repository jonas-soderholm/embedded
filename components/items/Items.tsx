export const Items = {
  Microcontrollers: [
    {
      name: "Raspberry Pi Pico",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B09G1N3JLP?tag=yourAffiliateID",
      price: null,
      codeType: "C, C++, MicroPython (RP2040 SDK, Arduino IDE)",
    },
    {
      name: "Arduino Uno",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07XG2D7F3?tag=yourAffiliateID",
      price: null,
      codeType: "C, C++ (Arduino IDE)",
    },
    {
      name: "ESP32 (WiFi + Bluetooth)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B08HQ4JCNM?tag=yourAffiliateID",
      price: null,
      codeType: "C, C++ (Arduino IDE, ESP-IDF), MicroPython",
    },
    {
      name: "STM32 (High-Performance)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B08N5M6YPC?tag=yourAffiliateID",
      price: null,
      codeType: "C, C++ (STM32CubeIDE, Keil, PlatformIO)",
    },
  ],
  Breadboards: [
    {
      name: "BusBoard BB830 (Solderless Breadboard)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B01HRR7EBG?tag=yourAffiliateID",
      price: null,
    },
  ],
  Inputs: [
    {
      name: "16x2 LCD Display (Text Output)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B08GP6TT9S?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 12, // 12 wires if used without I2C adapter, 4 with I2C adapter
    },
    {
      name: "4x4 Keypad (User Input)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B08GP6TT9S?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 8,
    },
    {
      name: "I2C Adapter (Simplifies LCD Wiring)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B08GP7TT1Y?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 4,
    },
    {
      name: "Rotary Encoder (Turn Knob to Change Values)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07PZY1D9W?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 3,
    },
    {
      name: "LED Starter Kit (Includes Multiple Colors & Resistors)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07W4T9DY8?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 5, // Depending on how many LEDs used
    },
    {
      name: "Buzzer Module (Play Tones & Alerts)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07VFJHBD9?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 2,
    },
    {
      name: "SG90 Servo Motor (Rotating Motor)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07R2BNDMH?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 3,
    },
    {
      name: "5V Relay Module (Toggle Power On/Off)",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07XW1H8KN?tag=yourAffiliateID",
      price: null,
      wiresNeeded: 5,
    },
  ],
  "Cables & Wires": [
    {
      name: "USB-C Cable (For Arduino Uno R4)",
      image: "/images/cables/usb-c.jpg",
      affiliateLink: "https://www.amazon.com/dp/B08HQ4JCNM?tag=yourAffiliateID",
      price: null,
    },
    {
      name: "Micro USB Cable (For Raspberry Pi Pico, ESP32 & STM32 Blue Pill)",
      image: "/images/cables/micro-usb.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07PF4G3ZN?tag=yourAffiliateID",
      price: null,
    },
    {
      name: "Jumper Wires Kit (20 pcs, M-M, M-F, F-F)",
      image: "/images/cables/jumper-wires.jpg",
      affiliateLink: "https://www.amazon.com/dp/B07BTB3N3J?tag=yourAffiliateID",
      price: null,
    },
  ],
};

export const visualItems = [
  { item: "breadboard", image: "/mini-breadboard.jpg" },
  { item: "USB", image: "/usb-c.png" },
  { item: "Cables & Wires", image: "/jumper-wires.jpg" },
  { item: "Raspberry Pi", image: "/raspberry-pi.png" },
];
