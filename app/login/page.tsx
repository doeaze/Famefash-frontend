'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || 'Login failed');
            }

            // Save token or user data (optional)
            localStorage.setItem('token', data.token);

            // Redirect to home
            router.push('/home');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Left Image Section */}
            <div className="relative w-1/2 hidden md:block h-full">
                <Image
                    src="/login.svg"
                    alt="Login Visual"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20 h-full">
                <form onSubmit={handleLogin} className="max-w-md w-full mx-auto space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">SIGN IN</h2>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    {/* Email Input */}
                    <div className="space-y-1">
                        <Label htmlFor="email" className="uppercase text-xs text-orange-600">
                            Email/Mobile No.
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border px-3 py-2 w-full"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <Label htmlFor="password" className="uppercase text-xs text-orange-600">
                            PASSWORD
                        </Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border px-3 py-2 pr-10 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex items-center text-sm text-gray-500 underline cursor-pointer">
                            <Link href="/forgotpassword">
                                Forgot Password
                            </Link>
                        </div>
                    </div>


                    {/* Divider */}
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <hr className="flex-grow border-gray-300" />
                        <span>Continue with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Login Buttons */}
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

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
                        disabled={loading}
                    >
                        {loading ? 'Signing In...' : 'SIGN IN'}
                        <ArrowRight className="ml-2" />
                    </Button>

                    {/* Register Link */}
                    <p className="text-sm text-center">
                        Don’t have an account?{' '}
                        <Link href="/register" className="underline font-semibold">
                            Register here
                        </Link>
                    </p>
                    <p className="text-sm text-center mt-2">
                        <span className="text-gray-600">Are you an admin? </span>
                        <Link href="/admin/login" className="underline font-semibold text-orange-600 hover:text-orange-800">
                            Login here
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}
