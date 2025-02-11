export default function HStack({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex gap-1">
      {children}
    </div>
  )
}
