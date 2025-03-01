"use client";

import React, { useRef } from "react";

interface ItemType {
  name: string;
  image: string;
  affiliateLink: string;
  price: number | null;
  codeType?: string;
}

interface ItemSelectionProps {
  Items: Record<string, ItemType[]>;
  toggleItem: (item: ItemType) => void;
  selectedItems: ItemType[];
}

export default function ItemSelection({
  Items,
  toggleItem,
  selectedItems,
}: ItemSelectionProps) {
  return (
    <>
      {Object.entries(Items).map(([category, categoryItems]) => {
        const containerRef = useRef<HTMLDivElement | null>(null);

        const scrollLeft = () => {
          if (containerRef.current) {
            console.log(`Scrolling left for ${category}`);
            containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
          }
        };

        const scrollRight = () => {
          if (containerRef.current) {
            console.log(`Scrolling right for ${category}`);
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        };

        return (
          <div key={category} className="mb-8">
            {/* Category Header */}
            <div className="text-sm flex items-center gap-4 justify-center">
              <div className="header-color py-1 mt-10 absolute retro-shadow-items px-2 z-40">
                [{category.toUpperCase()}]
              </div>
            </div>

            {/* Scrollable Row */}
            <div className="relative">
              {/* Left Scroll Button */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-2 text-color hover:bg-opacity-90 z-40 border border-color"
              >
                {"<"}
              </button>

              {/* Item List (Horizontal Scroll) */}
              <div
                ref={containerRef}
                className="flex flex-row gap-6 overflow-x-auto p-6 border-color-items pt-8 w-full custom-scrollbar mt-5"
                style={{ overflowX: "auto", scrollBehavior: "smooth" }}
              >
                {categoryItems.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => toggleItem(item)}
                    className={`cursor-pointer p-4 text-color border text-left w-[350px] h-[170px] min-w-[350px] flex flex-row items-center justify-center retro-shadow-items hover:bg-slate-900 transition-colors ${
                      selectedItems.some((i) => i.name === item.name)
                        ? "border-slate-500 bg-slate-900 bg-opacity-80"
                        : "border-slate-300 bg-slate-700"
                    }`}
                  >
                    {/* ✅ Image on Left */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-contain mr-4"
                    />

                    {/* ✅ Text Content on Right (Centered) */}
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-xs leading-tight">{item.name}</p>

                      {/* ✅ Show Code Type if Microcontroller */}
                      {item.codeType && (
                        <p className="text-xs text-gray-400">
                          <span className="font-bold">Code:</span>{" "}
                          {item.codeType}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-2 text-color hover:bg-opacity-90 z-40 border border-color"
              >
                {">"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
