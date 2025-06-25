"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = {
  Category: ["Shop All", "Blouses & Top", "Pants", "Dresses & Jumpsuits", "Outwear & Jackets", "Pullovers", "Tees", "Shorts & Skirts"],
  Featured: ["New In", "Modiweek", "Plus Size", "Best Seller"],
  More: ["Bundles", "Occasion Wear", "Matching Set", "Suiting"],
}

export default function CollectionMenu({ show }: { show: boolean }) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
        show ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="bg-white shadow-xl border w-[920px] px-10 py-8 grid grid-cols-4 gap-10 rounded-md">
        {/* Columns 1–3: Text */}
        {Object.entries(categories).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">{title}</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {items.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-black transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 4: Images */}
        <div className="col-span-1 flex flex-col gap-8">
          <div className="relative w-full h-40">
            <Image src="/w1.svg" alt="Blouses" fill className="object-cover rounded-md" />
            <p className="absolute bottom-1 left-1 text-white text-sm bg-black bg-opacity-50 px-2 py-0.5 rounded-sm">Blouses</p>
          </div>
          <div className="relative w-full h-40">
            <Image src="/w2.svg" alt="Plus Size" fill className="object-cover rounded-md" />
            <p className="absolute bottom-1 left-1 text-white text-sm bg-black bg-opacity-50 px-2 py-0.5 rounded-sm">Plus Size</p>
          </div>
        </div>
      </div>
    </div>
  )
}
