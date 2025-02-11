import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageLayout from '~/common/components/page-layout'
import SectionContainer from '~/common/components/section-container'
import VStack from '~/common/components/v-stack'
import ActionButtons from '~/features/closet/action-buttons'
import ClothesDetailInfo from '~/features/closet/clothes-detail-info'
import ClothesStatus from '~/features/closet/clothes-status'
import { clothesData } from '~/features/closet/data'
import { StylingCarousel } from '~/features/closet/styling-carousel'
import WashingInstructionsIcons from '~/features/closet/washing-instructions-icons'

export default async function ClothesDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const clothes = clothesData.find(item => item.id === id)
  if (!clothes) {
    notFound()
  }

  return (
    <PageLayout
      className="pb-20"
    >
      <VStack>
        <Image
          src={`/clothes/${id}.jpg`}
          alt={id}
          width={300}
          height={300}
          className="w-full"
        />
        <ClothesDetailInfo
          brand={clothes.brand}
          description={clothes.description}
        />
        <WashingInstructionsIcons
          names={clothes.washingInstructions}
        />
        <div className="flex gap-1 flex-wrap">
          <SectionContainer>
            <p className="text-xs font-bold mb-2">寸法</p>
            <ul>
              {clothes.size.map((size, index) => (
                <li key={index}>
                  <span>{size.category}</span>
                  &nbsp;:&nbsp;
                  <span>
                    {size.centimeters}
                    cm
                  </span>
                </li>
              ))}
            </ul>
          </SectionContainer>
          <SectionContainer>
            <p className="text-xs font-bold mb-2">素材</p>
            <ul>
              {clothes.materials.map((size, index) => (
                <li key={index}>
                  <span>{size.material}</span>
                  &nbsp;:&nbsp;
                  <span>
                    {size.percentage}
                    %
                  </span>
                </li>
              ))}
            </ul>
          </SectionContainer>
          <SectionContainer>
            <p className="text-xs font-bold mb-2">原産国</p>
            <p>{clothes.countryOfOrigin}</p>
          </SectionContainer>
        </div>
        <StylingCarousel
          clothesId={id}
        />
      </VStack>
      <ClothesStatus />
      <ActionButtons />
    </PageLayout>
  )
}
