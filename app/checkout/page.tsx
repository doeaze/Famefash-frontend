'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import { Stepper } from "@/components/ui/stepper"; // Assume you've updated the custom stepper component

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-white px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left Form */}
      <div className="w-full lg:w-2/3">
        {/* Logo */}
        <h1 className="text-3xl font-serif mb-2">
          <span className="text-[#844416] font-bold">M</span>
          <span className="text-black font-medium">ODEVA</span>
        </h1>

        {/* Title */}
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">Checkout Form</h2>

        {/* Stepper */}
        <Stepper
          steps={[
            { title: "1", label: "PERSONAL INFO" },
            { title: "2", label: "SHIPPING DELIVERY" },
            { title: "3", label: "CONFIRMATION" },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        {/* Contact Info */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Contact Person</h3>

        <div className="space-y-4">
          <Input placeholder="Eg: John Doe" />
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="(+62)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+62">+62</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="111-2222-33333" className="w-full" />
          </div>
          <Input placeholder="Eg: example@example.com" />
        </div>

        {/* Address Info */}
        <h3 className="text-lg font-semibold mt-8 mb-2">Address Detail</h3>

        <div className="space-y-4">
          <Input placeholder="Eg: ABC Street 12A, West Java, Indonesia" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="--Choose Country--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indonesia">Indonesia</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="--Choose Province--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">Jakarta</SelectItem>
              </SelectContent>
            </Select>
            <Select >
              <SelectTrigger>
                <SelectValue placeholder="--Choose ZIP Code--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12345">12345</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="mt-8 bg-[#844416] hover:bg-[#6f3612] text-white text-sm px-6 py-3 uppercase">
          Continue to Shipping
        </Button>
      </div>

      {/* Right Order Summary */}
      <div className="w-full lg:w-1/3 bg-white border border-gray-200 p-6 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <div className="bg-[#f3f3f3] text-sm p-2 mb-4 text-[#844416] flex justify-between">
          <span>Hooray! You use promo code!</span>
          <span className="text-black cursor-pointer">X</span>
        </div>

        {[1, 2].map((item) => (
          <div key={item} className="flex items-start gap-4 mb-4">
            <Image
              src="/checkout.svg"
              alt="T-shirt"
              width={64}
              height={64}
              className="object-cover rounded"
            />
            <div>
              <p className="font-semibold text-sm">WHITE CASUAL T-SHIRT</p>
              <p className="text-sm">1 X IDR 100.000</p>
              <p className="text-xs text-gray-500">Please recheck the size before send to me :)</p>
            </div>
          </div>
        ))}

        <div className="text-sm space-y-2 border-t pt-4 mt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>IDR 300.000</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Voucher (50KDISCOUNT)</span>
            <span>IDR 50.000</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>IDR -</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total</span>
            <span>IDR 250.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}