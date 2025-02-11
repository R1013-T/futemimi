'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { Button } from '~/common/components/ui'

export default function ScanButton() {
  const router = useRouter()

  const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))

  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle')
  const imageSrc = useMemo(() => {
    switch (scanState) {
      case 'idle':
        return null
      case 'scanning':
        return '/nfc-modal-ready.png'
      case 'success':
        return '/nfc-modal-correct.png'
    }
  }, [scanState])

  const handleScan = async () => {
    setScanState('scanning')
    await delay(5000)
    setScanState('success')
    await delay(2000)
    router.push('/buy')
  }

  return (
    <>
      <Button
        size="square-petite"
        shape="circle"
        className="fixed bottom-4 right-4 p-1 size-11 shadow-lg"
        onPress={handleScan}
        isDisabled={scanState === 'scanning'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-search">
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <circle cx="12" cy="12" r="3" />
          <path d="m16 16-1.9-1.9" />
        </svg>
      </Button>
      {scanState !== 'idle' && (
        <Image src={imageSrc as string} width={500} height={500} alt="NFC card" className="fixed z-30 bottom-2 right-2 left-2 w-[95%] shadow-2xl rounded-4xl overflow-hidden" />
      )}
    </>
  )
}
