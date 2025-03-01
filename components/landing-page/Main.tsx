"use client";

import { useEffect, useState, useRef, use } from "react";
import AsciiArt from "../ASCII/Ascii";
import { Items } from "../items/Items";
import SelectedItems from "./SelectedItems";
import ItemSelection from "./ItemSelection";

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

  // Use one ref for the selected items container
  const selectedItemsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollLeft = () => {
    if (selectedItemsContainerRef.current) {
      selectedItemsContainerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (selectedItemsContainerRef.current) {
      selectedItemsContainerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    if (selectedItemsContainerRef.current) {
      setCanScrollLeft(selectedItemsContainerRef.current.scrollLeft > 0);
      setCanScrollRight(
        selectedItemsContainerRef.current.scrollLeft +
          selectedItemsContainerRef.current.clientWidth <
          selectedItemsContainerRef.current.scrollWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollContainer = selectedItemsContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [selectedItems]);

  const toggleItem = (item: any) => {
    setSelectedItems((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      return exists
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, { ...item, quantity: 1, price: item.price }];
    });
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity === 0) {
      setSelectedItems((prev) => prev.filter((item) => item.name !== name));
    } else {
      setSelectedItems((prev) =>
        prev.map((item) => (item.name === name ? { ...item, quantity } : item))
      );
    }
  };

  useEffect(() => {
    const total = selectedItems.reduce(
      (sum, item) => sum + (item.price || 0) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [selectedItems]);

  useEffect(() => {
    async function fetchPrices() {
      const updatedItems = selectedItems.map((item) => ({
        ...item,
        price: Math.floor(Math.random() * 20) + 5,
      }));
      setSelectedItems(updatedItems);
    }
    fetchPrices();
  }, []);

  return (
    <div className="p-2  text-slate-200 font-mono text-xs border border-gray-600">
      <div className="p-[2px]  text-slate-200 font-mono text-xs border border-gray-600">
        <div className="px-4  text-slate-200 font-mono text-xs border border-gray-600">
          <div className="flex justify-center">
            <AsciiArt />
          </div>

          <SelectedItems
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            updateQuantity={updateQuantity}
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            containerRef={selectedItemsContainerRef}
          />
          <ItemSelection
            Items={Items}
            toggleItem={toggleItem}
            selectedItems={selectedItems}
          />
        </div>
      </div>
    </div>
  );
}
