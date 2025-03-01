// "use client";

// import React from "react";

// interface ItemType {
//   name: string;
//   video: string;
// }

// interface ItemSelectionProps {
//   Items: ItemType[];
// }

// export default function ProductDisplay({ Items }: ItemSelectionProps) {
//   return (
//     <div className="mb-8 flex flex-wrap gap-10 p-6 pt-8 justify-center">
//       {Items.map((item, index) => (
//         <div
//           key={index}
//           className="relative border p-1 text-center flex flex-col justify-center items-center retro-shadow hover:bg-slate-900 transition-colors z-10 hover:cursor-s"
//         >
//           <div className="relative border p-1 text-center h-[380px] w-[380px] flex flex-col justify-center items-center  hover:bg-slate-900 transition-colors z-10">
//             {/* ✅ Absolute Header for Each Product */}
//             <div className="text-sm flex items-center gap-4 justify-center absolute top-[-20px] left-1/2 transform -translate-x-1/2">
//               <div className="header-color py-1 px-2 shadow-[6px_6px_0px_black]">
//                 [{item.name.toUpperCase()}]
//               </div>
//             </div>

//             {/* ✅ Product Image */}
//             <img src={item.video} alt={item.name} className="h-20 mx-auto" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

interface ItemType {
  name: string;
  video: string; // This should be a path to a video file
}

interface ItemSelectionProps {
  Items: ItemType[];
}

export default function ProductDisplay({ Items }: ItemSelectionProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-10 p-6 pt-8 justify-center">
      {Items.map((item, index) => (
        <div
          key={index}
          className="relative border p-1 text-center flex flex-col justify-center items-center retro-shadow hover:bg-slate-900 transition-colors z-10 hover:cursor-s"
        >
          <div className="relative border p-1 text-center h-[380px] w-[380px] flex flex-col justify-center items-center hover:bg-slate-900 transition-colors z-10">
            {/* ✅ Absolute Header for Each Product */}
            <div className="text-sm flex items-center gap-4 justify-center absolute top-[-20px] left-1/2 transform -translate-x-1/2">
              <div className="header-color py-1 px-2 shadow-[6px_6px_0px_black]">
                [{item.name.toUpperCase()}]
              </div>
            </div>

            {/* ✅ Centered Product Video (Auto-looped) */}
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-[200px] mx-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
