"use client";

import React from "react";
import { useSelectedItemsScroll } from "@/hooks/useSelectedItemsScroll";

interface SelectedItemType {
  name: string;
  image: string;
  affiliateLink: string;
  quantity: number;
  price: number | null;
  wiresNeeded?: number; // Added to track wire count
}

interface SelectedItemsProps {
  selectedItems: SelectedItemType[];
  totalPrice: number;
  updateQuantity: (name: string, quantity: number) => void;
}

export default function SelectedItems({
  selectedItems,
  totalPrice,
  updateQuantity,
}: SelectedItemsProps) {
  const { containerRef, scrollLeft, scrollRight } = useSelectedItemsScroll();

  // Calculate total number of wires needed
  const totalWiresNeeded = selectedItems.reduce((total, item) => {
    return total + (item.wiresNeeded ? item.wiresNeeded * item.quantity : 0);
  }, 0);

  return (
    <div className="sticky top-0 bg-[#000000e1] z-50 mb-8">
      <h2 className="text-sm bg-color pl-2 pt-[4px]">[SELECTED ITEMS]</h2>

      <div className="relative w-full">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute hover:cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-10 border border-color"
        >
          {"<"}
        </button>

        {/* Scrollable Items Container */}
        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto flex-nowrap border p-4 border-color custom-scrollbar scroll-smooth"
          style={{
            overflowX: "auto",
            scrollbarWidth: "thin",
            msOverflowStyle: "scrollbar",
          }}
        >
          {selectedItems.length === 0 ? (
            <p className="text-color text-xs ml-4">Click on items to add</p>
          ) : (
            selectedItems.map((item) => (
              <div
                key={item.name}
                className="border-color-items p-2 text-center flex flex-col items-center md:h-[150px] h-[100px] w-[250px] max-w-[250px] shrink-0 justify-between"
              >
                {/* Item Name */}
                <p
                  className="text-xs leading-tight text-color truncate w-full"
                  title={item.name}
                >
                  {item.name}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-1">
                  <button
                    onClick={() =>
                      item.quantity === 1
                        ? updateQuantity(item.name, 0)
                        : updateQuantity(item.name, item.quantity - 1)
                    }
                    className="px-2 bg-color text-black text-xs transition"
                  >
                    -
                  </button>
                  <span className="w-10 text-center bg-black text-slate-200 border-t border-b border-color text-xs">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                    className="px-2 bg-color text-black text-xs transition"
                  >
                    +
                  </button>
                </div>

                {/*  Wires Needed Per Item */}
                {/* {item.wiresNeeded !== undefined && (
                  <p className="text-xs text-gray-400">
                    <span className="font-bold">Wires Needed:</span>{" "}
                    {item.wiresNeeded * item.quantity}
                  </p>
                )} */}

                {/*  Price Calculation */}
                <p className="text-xs mt-1 text-color">
                  $
                  {item.price
                    ? (item.price * item.quantity).toFixed(2)
                    : "Loading..."}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute hover:cursor-pointer right-0 top-1/2 bg-button transform -translate-y-1/2 p-2 text-color hover:bg-opacity-90 z-10 border border-color"
        >
          {">"}
        </button>
      </div>

      {/* Total Price & Total Wires Needed */}
      <p className="mt-2 text-xs  mb-3.5">
        Total: ${totalPrice.toFixed(2)} | Jumper Wires Needed:{" "}
        {totalWiresNeeded}
      </p>

      {/* Amazon Affiliate Link */}
      <a
        href="https://www.amazon.com/gp/cart/view.html?tag=yourAffiliateID"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 border border-color bg-button text-color font-bold text-xs transition shadow-[2px_2px_0px_white] bg-black"
      >
        Buy Bundle at Amazon
      </a>
    </div>
  );
}
