'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ShippingPage() {
  const [paymentMethod, setPaymentMethod] = useState('mastercard')
  const [upiID, setUpiID] = useState('')
  const [upiVerified, setUpiVerified] = useState(false)

  const products = [
    {
      name: 'WHITE CASUAL T-SHIRT',
      price: 'IDR 100.000',
      qty: 1,
      img: '/p1.svg',
      note: 'Please recheck the size before send to me :)',
    },
    {
      name: 'WHITE CASUAL T-SHIRT',
      price: 'IDR 100.000',
      qty: 1,
      img: '/p1.svg',
    },
  ]

  const handleUPIChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpiID(e.target.value)
    setUpiVerified(!!e.target.value && e.target.value.includes('@')) // Basic verification
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 py-10">
      {/* LEFT FORM */}
      <div>
        <h1 className="text-3xl font-bold mb-6">CHECKOUT FORM</h1>

        {/* Steps */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">✓</div>
            <div className="text-xs">
              <div className="font-semibold text-orange-600">Step 1</div>
              <div>PERSONAL INFO</div>
            </div>
          </div>
          <div className="w-8 h-0.5 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">📦</div>
            <div className="text-xs">
              <div className="font-semibold text-orange-600">Step 2</div>
              <div>PAYMENT</div>
            </div>
          </div>
          <div className="w-8 h-0.5 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-gray-400 text-xs flex items-center justify-center">☑</div>
            <div className="text-xs text-gray-500">
              <div>Step 3</div>
              <div>CONFIRMATION</div>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <h2 className="text-xl font-semibold mb-4">SHIPPING DELIVERY</h2>
        <div className="flex items-center gap-6 mb-6 flex-wrap">
          {['mastercard', 'visa', 'gpay', 'paypal'].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <Image src={`/${method}.svg`} alt={method} width={50} height={50} />
            </label>
          ))}
        </div>

        {/* Payment Details */}
        {paymentMethod === 'gpay' ? (
          <div>
            <label className="block mb-1 text-sm font-semibold">ENTER YOUR UPI ID</label>
            <input
              className="border w-full px-4 py-2"
              type="text"
              placeholder="Eg: john@upi"
              value={upiID}
              onChange={handleUPIChange}
            />
            {upiVerified && (
              <p className="text-green-600 text-xs mt-1">✅ UPI ID Verified</p>
            )}
          </div>
        ) : (
          <form className="space-y-6 mt-6">
            <div>
              <label className="block mb-1 text-sm font-semibold">NAME ON CARD</label>
              <input className="border w-full px-4 py-2" type="text" placeholder="Eg: John Doe" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">CARD NUMBER</label>
              <input className="border w-full px-4 py-2" type="text" placeholder="Eg: 1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold">EXPIRY DATE</label>
                <input className="border w-full px-4 py-2" type="text" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold">CVV</label>
                <input className="border w-full px-4 py-2" type="password" placeholder="***" />
              </div>
            </div>
          </form>
        )}
        


        <Link href="/checkout/confirmation" className='w-full'>
          <Button className=" bg-[#d9673f] hover:bg-[#c2552d] text-white px-6 py-2 mt-6">
            CONTINUE TO PAYMENT
          </Button>
        </Link>
      </div>

      {/* RIGHT SUMMARY */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">ORDER SUMMARY</h2>
        <div className="bg-[#f5f1ec] border border-gray-300 text-sm px-4 py-2 flex justify-between items-center mb-4">
          <span>Hooray! You use promo code!</span>
          <button className="text-gray-400 text-lg">×</button>
        </div>

        {/* Products */}
        <div className="space-y-4 mb-6">
          {products.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <Image src={item.img} alt={item.name} width={70} height={70} />
              <div>
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.qty} × {item.price}</p>
                {item.note && <p className="text-xs text-gray-400 mt-1">{item.note}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm border-t pt-4">
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
          <div className="flex justify-between font-bold pt-2">
            <span>Total</span>
            <span>IDR 250.000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
