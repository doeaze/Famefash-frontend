'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

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
    } catch (err: any) {
      console.error('❌ Registration error:', err.message);
      setError(err.message);
    } finally {
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
          <div className="space-y-1">
            <Label className="uppercase text-xs text-orange-600">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-3 py-2 text-sm"
              placeholder="••••••••"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500 font-medium">{error}</p>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
          >
            {loading ? 'Processing...' : (
              <>
                CONTINUE <ArrowRight className="ml-2" />
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
