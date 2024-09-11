import type { Metadata } from 'next'
import './globals.css'
import { Handjet, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local'

const roboto = Roboto_Mono({ subsets: ['latin'] })

//const myFont = localFont({ src: 'https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap'})

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
