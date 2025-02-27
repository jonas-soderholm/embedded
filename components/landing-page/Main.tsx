"use client";

import { useEffect, useState, useRef } from "react";
import { items } from "../items/Items";

export default function Main() {
  const [selectedItems, setSelectedItems] = useState<
    {
      name: string;
      image: string;
      affiliateLink: string;
      quantity: number;
      price: number | null;
    }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const selectedItemsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Scroll functions
  const scrollLeft = () => {
    if (selectedItemsRef.current) {
      selectedItemsRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (selectedItemsRef.current) {
      selectedItemsRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  // Check if scrolling is possible
  const checkScroll = () => {
    if (selectedItemsRef.current) {
      setCanScrollLeft(selectedItemsRef.current.scrollLeft > 0);
      setCanScrollRight(
        selectedItemsRef.current.scrollLeft +
          selectedItemsRef.current.clientWidth <
          selectedItemsRef.current.scrollWidth
      );
    }
  };

  // Run checkScroll when items update or on resize
  useEffect(() => {
    checkScroll();
    const scrollContainer = selectedItemsRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [selectedItems]);

  // Toggle item selection (add or remove)
  const toggleItem = (item: any) => {
    setSelectedItems((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      return exists
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, { ...item, quantity: 1, price: item.price }];
    });
  };

  // Update quantity for selected items
  const updateQuantity = (name: string, quantity: number) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Fetch live prices from Amazon API (Replace with actual API call)
  useEffect(() => {
    async function fetchPrices() {
      const updatedItems = selectedItems.map((item) => ({
        ...item,
        price: Math.floor(Math.random() * 20) + 5, // Placeholder for actual API call
      }));
      setSelectedItems(updatedItems);
    }
    fetchPrices();
  }, []);

  // Calculate total price when items change
  useEffect(() => {
    const total = selectedItems.reduce(
      (sum, item) => sum + (item.price || 0) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [selectedItems]);

  return (
    <div className="p-4 bg-black text-green-300 font-mono text-xs">
      {/* Selected Items Section */}
      <div className="mb-4 p-3 sticky top-0 bg-black border-b border-green-600 z-50 shadow-md">
        <h2 className="text-sm font-semibold">[ SELECTED ITEMS ]</h2>

        {/* Wrapper for arrows and scrolling */}
        <div className="relative w-full">
          {/* Left Scroll Button (Hidden if at the start) */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-2 rounded-full text-green-400 hover:bg-opacity-90 z-10"
            >
              ⬅️
            </button>
          )}

          {/* Scrollable Items Container */}
          <div
            ref={selectedItemsRef}
            className="flex gap-2 overflow-x-auto flex-nowrap border-t border-green-600 pt-2 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {selectedItems.length === 0 ? (
              <p className="text-green-400 text-xs">No items selected</p>
            ) : (
              selectedItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-green-900 p-2 rounded-md text-center flex flex-col items-center h-[150px] w-[250px] max-w-[250px] shrink-0"
                >
                  <img src={item.image} alt={item.name} className="h-12 w-12" />
                  <p className="text-xs leading-tight">{item.name}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.name, parseInt(e.target.value))
                    }
                    className="w-10 text-center bg-black text-green-400 border border-green-500 rounded-sm text-xs"
                  />
                  <p className="text-xs">
                    💰 $
                    {item.price
                      ? (item.price * item.quantity).toFixed(2)
                      : "Loading..."}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Right Scroll Button (Hidden if at the end) */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-2 rounded-full text-green-400 hover:bg-opacity-90 z-10"
            >
              ➡️
            </button>
          )}
        </div>

        <p className="mt-2 text-xs font-bold mb-2">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <a
          href="https://www.amazon.com/gp/cart/view.html?tag=yourAffiliateID"
          target="_blank"
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md text-xs shadow-md transition"
        >
          Buy
        </a>
      </div>

      {/* Item Selection Section */}
      {Object.entries(items).map(([category, categoryItems]) => (
        <div key={category} className="mb-4">
          <h3 className="text-sm border-b border-green-600 pb-1 font-semibold flex items-center gap-2">
            [ {category.toUpperCase()} ]
          </h3>
          <div className="flex gap-2 overflow-x-auto flex-nowrap border-t border-green-600 pt-2 scrollbar-hide">
            {categoryItems.map((item) => (
              <div
                key={item.name}
                onClick={() => toggleItem(item)}
                className={`cursor-pointer p-2 border rounded-md shadow-sm text-center h-[200px] w-[250px] max-w-[250px] flex flex-col justify-center items-center ${
                  selectedItems.some((i) => i.name === item.name)
                    ? "border-green-500 bg-green-900 bg-opacity-80"
                    : "border-green-300"
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
    </div>
  );
}
