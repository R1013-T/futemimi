'use client'

import Image from 'next/image'
import { Carousel } from 'ui'
import SectionContainer from '~/common/components/section-container'

export function StylingCarousel({ clothesId }: { clothesId: string }) {
  return (
    <SectionContainer>
      <p className='text-sm mb-2' >スタイリング</p>
      <Carousel className="w-full **:data-[slot=card]:flex **:data-[slot=card]:h-56 **:data-[slot=card]:flex-col **:data-[slot=card]:overflow-hidden">
        <Carousel.Content>
          <Carousel.Item className="basis-1/2">
            <Image
              className="rounded-xl"
              src={`/clothes/${clothesId}_styling01.jpg`}
              alt="image 1"
              width={400}
              height={300}
            />
          </Carousel.Item>
          <Carousel.Item className="basis-1/2">
            <Image
              className="rounded-xl"
              src={`/clothes/${clothesId}_styling02.jpg`}
              alt="image 2"
              width={400}
              height={300}
            />
          </Carousel.Item>
          <Carousel.Item className="basis-1/2">
            <Image
              className="rounded-xl"
              src={`/clothes/${clothesId}_styling03.jpg`}
              alt="image 3"
              width={400}
              height={300}
            />
          </Carousel.Item>
          <Carousel.Item className="basis-1/2">
            <Image
              className="rounded-xl"
              src={`/clothes/${clothesId}_styling04.jpg`}
              alt="image 4"
              width={400}
              height={300}
            />
          </Carousel.Item>
        </Carousel.Content>

        <Carousel.Handler>
          <Carousel.Button segment="previous" />
          <Carousel.Button segment="next" />
        </Carousel.Handler>
      </Carousel>
    </SectionContainer>
  )
}
