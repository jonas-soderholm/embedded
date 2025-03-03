"use client";

import { useEffect, useState } from "react";
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
