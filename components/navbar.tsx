"use client"

import { useState } from "react"
import CollectionMenu from "./CollectionMenu"
import { Search, User, ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"

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
          <Link href="/cartpage">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
