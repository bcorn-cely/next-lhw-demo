import type { Metadata } from "next"
import { Playfair_Display } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { VercelToolbar } from "@vercel/toolbar/next"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Leading Hotels of the World",
  description: "Discover the experiences that forever spark the spirit and inspire the soul.",
}

export async function generateStaticParams() {
  // returning an empty array is enough to enable ISR
  return [];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  params: { code: string }
}) {
  
  const shouldInjectToolbar = process.env.NODE_ENV === 'development' ? true : false;

  return (
    <html lang="en">
      <body className={playfair.className}>
        <Header />
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  )
}

