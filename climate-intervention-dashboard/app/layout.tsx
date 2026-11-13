import type { Metadata, Viewport } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Atmospheric Orchestrator',
  description: 'Climate Intervention Dashboard — Hyper-minimalist geospatial strategy platform.',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-sans antialiased overflow-hidden">{children}</body>
    </html>
  )
}
