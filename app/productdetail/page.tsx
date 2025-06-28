'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus, ShoppingCart, Heart, Badge ,Truck,RefreshCw} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
const thumbnails = ['/p6.svg', '/p2.svg', '/p3.svg', '/p4.svg', '/p5.svg']

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')
  const [activeTab, setActiveTab] = useState('details')

  return (
    <>
      <div className="px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image src="/p1.svg" alt="Product" width={600} height={600} className="rounded" />
            <div className="flex gap-2 mt-4">
              {thumbnails.map((src, idx) => (
                <Image key={idx} src={src} alt="Thumb" width={80} height={80} className="rounded border" />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <p className="text-sm text-gray-500 uppercase">Man T-Shirt</p>
            <h1 className="text-2xl md:text-3xl font-semibold">WHITE CASUAL T-SHIRT</h1>
            <div className="flex items-center gap-2 mt-2">
              <del className="text-gray-400">INR 200.000</del>
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs">50%</span>
            </div>
            <p className="text-xl font-bold text-red-600 mt-1">INR 100.000</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin.
              Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus.
            </p>

            {/* Sizes */}
            <div className="mt-4 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-1 border text-sm ${
                    size === selectedSize ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border px-2 py-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={16} />
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>
              <Button className="bg-[#c2552d] hover:bg-[#a8441d] text-white rounded-none px-8 flex items-center gap-2">
                ADD TO CART <ShoppingCart size={18} />
              </Button>
              <button className="border p-2 rounded-full hover:bg-gray-100">
                <Heart size={20} />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 space-y-2 text-sm border-t pt-4">
              <div className="flex gap-2 items-center">
                <Truck size={30} />
                <span>
                  <strong>Free Delivery</strong> &nbsp;
                  <a href="#" className="underline text-blue-600 text-xs">
                    Enter your postal code for Delivery Availability
                  </a>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <RefreshCw size={30} />
                <span>
                  <strong>Return Delivery</strong> &nbsp;
                  <span className="text-xs text-gray-600">Free 30 Days Delivery Returns.</span> &nbsp;
                  <a href="#" className="underline text-blue-600 text-xs">Details</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mt-10 flex gap-10 text-sm text-gray-600 uppercase tracking-wide">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-2 ${activeTab === 'details' ? 'border-b-2 border-black font-semibold text-black' : ''}`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab('spec')}
            className={`pb-2 ${activeTab === 'spec' ? 'border-b-2 border-black font-semibold text-black' : ''}`}
          >
            Specification
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-black font-semibold text-black' : ''}`}
          >
            Ratings & Reviews
          </button>
        </div>

        <div className="mt-6 text-sm space-y-4">
          {activeTab === 'details' && (
            <>
              <div>
                <h3 className="font-semibold">Product Details</h3>
                <p>Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem</p>
              </div>
              <div>
                <h3 className="font-semibold">Size & Fit</h3>
                <p>The model (height 5'8") is wearing a size S</p>
              </div>
              <div>
                <h3 className="font-semibold">Material & Care</h3>
                <p>100% cotton<br />Machine Wash</p>
              </div>
            </>
          )}

          {activeTab === 'spec' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">General</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Brand: ClassicWear</li>
                  <li>Gender: Men</li>
                  <li>Occasion: Casual</li>
                  <li>Fit: Regular Fit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Fabric & Care</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Material: 100% Cotton</li>
                  <li>Care: Machine Wash, Do not bleach</li>
                  <li>GSM: 180</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Dimensions</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Length: Regular</li>
                  <li>Size Worn by Model: M</li>
                  <li>Model Height: 5'8"</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="font-semibold">Ratings & Reviews</h3>
              <div className="space-y-4 mt-2">
                <div className="border p-4 rounded">
                  <p className="font-medium">John D.</p>
                  <p className="text-yellow-500">★★★★☆</p>
                  <p className="text-gray-600 mt-1">Great quality and fits perfectly. Highly recommend!</p>
                </div>
                <div className="border p-4 rounded">
                  <p className="font-medium">Sara M.</p>
                  <p className="text-yellow-500">★★★★★</p>
                  <p className="text-gray-600 mt-1">Very stylish and comfortable. Would buy again.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-semibold text-start mb-6">
          THE BEST DRESS FOR THE BEST WOMAN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="relative p-2">
              <img src={`/w${i}.svg`} alt={`Product ${i}`} className="w-full h-120 object-cover" />
              <Badge className="absolute top-2 right-2 rounded-full px-6 py-3 bg-[#844416] text-white text-xs">
                ⭐ 4.5
              </Badge>
              <CardContent className="mt-2">
                <p className="text-xs text-gray-500">PRODUCT CATEGORY</p>
                <p className="text-sm font-medium">Product Name</p>
                <p className="text-sm text-gray-700">IDR XXX</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 pt-10 flex justify-start">
          <Button className="bg-[#844416] hover:bg-[#6e3612] text-white text-lg gap-2">
            SEE MORE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </section>
    </>
  )
}