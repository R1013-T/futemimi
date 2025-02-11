export default function VStack({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid gap-1">
      {children}
    </div>
  )
}
