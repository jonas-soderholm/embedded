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
        <div key={category} className="mb-4 ">
          <h3 className="text-sm pb-1 font-semibold flex items-center gap-2 ">
            [ {category.toUpperCase()} ]
          </h3>
          <div className="flex gap-2 overflow-x-auto flex-nowrap border p-4 border-green-600 pt-4 scrollbar-hide">
            {categoryItems.map((item) => (
              <div
                key={item.name}
                onClick={() => toggleItem(item)}
                className={`cursor-pointer p-2 text-green-600 border text-center h-[200px] w-[250px] min-w-[150px] max-w-[250px] flex flex-col justify-center items-center ${
                  selectedItems.some((i) => i.name === item.name)
                    ? "border-slate-500 bg-slate-900 bg-opacity-80"
                    : "border-slate-300"
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
