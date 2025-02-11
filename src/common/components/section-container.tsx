export default function SectionContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="p-2">
      {children}
    </div>
  )
}
