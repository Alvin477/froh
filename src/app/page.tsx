import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FROH - JUST A FROH',
  description: 'JUST A FROH',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
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
          <h1 className="text-8xl font-bold text-black tracking-normal main-title">JUST A FROH<span className="text-9xl">.</span></h1>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-12 flex gap-16 z-30">
          <a 
            href="https://t.me/FrohSol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl font-normal social-link"
            style={{ color: '#39FFA8' }}
          >
            Telegram
          </a>
          <a 
            href="https://x.com/justafroh?s=21&t=E_s0R05aW5V8nq5zhHnZAQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl font-normal social-link"
            style={{ color: '#39FFA8' }}
          >
            Twitter
          </a>
          <a 
            href="#" 
            className="text-3xl font-normal social-link"
            style={{ color: '#39FFA8' }}
          >
            Dexscreener
          </a>
        </div>
      </div>
    </main>
  )
}
