"use client";

import { useEffect, useState, useRef, use } from "react";
import AsciiArt from "../ASCII/Ascii";
import { Items } from "../items/Products";
import SelectedItems from "./SelectedItems";
import ItemSelection from "./ItemSelection";
import ProductDisplay from "./ProductArtDisplay";
import { ProductArt } from "../items/ProductArt";

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
    <div className="h-screen flex flex-col p-2 text-slate-200 font-mono text-xs box-border">
      {/* Outer Border Frame */}
      <div className="flex flex-col flex-grow p-[2px] border border-gray-600 box-border">
        {/* Inner Border Frame */}
        <div className="flex flex-col flex-grow px-4 border border-gray-600 box-border">
          <div className="flex justify-center">
            <AsciiArt />
          </div>

          {/* <SelectedItems
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            updateQuantity={updateQuantity}
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            containerRef={selectedItemsContainerRef}
          /> */}
          {/* <ItemSelection
            Items={Items}
            toggleItem={toggleItem}
            selectedItems={selectedItems}
          /> */}
          <ProductDisplay Items={ProductArt} />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col space-y-2">
<div className="w-[21rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
<div className="w-[20.5rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
<div className="w-[20rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
<div className="w-[19.5rem] h-[2px] bg-[#0308ff] ml-[-20rem]"></div>
</div>

{/* Right Side Lines (Tilting Opposite Direction) */
}
{
  /* <div className="flex flex-col space-y-2 items-end">
<div className="w-[19.5rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
<div className="w-[20rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
<div className="w-[20.5rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
<div className="w-[21rem] h-[2px] bg-[#0308ff] mr-[-20rem]"></div>
</div>
</div> 

<div className="flex  justify-center mb-4 mx-auto text-center p-2 mt-[-10px] border max-w-[800px] border-slate-200 md:text-[18px] text-[10px] shadow-[2px_2px_0px_gray]">
<div className="p-2 m-[-8px] border border-slate-200">
  To start learning embedded coding you could start with a Raspberry
  Pi 4 and a matching USB-C power cable for a simple kit to test with
  the built-in light. To add an LCD or other components, you'll need a
  breadboard and a jumper wires kit (from the cable section, 40+
  pieces, M-M, M-F, F-F) to connect everything properly.
</div>
</div> */
}
