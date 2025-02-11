'use client'

import { useQueryState } from 'nuqs'
import { buttonStyles, Drawer } from '~/common/components/ui'

export default function ReleaseButton() {
  const [state, setstate] = useQueryState('s')

  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles({ intent: 'danger', shape: 'circle', isDisabled: Boolean(state) })} isDisabled={Boolean(state)}>
        👋
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>リリース</Drawer.Title>
          <Drawer.Description>
            服をリリースに出しますか？
            申請すると配送キットが送られます。
            リリースに出した服は...
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body className="space-y-1">
          <Drawer.Close
            className={buttonStyles({ intent: 'danger' })}
            onPress={() => {
              setstate('r')
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
