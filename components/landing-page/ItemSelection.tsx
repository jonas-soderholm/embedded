// "use client";

// import React, { useRef } from "react";

// interface ItemType {
//   name: string;
//   image: string;
//   affiliateLink: string;
//   price: number | null;
//   wiresNeeded?: number;
//   codeType?: string;
//   quantity: number;
// }

// interface ItemSelectionProps {
//   Items: Record<string, ItemType[]>;
//   toggleItem: (item: Omit<ItemType, "quantity">) => void;
//   selectedItems: ItemType[];
// }

// export default function ItemSelection({
//   Items,
//   toggleItem,
//   selectedItems,
// }: ItemSelectionProps) {
//   const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   const setRef = (category: string) => (el: HTMLDivElement | null) => {
//     containerRefs.current[category] = el;
//   };

//   const scrollLeft = (category: string) => {
//     containerRefs.current[category]?.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = (category: string) => {
//     containerRefs.current[category]?.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {Object.entries(Items).map(([category, categoryItems]) => (
//         <div key={category} className="md:mb-8 mb-4">
//           <div className="md:text-sm text-[14px] flex items-center gap-4 justify-center">
//             <div className="header-color py-1 mt-10 absolute retro-shadow-items px-2 z-40">
//               [{category.toUpperCase()}]
//             </div>
//           </div>

//           <div className="relative">
//             <button
//               onClick={() => scrollLeft(category)}
//               className="absolute hidden sm:block hover:cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-40 border border-color"
//             >
//               {"<"}
//             </button>

//             <div
//               ref={setRef(category)}
//               className="flex flex-row md:gap-6 gap-4 overflow-x-auto md:p-6 p-5  md:pt-8 pt-6 border-color-items w-full custom-scrollbar mt-5 md:text-xs text-[10px] "
//               style={{ overflowX: "auto", scrollBehavior: "smooth" }}
//             >
//               {categoryItems.map((item) => (
//                 <div
//                   key={item.name}
//                   onPointerDown={() =>
//                     toggleItem(item)
//                   } /* Works for touch and mouse */
//                   className={`cursor-pointer md:p-4 px-2 text-color border text-left md:w-[350px] w-[200px] h-[170px] md:min-w-[350px] min-w-[200px] flex flex-row items-center justify-center retro-shadow-items md:hover:bg-slate-700 transition-colors ${
//                     selectedItems.some((i) => i.name === item.name)
//                       ? "border-slate-500 bg-slate-700 bg-opacity-80"
//                       : "border-slate-300 bg-slate-900"
//                   }`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-contain mr-4 md:h-[7rem] h-[5rem]"
//                   />

//                   <div className="flex flex-col items-start justify-center">
//                     <p className="leading-tight">{item.name}</p>

//                     {item.codeType && (
//                       <p className=" text-gray-400">
//                         <span className="font-bold">Code:</span> {item.codeType}
//                       </p>
//                     )}

//                     {item.wiresNeeded !== undefined && (
//                       <p className="flex-row text-gray-400">
//                         <span className="font-bold wire-color">
//                           Wires Needed: {item.wiresNeeded}
//                         </span>
//                       </p>
//                     )}

//                     <p className="text-gray-400">
//                       <span className="font-bold">Price:</span>{" "}
//                       {item.price !== null
//                         ? `$${item.price.toFixed(2)}`
//                         : "Not Available"}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => scrollRight(category)}
//               className="absolute hidden sm:block hover:cursor-pointer right-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-40 border border-color"
//             >
//               {">"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

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
  const isScrolling = useRef(false); // Tracks if the user is scrolling

  const setRef = (category: string) => (el: HTMLDivElement | null) => {
    containerRefs.current[category] = el;
  };

  const scrollLeft = (category: string) => {
    isScrolling.current = true; // Set scrolling to true
    containerRefs.current[category]?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
    setTimeout(() => (isScrolling.current = false), 100); // Reset after 100ms
  };

  const scrollRight = (category: string) => {
    isScrolling.current = true; // Set scrolling to true
    containerRefs.current[category]?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
    setTimeout(() => (isScrolling.current = false), 100); // Reset after 100ms
  };

  return (
    <>
      {Object.entries(Items).map(([category, categoryItems]) => (
        <div key={category} className="md:mb-8 mb-4">
          <div className="md:text-sm text-[14px] flex items-center gap-4 justify-center">
            <div className="header-color py-1 mt-10 absolute retro-shadow-items px-2 z-40">
              [{category.toUpperCase()}]
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollLeft(category)}
              className="absolute hidden sm:block hover:cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-40 border border-color"
            >
              {"<"}
            </button>

            <div
              ref={setRef(category)}
              className="flex flex-row md:gap-6 gap-4 overflow-x-auto md:p-6 p-5 md:pt-8 pt-6 border-color-items w-full custom-scrollbar mt-5 md:text-xs text-[10px]"
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
              onTouchStart={() => (isScrolling.current = false)} // Reset scrolling flag when touching starts
              onTouchMove={() => (isScrolling.current = true)} // Set scrolling flag when swiping
            >
              {categoryItems.map((item) => (
                <div
                  key={item.name}
                  onPointerDown={(e) => {
                    if (!isScrolling.current) {
                      e.preventDefault(); // Prevent touch selection
                      toggleItem(item);
                    }
                  }}
                  className={`cursor-pointer md:p-4 px-2 text-color border text-left md:w-[350px] w-[200px] h-[170px] md:min-w-[350px] min-w-[200px] flex flex-row items-center justify-center retro-shadow-items md:hover:bg-slate-700 transition-colors ${
                    selectedItems.some((i) => i.name === item.name)
                      ? "border-slate-500 bg-slate-700 bg-opacity-80"
                      : "border-slate-300 bg-slate-900"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain mr-4 md:h-[7rem] h-[5rem]"
                  />

                  <div className="flex flex-col items-start justify-center">
                    <p className="leading-tight">{item.name}</p>

                    {item.codeType && (
                      <p className="text-gray-400">
                        <span className="font-bold">Code:</span> {item.codeType}
                      </p>
                    )}

                    {item.wiresNeeded !== undefined && (
                      <p className="flex-row text-gray-400">
                        <span className="font-bold wire-color">
                          Wires Needed: {item.wiresNeeded}
                        </span>
                      </p>
                    )}

                    <p className="text-gray-400">
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
              className="absolute hidden sm:block hover:cursor-pointer right-0 top-1/2 transform -translate-y-1/2 bg-button p-2 text-color z-40 border border-color"
            >
              {">"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
