import BackButton from './back-button'
import BuyButton from './buy-button'

export default function ActionButtons() {
  return (
    <aside className="fixed z-30 bottom-0 right-1/2 translate-x-1/2 w-full max-w-md grid grid-cols-[40px_1fr] gap-1 p-2 backdrop-blur-sm bg-bg/10 border-t shadow-t">
      <BackButton />
      <BuyButton />
    </aside>
  )
}
