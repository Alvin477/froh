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
      <div className="relative w-full h-screen flex flex-col items-center justify-between py-8 px-4">
        {/* Hero Text */}
        <div className="text-center z-20 mt-8 md:mt-20">
          <h1 className="text-5xl md:text-8xl font-black text-black tracking-normal main-title">JUST A FROH<span className="text-6xl md:text-9xl">.</span></h1>
        </div>

        {/* Main Frog Image */}
        <div className="relative z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex-shrink-0">
          <Image
            src="/img/mainfrog.png"
            alt="FROH Frog"
            width={600}
            height={600}
            priority
            className="object-contain"
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-6 md:gap-16 z-30 mb-8">
          <a 
            href="https://t.me/FrohSol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-3xl font-normal social-link"
            style={{ color: '#39FFA8' }}
          >
            Telegram
          </a>
          <a 
            href="https://x.com/justafroh?s=21&t=E_s0R05aW5V8nq5zhHnZAQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-3xl font-normal social-link"
            style={{ color: '#39FFA8' }}
          >
            Twitter
          </a>
          <a 
            href="#" 
            className="text-xl md:text-3xl font-normal social-link"
            style={{ color: '#39FFA8' }}
          >
            Dexscreener
          </a>
        </div>
      </div>
    </main>
  )
}
