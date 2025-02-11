'use client'

import { useQueryState } from 'nuqs'
import { Badge } from '~/common/components/ui'

export default function ClothesStatus() {
  const [state, _] = useQueryState('s')

  if (state === 'm') {
    return (
      <Badge className="fixed top-3 right-3 z-30">メンテナンス申請中</Badge>
    )
  }

  if (state === 'r') {
    return (
      <Badge className="fixed top-3 right-3 z-30">リリース申請中</Badge>
    )
  }
}
