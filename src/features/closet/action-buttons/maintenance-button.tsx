'use client'

import { useQueryState } from 'nuqs'
import { buttonStyles, Drawer } from '~/common/components/ui'

export default function MaintenanceButton() {
  const [state, setstate] = useQueryState('s')

  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles({ isDisabled: Boolean(state) })} isDisabled={Boolean(state)}>
        メンテナンスに出す
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>メンテナンス</Drawer.Title>
          <Drawer.Description>
            服をメンテナンスに出しますか？
            申請すると配送キットが送られます。
            メンテナンスに出した服は...
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body className="space-y-1">
          <Drawer.Close
            className={buttonStyles()}
            onPress={() => {
              setstate('m')
            }}
          >
            申請する
          </Drawer.Close>
          <Drawer.Close className="w-full">閉じる</Drawer.Close>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  )
}
