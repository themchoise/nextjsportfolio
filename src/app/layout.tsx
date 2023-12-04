import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local'

//const roboto = Roboto({ subsets: ['latin'], weight:  ['100', '100']  })

const myFont = localFont({ src: './font/Virgil.woff2'})

export const metadata: Metadata = {
  title: 'Maximiliano Joyce Personal Site',
  description: 'Maximiliano Joyce Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
