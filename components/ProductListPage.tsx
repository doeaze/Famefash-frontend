'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Rounded Red Hat",
    price: "$8.00",
    colors: ['#000000', '#ffffff', '#f87171'],
    image: "/w1.svg",
  },
  {
    id: 2,
    name: "Linen Blend Shirt",
    price: "$17.00",
    colors: ['#f9a8d4', '#d4d4d4', '#9ca3af'],
    image: "/w2.svg",
  },
  {
    id: 3,
    name: "Long-sleeve Coat",
    price: "$100.00",
    colors: ['#fef3c7', '#d1fae5', '#c7d2fe'],
    image: "/w3.svg",
  },
  // Add more mock products...
]

export default function ProductListPage() {
  const sizes = ['S', 'M', 'L', 'XL']
  const colors = ['#000000', '#ffffff', '#f87171', '#facc15', '#34d399', '#60a5fa', '#a78bfa', '#f472b6', '#f97316', '#22d3ee']

  return (
    <div className="px-6 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Filters */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">ALL PRODUCTS</h1>

        {/* Sizes */}
        <div>
          <p className="font-semibold mb-2">Size</p>
          <div className="flex gap-2 flex-wrap">
            {sizes.map(size => (
              <button key={size} className="border px-3 py-1 text-sm hover:bg-black hover:text-white">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <p className="font-semibold mb-2">Colors</p>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Prices */}
        <div>
          <p className="font-semibold mb-2">Prices</p>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>$0–$50</li>
            <li>$50–$100</li>
            <li>$100–$150</li>
            <li>$150–$200</li>
            <li>$200–$400</li>
          </ul>
        </div>

        {/* Brands */}
        <div>
          <p className="font-semibold mb-2">Brands</p>
          <ul className="text-sm space-y-1 text-gray-600">
            <li><input type="checkbox" /> Minimog</li>
            <li><input type="checkbox" /> Ratrolo Brook</li>
            <li><input type="checkbox" /> Lotus</li>
            <li><input type="checkbox" /> Vagabond</li>
            <li><input type="checkbox" /> Abby</li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <p className="font-semibold mb-2">Collections</p>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>All products</li>
            <li>Best sellers</li>
            <li>New arrivals</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Tags */}
        <div>
          <p className="font-semibold mb-2">Tags</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-600">
            <span className="px-2 py-1 border rounded">Fashion</span>
            <span className="px-2 py-1 border rounded">Hat</span>
            <span className="px-2 py-1 border rounded">Sneaker</span>
            <span className="px-2 py-1 border rounded">Sandal</span>
            <span className="px-2 py-1 border rounded">Denim</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="space-y-2 group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              <button className="absolute inset-0 bg-opacity-30 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                Quick View
              </button>
            </div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-sm text-gray-800">{product.price}</p>
            <div className="flex gap-1 mt-1">
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
