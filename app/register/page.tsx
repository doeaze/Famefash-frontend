'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Image */}
      <div className="relative w-1/2 hidden md:block h-full">
        <Image
          src="/login.svg"
          alt="Register Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20 h-full">
        <div className="max-w-md w-full mx-auto space-y-6">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800">CREATE ACCOUNT</h2>

          {/* Full Name */}
          <div className="space-y-1">
            <Label className="uppercase text-xs text-orange-600">Full Name</Label>
            <Input className="border px-3 py-2 text-sm" placeholder="John Doe" />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label className="uppercase text-xs text-orange-600">Email</Label>
            <Input className="border px-3 py-2 text-sm" placeholder="john@example.com" />
          </div>

          {/* Submit Button with Arrow */}
          <Link href='/register/set-password'>
            <Button className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest">
              BUTTON <ArrowRight className="ml-2" />
            </Button>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <hr className="flex-grow border-gray-300" />
            <span>Continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google and Facebook */}
          <div className="space-y-3">
            <Button className="w-full border border-gray-300 bg-white text-gray-800 flex items-center justify-center gap-2 hover:bg-white hover:text-gray-800">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Login with Google
            </Button>
            <Button className="w-full border border-gray-300 bg-white text-gray-800 flex items-center justify-center gap-2 hover:bg-white hover:text-gray-800">
              <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
              Login with Facebook
            </Button>
          </div>

          {/* Bottom Link */}
          <p className="text-sm text-center text-gray-700">
            Already have an account?{' '}
            <Link href="/login" className="underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
