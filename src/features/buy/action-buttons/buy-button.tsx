'use client'

import Link from 'next/link'
import { buttonStyles, Drawer } from '~/common/components/ui'

export default function BuyButton() {
  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles()}>
        購入する
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>購入</Drawer.Title>
          <Drawer.Description>
            服を購入しますか？
            ¥82,500
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body className="space-y-1">
          <Link href="/?s=a" className={buttonStyles()}>
            購入する
          </Link>
          <Drawer.Close className="w-full">閉じる</Drawer.Close>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  )
}
