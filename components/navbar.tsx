// 'use client';

// import React, { useState } from 'react';
// import { Search, User, Heart, ShoppingBag, X } from 'lucide-react';
// import CollectionMenu from "./CollectionMenu"

// const Navbar = () => {
//     const [showCollection, setShowCollection] = useState(false)
//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       {/* Promo Banner */}
//       <div className="bg-[#d86538] text-white text-sm text-center h-7 leading-7 flex justify-center items-center relative">
//         Discount 20% For New Member,&nbsp;
//         <span className="font-semibold uppercase">Only For Today!!</span>
//         <X className="absolute right-4 top-1.5 w-4 h-4 cursor-pointer" />
//       </div>

//       {/* Navbar Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 bg-white shadow-sm">
//         {/* Logo */}
//         <div className="text-xl md:text-2xl font-bold tracking-wider font-sans">
//           <span className="text-[#303030]">modima</span>
//           <span className="text-[#6a775d] align-super text-xs">l®</span>
//           <p className="text-[10px] tracking-widest text-gray-500 mt-1">women clothing</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700 mt-2 md:mt-0">
//           <a href="#" className="hover:text-black">Collection</a>
//           <a href="#" className="hover:text-black">New In</a>
//           <a href="#" className="hover:text-black">Modiweek</a>
//           <a href="#" className="hover:text-black">Plus Size</a>
//           <a href="#" className="hover:text-black">Sustainability</a>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-6 mt-3 md:mt-0">
//           <Search className="w-5 h-5 text-black cursor-pointer" />
//           <User className="w-5 h-5 text-black cursor-pointer" />
//           <Heart className="w-5 h-5 text-black cursor-pointer" />
//           <ShoppingBag className="w-5 h-5 text-black cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client"

import { useState } from "react"
import CollectionMenu from "./CollectionMenu"
import { Search, User, ShoppingCart, Heart } from "lucide-react"

const Navbar = () => {
  const [showCollection, setShowCollection] = useState(false)

  return (
    <div className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[#d65c2a] text-white text-sm text-center py-1">
        Discount 20% For New Member, <span className="font-semibold uppercase">Only For Today!!</span>
      </div>

      {/* Nav */}
      <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-[#2f2f2f]">modimal</span><span className="text-green-600">●</span>
          <p className="text-xs font-normal text-gray-500 -mt-1">women clothing</p>
        </div>

        {/* Nav Links */}
        <div className="relative flex gap-8 text-sm font-medium">
          <div
            onMouseEnter={() => setShowCollection(true)}
            onMouseLeave={() => setShowCollection(false)}
          >
            <button className="hover:text-[#d65c2a]">Collection</button>
            <CollectionMenu show={showCollection} />
          </div>
          <button>New In</button>
          <button>Modiweek</button>
          <button>Plus Size</button>
          <button>Sustainability</button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5" />
          <User className="w-5 h-5" />
          <Heart className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
