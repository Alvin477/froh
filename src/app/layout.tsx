import './globals.css'
import { Bubblegum_Sans } from 'next/font/google'

const bubblegum = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bubblegum.className}>{children}</body>
    </html>
  )
}
