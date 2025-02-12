import type { Metadata } from "next"
import { Playfair_Display } from 'next/font/google'
import { VercelToolbar } from "@vercel/toolbar/next"
import { draftMode } from "next/headers"
import "./globals.css"
import { Header } from "@/components/header"
import { ContentfulPreviewProvider } from "@/components/contentful-preview-provider"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Leading Hotels of the World",
  description: "Discover the experiences that forever spark the spirit and inspire the soul.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  params: { code: string }
}) {
  
  const shouldInjectToolbar = process.env.NODE_ENV === 'development' ? true : false;
  const { isEnabled } = draftMode();
  return (
    <html lang="en">
      <ContentfulPreviewProvider locale="en-US" enableInspectorMode={isEnabled} enableLiveUpdates={isEnabled}>

      <body className={playfair.className}>
        <Header />
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
      </ContentfulPreviewProvider>
    </html>
  )
}

