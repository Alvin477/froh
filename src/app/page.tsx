import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FROH - Crypto Meme Project',
  description: 'Welcome to FROH - The Friendly Frog Crypto Project',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Main Container */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Frog Image */}
        <div className="relative z-10 w-[500px] h-[500px] frog-container">
          <Image
            src="/img/frog.png"
            alt="FROH Frog"
            width={500}
            height={500}
            priority
            className="object-contain"
          />
        </div>

        {/* Wave Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] animate-wave">
          <Image
            src="/img/waves.png"
            alt="Wave Background"
            width={600}
            height={200}
            priority
            className="object-contain"
          />
        </div>

        {/* Hero Text */}
        <div className="absolute top-20 text-center z-20">
          <h1 className="text-8xl font-normal text-green-400 mb-4 animate-text tracking-wider">JUST A FROH</h1>
        </div>
      </div>
    </main>
  )
}
