"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <h1 className="text-2xl font-serif tracking-wide">
          <span className="text-[#e76f34] font-bold">M</span>
          <span className="text-black font-medium">ODEVA</span>
        </h1>
      </div>

      {/* Check icon */}
      <CheckCircle className="text-green-500 w-14 h-14 mb-6" />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">PAYMENT SUCCESS!</h1>

      {/* Description */}
      <p className="max-w-xl text-sm text-gray-600 mb-8">
        Lean back and relax, knowing our team is hard at work preparing and shipping your package swiftly. Feel free to browse our diverse product selection during this time – you might discover another item you'd like to add to your collection!
      </p>

      {/* Button */}
      <Link
        href="/"
        className="bg-[#d86538] hover:bg-[#b9552e] text-white px-10 py-3 uppercase text-sm font-semibold tracking-wide transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
