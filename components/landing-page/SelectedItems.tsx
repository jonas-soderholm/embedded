"use client";

import React from "react";

interface SelectedItemType {
  name: string;
  image: string;
  affiliateLink: string;
  quantity: number;
  price: number | null;
}

interface SelectedItemsProps {
  selectedItems: SelectedItemType[];
  totalPrice: number;
  updateQuantity: (name: string, quantity: number) => void;
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function SelectedItems({
  selectedItems,
  totalPrice,
  updateQuantity,
  scrollLeft,
  scrollRight,
  canScrollLeft,
  canScrollRight,
  containerRef,
}: SelectedItemsProps) {
  return (
    <div className=" sticky top-0 bg-[#000000e1] z-50">
      <h2 className="text-sm bg-color pl-2">[SELECTED ITEMS]</h2>

      <div className="relative w-full">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black 
            bg-opacity-60 p-2 text-color hover:bg-opacity-90 z-10 border border-color "
          >
            {"<"}
          </button>
        )}

        {/* Scrollable Items Container using the passed ref */}
        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto flex-nowrap border p-4 border-color  scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {selectedItems.length === 0 ? (
            <p className="text-color text-xs">No items selected</p>
          ) : (
            selectedItems.map((item) => (
              <div
                key={item.name}
                className="border-color-items p-2 text-center flex flex-col items-center h-[150px] w-[250px] max-w-[250px] shrink-0 justify-between"
              >
                {/* <img src={item.image} alt={item.name} className="h-10" /> */}
                <p className="text-xs leading-tight text-color">{item.name}</p>
                {/* Custom Quantity Control */}
                <div className="flex items-center mt-1 ">
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
                  <div className="flex flex-row">
                    <span className="w-10 text-center bg-black text-slate-200 border-t border-b border-color text-xs">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.name, item.quantity + 1)
                      }
                      className="px-2 bg-color text-black text-xs transition"
                    >
                      +
                    </button>
                  </div>
                </div>
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
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-2
             text-color hover:bg-opacity-90 z-10 border border-color "
          >
            {">"}
          </button>
        )}
      </div>

      <p className="mt-2 text-xs font-bold mb-3.5">
        Total: ${totalPrice.toFixed(2)}
      </p>
      <a
        href="https://www.amazon.com/gp/cart/view.html?tag=yourAffiliateID"
        target="_blank"
        className="px-3 py-2 border border-color bg-button  text-color font-bold text-xs transition shadow-[2px_2px_0px_white] bg-black"
      >
        Buy Bundle at Amazon
      </a>
      <div className="bg-black h-2 mb-8"></div>
    </div>
  );
}
