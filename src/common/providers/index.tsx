'use client'

import { useRouter } from 'next/navigation'
import { RouterProvider } from 'react-aria-components'
import { ThemeProvider } from './theme-provider'
import { NuqsAdapter } from 'nuqs/adapters/next'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider enableSystem attribute="class" defaultTheme="light">
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </ThemeProvider>
    </RouterProvider>
  )
}
