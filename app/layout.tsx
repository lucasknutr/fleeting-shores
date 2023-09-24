import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fleeting Shores',
  description: 'A blog about technology and its political implications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-slate-900 text-white max-w-3xl mx-auto py-20 px-4'>
      <body>{children}</body>
    </html>
  )
}
