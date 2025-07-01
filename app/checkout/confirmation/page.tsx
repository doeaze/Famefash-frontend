'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ConfirmationPage() {
    const products = [
        {
            name: 'WHITE CASUAL T-SHIRT',
            qty: 1,
            price: 'IDR 100.000',
            img: '/p1.svg',
            note: 'Please recheck the size before send to me :)',
        },
        {
            name: 'WHITE CASUAL T-SHIRT',
            qty: 1,
            price: 'IDR 100.000',
            img: '/p1.svg',
        },
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-20 py-10 gap-10">
            {/* LEFT */}
            <div>
                <h1 className="text-3xl font-bold mb-6">CONFIRMATION</h1>

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
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">✓</div>
                        <div className="text-xs">
                            <div className="font-semibold text-orange-600">Step 2</div>
                            <div>PAYMENT</div>
                        </div>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300" />
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-100 border text-xs flex items-center justify-center">🧾</div>
                        <div className="text-xs text-gray-500">
                            <div>Step 3</div>
                            <div>CONFIRMATION</div>
                        </div>
                    </div>
                </div>

                {/* Order number + status */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm text-gray-700">Order Number</p>
                        <p className="font-semibold">12345ASDFGHJ</p>
                    </div>
                    <span className="bg-red-100 text-red-600 text-xs px-4 py-1 rounded-full">
                        Waiting For Payment
                    </span>
                </div>

                {/* Payment Info */}
                <div className="mt-4 text-sm text-gray-700">
                    <p className="font-semibold mb-1">Payment Information</p>
                    <p>
                        Upon completing a purchase, you will receive a payment confirmation email.
                        This email will contain essential information about the items you have purchased
                        and the total amount that needs to be paid.
                    </p>
                </div>

                {/* Centered Button */}
                <div className="mt-10 flex justify-center">
                    <Link href="/checkout/success">
                        <Button className="bg-[#d9673f] hover:bg-[#c2552d] text-white px-8 py-2">
                            I ALREADY PAY
                        </Button>
                    </Link>
                </div>
            </div>

            {/* RIGHT */}
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
                                {item.note && (
                                    <p className="text-xs text-gray-400 mt-1">{item.note}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Price Summary */}
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
                        <span>IDR 39.000</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2">
                        <span>Total</span>
                        <span>IDR 289.000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
