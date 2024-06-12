import { RootLayout } from '@/components/RootLayout'
import Head from 'next/head';

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'IDEONLAB',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <Head>
        {/* Other meta tags and links */}
        {/* <link rel="icon" href="/src/images/logo/ideon.jpg"/> */}
        <link rel="icon" href="/ideon.ico" />
      </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
