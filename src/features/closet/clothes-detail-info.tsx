import SectionContainer from '~/common/components/section-container'
import VStack from '~/common/components/v-stack'

export default function ClothesDetailInfo({ brand, description }: { brand: string, description: string }) {
  return (
    <SectionContainer>
      <VStack>
        <p className="font-bold text-xl">{brand}</p>
        <p>{description}</p>
      </VStack>
    </SectionContainer>
  )
}
