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
      <div className="relative w-full h-screen flex flex-col items-center">
        {/* Hero Text */}
        <div className="text-center z-20 title-container">
          <h1 className="text-5xl md:text-8xl font-black text-black tracking-normal main-title">JUST A FROH<span className="text-6xl md:text-9xl">.</span></h1>
        </div>

        {/* Frog Image */}
        <div className="relative z-10 frog-container">
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
        <div className="absolute left-1/2 -translate-x-1/2 wave-container animate-wave">
          <Image
            src="/img/waves.png"
            alt="Wave Background"
            width={900}
            height={300}
            priority
            className="object-contain"
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-8 md:gap-12 z-30 socials-container absolute bottom-0">
          <a 
            href="https://t.me/FrohSol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="#39FFA8">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a 
            href="https://x.com/justafroh?s=21&t=E_s0R05aW5V8nq5zhHnZAQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="#39FFA8">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
