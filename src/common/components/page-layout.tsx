import { cn } from '~/utils/classes'

export default function PageLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return (
    <article className={cn('max-w-md mx-auto', className)}>
      {children}
    </article>
  )
}
