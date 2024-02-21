import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Ellis Collinson | Software Developer',
  description: `I'm a web designer and developer with a passion for creating beautiful, functional, and impactful online experiences. I'm skilled in both the artistic and technical aspects of web development, allowing me to bridge the gap between design vision and seamless execution.`
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
