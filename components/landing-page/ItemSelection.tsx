"use client";

import React, { useRef } from "react";

interface ItemType {
  name: string;
  image: string;
  affiliateLink: string;
  price: number | null;
  wiresNeeded?: number;
  codeType?: string;
  quantity: number;
}

interface ItemSelectionProps {
  Items: Record<string, ItemType[]>;
  toggleItem: (item: Omit<ItemType, "quantity">) => void;
  selectedItems: ItemType[];
}

export default function ItemSelection({
  Items,
  toggleItem,
  selectedItems,
}: ItemSelectionProps) {
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setRef = (category: string) => (el: HTMLDivElement | null) => {
    containerRefs.current[category] = el;
  };

  const scrollLeft = (category: string) => {
    containerRefs.current[category]?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = (category: string) => {
    containerRefs.current[category]?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {Object.entries(Items).map(([category, categoryItems]) => (
        <div key={category} className="mb-8">
          <div className="text-sm flex items-center gap-4 justify-center">
            <div className="header-color py-1 mt-10 absolute retro-shadow-items px-2 z-40">
              [{category.toUpperCase()}]
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollLeft(category)}
              className="absolute hover:cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-40 border border-color"
            >
              {"<"}
            </button>

            <div
              ref={setRef(category)}
              className="flex flex-row gap-6 overflow-x-auto p-6 border-color-items pt-8 w-full custom-scrollbar mt-5"
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
            >
              {categoryItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => toggleItem(item)}
                  className={`cursor-pointer p-4 text-color border text-left w-[350px] h-[170px] min-w-[350px] flex flex-row items-center justify-center retro-shadow-items hover:bg-slate-700 transition-colors ${
                    selectedItems.some((i) => i.name === item.name)
                      ? "border-slate-500 bg-slate-700 bg-opacity-80"
                      : "border-slate-300 bg-slate-900"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain mr-4 h-[7rem]"
                  />

                  <div className="flex flex-col items-start justify-center">
                    <p className="text-xs leading-tight">{item.name}</p>

                    {item.codeType && (
                      <p className="text-xs text-gray-400">
                        <span className="font-bold">Code:</span> {item.codeType}
                      </p>
                    )}

                    {item.wiresNeeded !== undefined && (
                      <p className="text-xs flex-row text-gray-400">
                        <span className="font-bold wire-color">
                          Wires Needed: {item.wiresNeeded}
                        </span>
                      </p>
                    )}

                    <p className="text-xs text-gray-400">
                      <span className="font-bold">Price:</span>{" "}
                      {item.price !== null
                        ? `$${item.price.toFixed(2)}`
                        : "Not Available"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollRight(category)}
              className="absolute hover:cursor-pointer right-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-40 border border-color"
            >
              {">"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
