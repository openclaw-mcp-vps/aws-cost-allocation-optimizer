import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AWS Cost Allocation Optimizer',
  description: 'Optimize AWS cost allocation across teams. Analyze resource usage, improve tagging strategies, and track cost center accuracy.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="778d4c91-21f3-4217-9ee3-07a5410c032c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
