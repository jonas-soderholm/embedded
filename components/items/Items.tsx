export const Items = {
  Microcontrollers: [
    {
      name: "Raspberry Pi Pico",
      image: "/images/microcontrollers/rasperry.png",
      affiliateLink: "https://amzn.to/43kz9Wz",
      price: 10,
      codeType: "C, C++, MicroPython (RP2040 SDK, Arduino IDE)",
    },
    {
      name: "Arduino Uno R3",
      image: "/images/microcontrollers/arduino.png",
      affiliateLink: "https://amzn.to/4kpDttR",
      price: 10,
      codeType: "C, C++ (Arduino IDE)",
    },
    {
      name: "ESP32 (WiFi + Bluetooth)",
      image: "/images/microcontrollers/esp32devkit.png",
      affiliateLink: "https://amzn.to/4hcexTQ",
      price: 10,
      codeType: "C, C++ (Arduino IDE, ESP-IDF), MicroPython",
    },
    {
      name: "STM32 Blue Pill (High-Performance)",
      image: "/images/microcontrollers/stm32bluepill.png",
      affiliateLink: "https://amzn.to/4iqRBRX",
      price: 10,
      codeType: "C, C++ (STM32CubeIDE, Keil, PlatformIO)",
    },
  ],
  Breadboards: [
    {
      name: "Breadboard (Solderless) - Fits All Listed Inputs with Careful Placement",
      image: "/images/breadboards/BPS-BB830_Top.jpg",
      affiliateLink: "https://amzn.to/3XqZa33",
      price: 8,
    },
  ],
  Inputs: [
    {
      name: "16x2 LCD Display (Text Output)",
      image: "/images/extras/lcd.png",
      affiliateLink: "https://amzn.to/4i27Nt5",
      price: 15,
      wiresNeeded: 12, // 12 wires if used without I2C adapter, 4 with I2C adapter
    },
    {
      name: "4x4 Keypad (User Input)",
      image: "/images/extras/keypad.png",
      affiliateLink: "https://amzn.to/3QHX1MA",
      price: 8,
      wiresNeeded: 8,
    },
    {
      name: "Rotary Encoder (Turn Knob to Change Values)",
      image: "/images/extras/rotary.png",
      affiliateLink: "https://amzn.to/4iis90E",
      price: 12,
      wiresNeeded: 3,
    },
    {
      name: "LED Starter Kit (Includes Multiple Colors & Resistors)",
      image: "/images/extras/led.png",
      affiliateLink: "https://amzn.to/4iiq19a",
      price: 10,
      wiresNeeded: 5, // Depending on how many LEDs used
    },
    {
      name: "Buzzer Module (Play Tones & Alerts)",
      image: "/images/extras/buzzer.png",
      affiliateLink: "https://amzn.to/43mUVJC",
      price: 7,
      wiresNeeded: 2,
    },
    {
      name: "SG90 Servo Motor (Rotating Motor)",
      image: "/images/extras/motor.png",
      affiliateLink: "https://amzn.to/41FfuzG",
      price: 7,
      wiresNeeded: 3,
    },
    {
      name: "20Pcs Black Tactile Switches (Toggle Power On/Off)",
      image: "/images/extras/switch.png",
      affiliateLink: "https://amzn.to/4i3kUdk",
      price: 7,
      wiresNeeded: 5,
    },
  ],
  "Cables & Wires": [
    {
      name: "USB-A to USB-B Cable (For Arduino Uno R3)",
      image: "/images/cables/usb_A_B.png",
      affiliateLink: "https://amzn.to/4ievM82",
      price: null,
    },
    {
      name: "Micro USB Cable (For Raspberry Pi Pico, ESP32 & STM32)",
      image: "/images/cables/usb_micro.png",
      affiliateLink: "https://amzn.to/3Dg2W8m",
      price: null,
    },
    {
      name: "Jumper Wires Kit (20 pcs, M-M, M-F, F-F)",
      image: "/images/cables/jumper_cables.png",
      affiliateLink: "https://amzn.to/3Xq1GXk",
      price: null,
    },
  ],
};
