import ReleaseButton from "./release-button"
import MaintenanceButton from "./maintenance-button"
import BackButton from "./back-button"

export default function ActionButtons() {
  return (
    <aside className="fixed z-30 bottom-0 right-1/2 translate-x-1/2 w-full max-w-md grid grid-cols-[40px_1fr__0px_40px] gap-1 p-2 backdrop-blur-sm bg-bg/10 border-t shadow-t">
      <BackButton />
      <MaintenanceButton />
      <ReleaseButton />
    </aside>
  )
}
