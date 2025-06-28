'use client'

import Image from "next/image"
// import { CreditCard, Phone, Rocket, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useKeenSlider } from 'keen-slider/react';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import 'keen-slider/keen-slider.min.css';
import { useState, useEffect } from 'react';
import { AutoplayPlugin } from '@/lib/keen-autoplay';
import Link from "next/link"

const slides = [
  {
    image: '/home_main.svg',
    brand: 'PRADA',
    offer: 'Big Fashion Festival',
    discount: '50% - 80% off',
  },
  {
    image: '/home_main.svg',
    brand: 'GUCCI',
    offer: 'Mid Season Sale',
    discount: 'Flat 40% off',
  },
  {
    image: '/home_main.svg',
    brand: 'ZARA',
    offer: 'Style Reload',
    discount: 'Up to 70% off',
  },
];

export default function Home() {

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    // autoplay: true,
    created(s) {
      s.moveToIdx(0);
    },
  }, [AutoplayPlugin]);

  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 6, minutes: 5, seconds: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div ref={sliderRef} className="keen-slider h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide flex h-full items-center justify-between"
            >
              {/* Left Image */}
              <div className="relative w-1/2 h-full">
                <Image
                  src={slide.image}
                  alt="Hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Content */}
              <div className="w-1/2 h-full flex flex-col justify-center px-8 bg-[url('/hero-bg.svg')] bg-cover">
                <h1 className="text-6xl font-serif font-bold mb-4">{slide.brand}</h1>
                <p className="text-2xl text-gray-700 font-medium">{slide.offer}</p>
                <p className="text-3xl text-gray-800 font-bold mt-1 mb-6">{slide.discount}</p>
                <Button variant="outline" className="border-black rounded-none px-2 py-2 text-sm">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}

      </section>
      <div className="absolute bottom-[-3] left-1/2 transform -translate-x-1/2 flex gap-1">
        {slides.map((_, idx) => (
          <div key={idx} className="w-2 h-2 rounded-full bg-gray-300 hover:bg-black cursor-pointer"></div>
        ))}
      </div>

      {/* Categories Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-6 lg:px-20 pb-10 mt-12">
        {/* Left 2 stacked */}
        <div className="grid grid-rows-2 gap-4">
          {[
            { src: "/formal-woman.svg", label: "FORMAL WOMAN" },
            { src: "/formal-men.jpg", label: "FORMAL MEN" },
          ].map((item, i) => (
            <div key={i} className="relative h-full">
              <Image src={item.src} alt={item.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="relative h-220">
          <Image src="/casual.jpg" alt="Casual Style" fill className="object-cover" />
          <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">CASUAL STYLE</p>
          </div>
        </div>
      </section>

      {/* Best Dress Section */}
      <section className="px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          THE BEST DRESS FOR THE BEST WOMAN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="relative p-2">
              <Link href="/productdetail">
              <img src={`/w${i}.svg`} alt={`Product ${i}`} className="w-full h-120 object-cover" />
              </Link>
              <Badge className="absolute top-2 right-2 rounded-full px-4 py-2 bg-[#844416] text-white text-xs">
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
          <Link href="/productlist">
            <Button className="bg-[#844416] hover:bg-[#6e3612] text-white text-lg gap-2">
              SEE MORE
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
      {/* Deals Countdown Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 px-6 lg:px-20 py-16">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-2">Deals Of The Month</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button className="bg-[#d35400] hover:bg-[#b03e00] text-white px-6 py-2 mb-6">Buy Now</Button>
          <h3 className="text-lg font-medium mb-4">Hurry, Before It's Too Late!</h3>
          <div className="flex gap-3">
            {[['Days', timeLeft.days], ['Hr', timeLeft.hours], ['Mins', timeLeft.minutes], ['Sec', timeLeft.seconds]].map(([label, value]) => (
              <div key={label as string} className="bg-white shadow-md px-4 py-3 text-center rounded">
                <p className="text-2xl font-bold">{String(value).padStart(2, '0')}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src="/w1.svg" alt="Sale 1" width={400} height={500} className="object-cover w-full h-full" />
          <div className="absolute bottom-4 left-4 bg-white p-3 shadow-md">
            <p className="text-xs">01 — Spring Sale</p>
            <p className="text-lg font-semibold">30% OFF</p>
          </div>
        </div>
        <div className="md:col-span-1">
          <Image src="/w2.svg" alt="Sale 2" width={400} height={500} className="object-cover w-full h-full" />
        </div>
      </section>
      {/* Category Banners Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3  px-6 lg:px-0 py-10">
        {[
          {
            title: 'Casual Wear',
            image: '/w1.svg',
          },
          {
            title: '50% Summer Collection',
            image: '/w3.svg',
          },
          {
            title: 'Sports Ready',
            image: '/w3.svg',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative h-[300px] group cursor-pointer overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center text-center px-4">
              <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </section>


      {/* Best Outfit Section */}
      <section className="px-6 lg:px-20 py-10">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
          BEST OUTFIT FOR YOUR HAPPINESS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="relative p-2">
              <img src={`/h${i}.svg`} alt={`Product ${i}`} className="w-full h-120 object-cover" />
              <Badge className="absolute top-2 right-2 rounded-full px-4 py-2 bg-[#844416] text-white text-xs">
                ⭐ 4.8
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
          <Link href="/productlist">
            <Button className="bg-[#844416] hover:bg-[#6e3612] text-white text-lg gap-2">
              SEE MORE
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Tips Section */}
      <section className="relative w-full h-screen bg-gray-50 flex items-center justify-center px-6 lg:px-20">
        <Image
          src="/tips.svg"
          alt="Centered Fullscreen"
          width={1350}
          height={1350}
          className="object-contain"
          priority
        />
      </section>
      {/* Limited Edition Promo Banner */}
<section className="relative w-full h-[550px] mt-12">
  <img
    src="/bottom.svg" 
    alt="Limited Edition Offer"
    className="w-full h-full object-cover"
  />
  {/* <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-20 text-white">
    <p className="text-sm uppercase mb-1">Limited Edition</p>
    <h2 className="text-4xl font-bold mb-2">50% OFF</h2>
    <a
      href="#"
      className="text-sm underline hover:text-gray-300 transition-all duration-200"
    >
      see all collection
    </a>
  </div> */}
</section>

    </div>
  )
}
