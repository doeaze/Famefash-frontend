// 'use client'

// import { useRouter } from 'next/navigation'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import { ArrowLeft, ArrowRight } from 'lucide-react'

// export default function ForgotPassword() {
//     const router = useRouter()

//     const handleEmailOTP = () => {
//         console.log('Send OTP to Email')
//         // router.push('/verify/email')
//     }

//     const handleMobileOTP = () => {
//         console.log('Send OTP to Mobile')
//         // router.push('/verify/mobile')
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         console.log('Proceed to reset')
//         // router.push('/reset-password')
//     }

//     return (
//         <div className="flex h-screen overflow-hidden">
//             {/* Left Image Section */}
//             <div className="relative w-1/2 hidden md:block h-full">
//                 <Image
//                     src="/login.svg"
//                     alt="Forgot Password Visual"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </div>

//             {/* Right Form Section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20 h-full">
//                 <form
//                     onSubmit={handleSubmit}
//                     className="max-w-md w-full mx-auto space-y-6 text-center"
//                 >
//                     {/* <h2 className="text-3xl font-bold text-gray-800"><ArrowLeft className="mr-2" size={18} />FORGOT PASSWORD</h2> */}
//                     <h2 className="flex items-center text-3xl font-bold text-gray-800">
//                         <Link href="/login">
//                             <ArrowLeft className="mr-6" size={18} />
//                         </Link>
//                         FORGOT PASSWORD
//                     </h2>


//                     {/* Email OTP Button */}
//                     <Button
//                         type="button"
//                         onClick={handleEmailOTP}
//                         className="w-full border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
//                     >
//                         OTP on Email
//                     </Button>

//                     {/* Mobile OTP Button */}
//                     <Button
//                         type="button"
//                         onClick={handleMobileOTP}
//                         className="w-full border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
//                     >
//                         OTP on Mobile No.
//                     </Button>

//                     {/* Go Back Link */}
//                     <div className="text-sm text-gray-500 underline cursor-pointer">
//                         {/* <Link href="/login">Go Back</Link> */}
//                         OR
//                     </div>

//                     {/* Submit Button */}
//                     {/* <Button
//             type="submit"
//             className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
//           >
//             BUTTON <ArrowRight className="ml-2" size={18} />
//           </Button> */}

//                     {/* Login Link */}
//                     <p className="text-sm text-center mt-2">
//                         Already have an account?{' '}
//                         <Link href="/login" className="text-black underline font-medium">
//                             Login
//                         </Link>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     )
// }

'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ForgotPassword() {
  const router = useRouter()

  const [step, setStep] = useState<'options' | 'emailInput' | 'mobileInput' | 'otpInput'>('options')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [method, setMethod] = useState<'email' | 'mobile' | null>(null)

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 'emailInput') {
      console.log('Sending OTP to email:', email)
      setMethod('email')
      setStep('otpInput')
    } else if (step === 'mobileInput') {
      console.log('Sending OTP to mobile:', mobile)
      setMethod('mobile')
      setStep('otpInput')
    }
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Verifying OTP:', otp)
    // You can verify the OTP here and redirect to reset password
    router.push('/reset-password')
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side Image */}
      <div className="relative w-1/2 hidden md:block h-full">
        <Image
          src="/login.svg"
          alt="Forgot Password Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20 h-full">
        <form
          onSubmit={step === 'otpInput' ? handleVerifyOtp : handleSendOtp}
          className="max-w-md w-full mx-auto space-y-6 text-center"
        >
          {/* Header */}
          <h2 className="flex items-center text-3xl font-bold text-gray-800">
            <Link href="/login">
              <ArrowLeft className="mr-6" size={18} />
            </Link>
            FORGOT PASSWORD
          </h2>

          {/* Step 1: Choose Method */}
          {step === 'options' && (
            <>
              <Button
                type="button"
                onClick={() => setStep('emailInput')}
                className="w-full border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
              >
                OTP on Email
              </Button>

              <Button
                type="button"
                onClick={() => setStep('mobileInput')}
                className="w-full border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
              >
                OTP on Mobile No.
              </Button>

              <div className="text-sm text-gray-500 underline cursor-pointer">OR</div>
            </>
          )}

          {/* Step 2: Email Input */}
          {step === 'emailInput' && (
            <>
              <div className="text-left">
                <label className="block mb-1 text-sm font-semibold text-orange-600 uppercase">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
              >
                Send OTP <ArrowRight className="ml-2" size={18} />
              </Button>

              <div className="text-sm text-gray-500 underline cursor-pointer">
                <button type="button" onClick={() => setStep('options')}>
                  Go Back
                </button>
              </div>
            </>
          )}

          {/* Step 2: Mobile Input */}
          {step === 'mobileInput' && (
            <>
              <div className="text-left">
                <label className="block mb-1 text-sm font-semibold text-orange-600 uppercase">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
              >
                Send OTP <ArrowRight className="ml-2" size={18} />
              </Button>

              <div className="text-sm text-gray-500 underline cursor-pointer">
                <button type="button" onClick={() => setStep('options')}>
                  Go Back
                </button>
              </div>
            </>
          )}

          {/* Step 3: OTP Input */}
          {step === 'otpInput' && (
            <>
              <div className="text-left">
                <label className="block mb-1 text-sm font-semibold text-orange-600 uppercase">
                  Enter OTP {method === 'email' ? 'sent to your Email' : 'sent to your Mobile'}
                </label>
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            <Link href="/register/set-password" className="text-sm text-gray-500 underline cursor-pointer">
              <Button
                type="submit"
                className="w-full bg-[#d9673f] hover:bg-[#c2552d] text-white text-sm tracking-widest"
              >
                Verify OTP <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>

              <div className="text-sm text-gray-500 underline cursor-pointer">
                <button type="button" onClick={() => setStep(method === 'email' ? 'emailInput' : 'mobileInput')}>
                  Go Back
                </button>
              </div>
            </>
          )}

          {/* Login Link */}
          <p className="text-sm text-center mt-2">
            Already have an account?{' '}
            <Link href="/login" className="text-black underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
