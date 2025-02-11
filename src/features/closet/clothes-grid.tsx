'use client'

import Image from 'next/image'
import Link from 'next/link'
import { clothesData } from './data'
import { useQueryState } from 'nuqs'

export default function ClothesGridView() {
  const [state, _] = useQueryState('s')
  let clothes = clothesData

  if (state !== 'a') {
    clothes = clothes.slice(0, -1)
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      {clothes.map(item => (
        <Link key={item.id} href={`/${item.id}`}>
          <Image
            key={item.id}
            src={`/clothes/${item.id}.jpg`}
            alt={item.description}
            width={300}
            height={300}
          />
        </Link>
      ))}
    </div>
  )
}
