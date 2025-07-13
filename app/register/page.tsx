'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirm, setConfirm] = useState('');
  const router = useRouter();

  const passwordRules = [
    { label: 'Minimum 8 characters', valid: password.length >= 8 },
    { label: 'Must contain at least 1 number', valid: /\d/.test(password) },
    {
      label: 'Must contain at least 1 capital case and 1 small case',
      valid: /[A-Z]/.test(password) && /[a-z]/.test(password),
    },
    { label: 'Must contain at least 1 symbol', valid: /[^A-Za-z0-9]/.test(password) },
  ];


  const handleRegister = async () => {
    setLoading(true);
    setError('');

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    try {
      const res = await fetch(`${API_BASE_URL}/api/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      console.log('✅ Registered:', data);
      router.push('/register/set-password');
    } catch (err) {
      if (err instanceof Error) {
        console.error('❌ Registration error:', err.message);
        setError(err.message);
      } else {
        console.error('❌ Unknown error:', err);
        setError('An unexpected error occurred.');
      }
    }
    finally {
      setLoading(false);
    }
  };

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
          <h2 className="text-4xl font-bold text-gray-800">CREATE ACCOUNT</h2>

          {/* Full Name */}
          <div className="space-y-1">
            <Label className="uppercase text-xs text-orange-600">Full Name</Label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border px-3 py-2 text-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label className="uppercase text-xs text-orange-600">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 text-sm"
              placeholder="john@example.com"
            />
          </div>

          {/* Password */}
          {/* <div className="space-y-1">
            <Label className="uppercase text-xs text-orange-600">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-3 py-2 text-sm"
              placeholder="••••••••"
            />
          </div> */}
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

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500 font-medium">{error}</p>
          )}

          {/* Rules */}
          {password.length > 0 && (
            <ul className="text-xs text-gray-700 space-y-1 mt-2">
              {passwordRules.map((rule, idx) => (
                <li key={idx}>
                  {rule.valid ? '✅' : '⚪'} {rule.label}
                </li>
              ))}
            </ul>
          )}


          {/* Submit Button */}
          <Button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
          >
            {loading ? 'Processing...' : (
              <>
                SIGN UP <ArrowRight className="ml-2" />
              </>
            )}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <hr className="flex-grow border-gray-300" />
            <span>Continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Logins */}
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
