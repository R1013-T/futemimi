import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Providers } from '~/common/providers'
import '~/globals.css'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FuTeMimi',
  description: 'FuTeMimi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      {/* <head>
        {process.env.NODE_ENV !== 'production' && (
          <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
        )}
      </head> */}
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
