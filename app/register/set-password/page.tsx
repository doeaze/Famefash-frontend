'use client';

import { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function SetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const passwordRules = [
    { label: 'Minimum 8 characters', valid: password.length >= 8 },
    { label: 'Must contain at least 1 number', valid: /\d/.test(password) },
    { label: 'Must contain at least 1 capital case and 1 small case', valid: /[A-Z]/.test(password) && /[a-z]/.test(password) },
    { label: 'Must contain at least 1 symbol', valid: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left image */}
      <div className="relative w-1/2 hidden md:block h-full">
        <Image
          src="/login.svg"
          alt="Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20 h-full">
        <div className="max-w-md w-full mx-auto space-y-6">
          <h2 className="text-4xl font-bold font-serif text-gray-800">
            CREATE ACCOUNT
          </h2>

          {/* Create Password */}
          <div className="space-y-1">
            <Label htmlFor="password" className="uppercase text-xs font-semibold text-orange-600">
              Create New Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <Label htmlFor="confirm" className="uppercase text-xs font-semibold text-orange-600">
              Confirm New Password
            </Label>
            <div className="relative">
              <Input
                id="confirm"
                type={showConfirm ? 'text' : 'password'}
                placeholder="********"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-1/2 right-3 -translate-y-1/2"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Rules */}
          <ul className="text-xs text-gray-700 space-y-1">
            {passwordRules.map((rule, idx) => (
              <li key={idx}>
                {rule.valid ? '✅' : '⚪'} {rule.label}
              </li>
            ))}
          </ul>

          {/* Button */}
          <Link href='/home'>
            <Button className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest">
              BUTTON <ArrowRight className="ml-2" />
            </Button>
          </Link>

          {/* Socials */}
          <div className="relative text-center my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative bg-white px-4 text-sm text-gray-500">
              Continue with
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full border text-sm rounded-md py-2 flex items-center justify-center gap-2">
              Register with Google <Image src="/google.svg" alt="Google" width={18} height={18} />
            </button>
            <button className="w-full border text-sm rounded-md py-2 flex items-center justify-center gap-2">
              Login with Facebook <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
            </button>
          </div>

          <p className="text-sm text-gray-700 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-black underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
