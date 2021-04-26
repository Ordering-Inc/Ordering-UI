import React, { useState } from 'react'
import { useLanguage, useOrder } from 'ordering-components'
import { HomeHero } from '../../../src/themes/two/src/components/HomeHero'
import { AddressForm } from '../../../src/themes/two/src/components/AddressForm'
import { Modal } from '../../../src/themes/two/src/components/Modal'
import { Button } from '../../../src/themes/two/src/styles/Buttons'
import { useWindowSize } from '../../../src/hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { HelmetTags } from '../../components/HelmetTags'
import {
  HomeContainer,
  HomeSection,
  WrapBecomeBlock,
  BecomeItem,
  WrapImage,
  Image,
  TextContent,
  WrapTextContent,
  WrapSectionImg,
  SectionTitle,
  SectionTextContent,
  InnerSection,
  WrapperGetApp
} from './styles'

export const HomePage = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [orderState] = useOrder()
  const [modals, setModals] = useState(false)
  const { width } = useWindowSize()

  const handleFindBusinesses = () => {
    setModals(true)
  }

  return (
    <>
      <HelmetTags page='home' />
      <HomeContainer>
        <HomeHero
          {...props}
        />
        {width < 576 && (
          <HomeSection>
            <WrapperGetApp>
              <p>{t('GET_TEH_BEST_ORDERING_EXPERIENCE', 'Get the best Ordering Experience')}</p>
              <Button color='primary'>
                {t('GET_THE_APP', 'Get the app')}
              </Button>
            </WrapperGetApp>
          </HomeSection>
        )}
        <HomeSection>
          <WrapBecomeBlock>
            <BecomeItem>
              <WrapImage>
                <Image src={theme?.images?.general?.homeDriver} alt='driver' loading='lazy' />
              </WrapImage>
              <TextContent>{t('BECOME_A_DRIVER', 'Become a Driver')}</TextContent>
            </BecomeItem>
            <BecomeItem>
              <WrapImage>
                <Image src={theme?.images?.general?.homePartner} alt='partner' loading='lazy' />
              </WrapImage>
              <TextContent>{t('BECOME_A_PARTNER', 'Become a Partner')}</TextContent>
            </BecomeItem>
            <BecomeItem>
              <WrapImage>
                <Image src={theme?.images?.general?.homeMobileApp} alt='mobile app' loading='lazy' />
              </WrapImage>
              <TextContent>{t('TRY_THE_APP', 'Try the App')}</TextContent>
            </BecomeItem>
          </WrapBecomeBlock>
        </HomeSection>

        <HomeSection top>
          <InnerSection top>
            <WrapTextContent>
              <SectionTitle>
                {t('EVERY_FLAVOR_WELCOME', 'Every Flavor Welcome')}
              </SectionTitle>
              <SectionTextContent>
                {t('LOREM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.')}
              </SectionTextContent>
              <div>
                <Button color='primary'>
                  {t('GET_THE_APP', 'Get the app')}
                </Button>
              </div>
            </WrapTextContent>
            <WrapSectionImg top>
              <Image src={theme?.images?.general?.homeSectionImg1} alt='img' loading='lazy' />
            </WrapSectionImg>
          </InnerSection>
        </HomeSection>

        <HomeSection bottom>
          <InnerSection bottom>
            <WrapSectionImg bottom>
              <Image src={theme?.images?.general?.homeSectionImg2} alt='img' loading='lazy' />
            </WrapSectionImg>
            <WrapTextContent>
              <SectionTitle>
                {t('YOUVE_GOT_STUFF_TO_DO', 'You\'ve got stuff to do.')}
              </SectionTitle>
              <SectionTitle>
                {t('WEVE_GOT_OPTIONS', 'We\'ve got options.')}
              </SectionTitle>
              <SectionTextContent>
                {t('LOREM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')}
              </SectionTextContent>
              <div>
                <Button color='primary' onClick={() => handleFindBusinesses()}>
                  {t('ORDER_NOW', 'Order now')}
                </Button>
              </div>
            </WrapTextContent>
          </InnerSection>
        </HomeSection>
        <Modal
          title={t('ADDRESS', 'Address')}
          open={modals}
          onClose={() => setModals(false)}
        >
          <AddressForm
            useValidationFileds
            address={orderState?.options?.address || {}}
            onClose={() => setModals(false)}
            onSaveAddress={() => setModals(false)}
            onCancel={() => setModals(false)}
          />
        </Modal>
      </HomeContainer>
    </>
  )
}
