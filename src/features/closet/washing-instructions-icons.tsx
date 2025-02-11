import Image from 'next/image'
import React from 'react'
import HStack from '~/common/components/h-stack'
import SectionContainer from '~/common/components/section-container'

export default function WashingInstructionsIcons({ names }: { names: string[] }) {
  return (
    <SectionContainer>
      <HStack>
        {names.map(name => (
          <Image
            key={name}
            src={`/washingInstructions/${name}.png`}
            alt={name}
            width={22}
            height={22}
          />
        ))}
      </HStack>
    </SectionContainer>
  )
}
