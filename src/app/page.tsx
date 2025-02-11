import PageLayout from '~/common/components/page-layout'
import SectionContainer from '~/common/components/section-container'
import ScanButton from '~/features/buy/scan-button'
import ClothesGridView from '~/features/closet/clothes-grid'

export default function Home() {
  return (
    <PageLayout>
      <SectionContainer>
        <ClothesGridView />
      </SectionContainer>
      <ScanButton />
    </PageLayout>
  )
}
