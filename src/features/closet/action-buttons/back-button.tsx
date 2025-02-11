'use client'

import { IconX } from 'justd-icons'
import Link from 'next/link'
import React from 'react'
import { buttonStyles } from '~/common/components/ui'

export default function BackButton() {
  return (
    <Link href="/" className={buttonStyles({ intent: 'secondary', shape: 'circle' })}>
      <IconX />
    </Link>
  )
}
