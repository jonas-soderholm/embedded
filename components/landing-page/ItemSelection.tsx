"use client";

import React from "react";

interface ItemType {
  name: string;
  image: string;
  affiliateLink: string;
  price: number | null;
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
      {Object.entries(Items).map(([category, categoryItems]) => (
        <div key={category} className="mb-8">
          {/* Header */}
          <div className="text-sm flex items-center gap-4 justify-center">
            <div className="header-color py-1 absolute shadow-[6px_6px_0px_black]">
              [{category.toUpperCase()}]
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto flex-nowrap p-6 border-color-items pt-8 scrollbar-hide ">
            {categoryItems.map((item) => (
              <div
                key={item.name}
                onClick={() => toggleItem(item)}
                className={`cursor-pointer p-2 text-color border text-center h-[200px] w-[250px] min-w-[150px] max-w-[250px] flex flex-col justify-center items-center retro-shadow hover:bg-slate-900 transition-colors   ${
                  selectedItems.some((i) => i.name === item.name)
                    ? "border-slate-500 bg-slate-900 bg-opacity-80"
                    : "border-slate-300 bg-slate-700 "
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 mx-auto"
                />
                <p className="text-xs leading-tight text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
