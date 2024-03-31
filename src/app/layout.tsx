import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s - Ice de Vera',
    default: 'Ice de Vera - Software Engineer',
  },
  description:
    'I’m Ice, a software engineer based in Manila, Philippines. I like it when I type on the keyboard, stare at the computer screen, click on the mouse, and magic happens.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <Script
        defer
        src="https://analytics.us.umami.is/script.js"
        data-website-id="663b3a1f-9155-4018-8fde-b29da1c5ad7f"
      />
    </html>
  )
}
