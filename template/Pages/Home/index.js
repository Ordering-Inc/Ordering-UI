import React from 'react'
import { useLanguage } from 'ordering-components'
import AiOutlineAndroid from '@meronex/icons/ai/AiOutlineAndroid'
import AiOutlineApple from '@meronex/icons/ai/AiOutlineApple'
import { HomeHero } from '../../../src/components/HomeHero'
import { useHistory } from 'react-router-dom'

import { Button } from '../../../src/styles/Buttons'

import {
  HomeContainer,
  HomeSection,
  HomeTitle,
  StepsBlock,
  ImageContent,
  WrapTextContent,
  TextContent,
  Icons,
  HomeFooter,
  Line
} from './styles'

import locationSvg from '../../../template/assets/location-icon.svg'
import businessSvg from '../../../template/assets/store-icon.svg'
import productSvg from '../../../template/assets/product-icon.svg'
import deliverySvg from '../../../template/assets/delivery-icon.svg'
import burgerImage from '../../../template/assets/burger-image.png'
import socialMedia from '../../../template/assets/social-media.png'
import foodBg from '../../../template/assets/food-bg.png'

export const HomePage = (props) => {
  const [, t] = useLanguage()
  const history = useHistory()

  const handlerFindBusiness = () => {
    history.push('/search')
  }

  return (
    <HomeContainer>
      <HomeHero
        {...props}
        onFindBusiness={handlerFindBusiness}
      />
      <HomeSection bgColor='#F8F8F8' column>
        <HomeTitle>
          <h2>
            {t('STEPS_TITLE', 'Steps to place')} <span>{t('STEPS_TITLE_HIGHLIGHT', 'an order')}</span>
          </h2>
        </HomeTitle>
        <StepsBlock>
          <div>
            <img src={locationSvg} alt='location' width='88' height='88' />
            <h3>{t('STEPS_ADDRESS', 'Add Address')}</h3>
          </div>
          <Line />
          <div>
            <img src={businessSvg} alt='business' width='88' height='88' />
            <h3>{t('STEPS_BUSINESS', 'Select your Business')}</h3>
          </div>
          <Line />
          <div>
            <img src={productSvg} alt='product' width='88' height='88' />
            <h3>{t('STEPS_PRODUCT', 'Choose your Product')}</h3>
          </div>
          <Line />
          <div>
            <img src={deliverySvg} alt='delivery' width='88' height='88' />
            <h3>{t('STEPS_ARRIVE', 'Your package arrives')}</h3>
          </div>
        </StepsBlock>
      </HomeSection>
      <HomeSection>
        <ImageContent>
          <div>
            <img src={burgerImage} alt='img' width='391' height='400' />
          </div>
        </ImageContent>
        <TextContent>
          <WrapTextContent>
            <div>
              <h2>
                {t('HOME_CONTENT_TITLE', 'We deliver more than')} <span>{t('HOME_CONTENT_TITLE_HIGHLIGHT', 'food')}</span>
              </h2>
              <p>{t('TEXT_CONTENT_PARAGRAPH_1', 'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorite right to your door.')}</p>
              <p>{t('HOME_CONTENT_PARAGRAPH_2', 'Download the app for iOS or Android for free.')}</p>
            </div>
          </WrapTextContent>
        </TextContent>
      </HomeSection>

      <HomeSection bgColor='#F8F8F8' className='reverse'>
        <TextContent>
          <WrapTextContent>
            <div>
              <h2>{t('APPS_TITLE', 'Download')} <span>{t('APPS_TITLE_HIGHLIGHT', 'our apps')}</span></h2>
              <p>{t('APPS_PARAGRAPH_1', 'The best ordering experience on your smartphone.')}</p>
              <p>{t('APPS_PARAGRAPH_2', 'For speedy ordering and delivery updates, get the apps now.')}</p>
            </div>
            <Icons>
              <AiOutlineApple />
              <AiOutlineAndroid />
            </Icons>
          </WrapTextContent>
        </TextContent>
        <ImageContent>
          <div>
            <img src={socialMedia} alt='img' width='295' height='400' />
          </div>
        </ImageContent>
      </HomeSection>
      <HomeSection bgimage={foodBg}>
        <TextContent className='center'>
          <HomeFooter>
            <h2>{t('HOME_CONTENT_HERO', 'Something for Everyone')}</h2>
            <div>
              <Button color='primary'>
                {t('HOME_CONTENT_HERO_BUTTON', 'View Menu')}
              </Button>
            </div>
          </HomeFooter>
        </TextContent>
      </HomeSection>
    </HomeContainer>
  )
}
