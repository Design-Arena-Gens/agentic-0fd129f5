import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viral Content Agent - Your Creative Partner',
  description: 'AI-powered content creation assistant for viral videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
