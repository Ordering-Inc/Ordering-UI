import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { RiAppleLine } from 'react-icons/ri'
import { AiOutlineAndroid } from 'react-icons/ai'
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
  const fontName = 'Lobster'
  const [, t] = useLanguage()
  const history = useHistory()

  const handlerFindBusiness = () => {
    history.push('/search')
  }

  const FontHomeTheme = ({ fontName, children }) => {
    useEffect(() => {
      if (window.document.getElementById('theme-font-home-title')) {
        return
      }

      const fontTheme = window.document.createElement('link')
      fontTheme.id = 'theme-font-home-title'
      fontTheme.rel = 'stylesheet'
      fontTheme.async = true
      fontTheme.defer = true
      fontTheme.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@200;300;400;500;700;800;900&display=swap`

      window.document.body.appendChild(fontTheme)
      return () => {
        fontTheme.remove()
      }
    }, [])
    return children
  }

  return (
    <HomeContainer>
      <HomeHero
        {...props}
        onFindBusiness={handlerFindBusiness}
        FontHomeTheme={FontHomeTheme}
      />
      <HomeSection bgColor='#F8F8F8' column>
        <HomeTitle>
          <h2>
            {t('HOME_TITLE_CONTENT', 'Steps to place')} <span>{t('AN_ORDER', 'an order')}</span>
          </h2>
        </HomeTitle>
        <StepsBlock>
          <div>
            <img src={locationSvg} />
            <h3>{t('ADD_ADDRESS', 'Add Address')}</h3>
          </div>
          <Line />
          <div>
            <img src={businessSvg} />
            <h3>{t('SELECT_YOUR_BUSINESS', 'Select your Business')}</h3>
          </div>
          <Line />
          <div>
            <img src={productSvg} />
            <h3>{t('CHOOSE_YOUR_PRODUCT', 'Choose your Product')}</h3>
          </div>
          <Line />
          <div>
            <img src={deliverySvg} width='88' height='88' />
            <h3>{t('YOUR_PACKAGE_ARRIVES', 'Your package arrives')}</h3>
          </div>
        </StepsBlock>
      </HomeSection>
      <HomeSection>
        <ImageContent>
          <div>
            <img src={burgerImage} alt='img' />
          </div>
        </ImageContent>
        <TextContent>
          <WrapTextContent>
            <div>
              <FontHomeTheme fontName={fontName}>
                <h2>
                  {t('TEXT_CONTENT_1', 'We deliver more than')}<span> {t('FOOD', 'food')}</span>
                </h2>
              </FontHomeTheme>
              <p>{t('TEXT_CONTENT_PARAGRAPH_1', 'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorite right to your door.')}</p>
              <p>{t('DOWNLOAD_APP', 'Download the app for iOS or Android for free.')}</p>
            </div>
          </WrapTextContent>
        </TextContent>
      </HomeSection>

      <HomeSection bgColor='#F8F8F8' className='reverse'>
        <TextContent>
          <WrapTextContent>
            <div>
              <FontHomeTheme fontName={fontName}>
                <h2>{t('TEXT_CONTENT_2', 'Download')} <span>{t('OUR_APPS', 'our apps')}</span></h2>
              </FontHomeTheme>
              <p>{t('TEXT_CONTENT_PARAGRAPH_2', 'The best ordering experience on your smartphone.')}</p>
              <p>{t('SPEEDY_ORDERING', 'For speedy ordering and delivery updates, get the apps now.')}</p>
            </div>
            <Icons>
              <RiAppleLine />
              <AiOutlineAndroid />
            </Icons>
          </WrapTextContent>
        </TextContent>
        <ImageContent>
          <div>
            <img src={socialMedia} alt='img' />
          </div>
        </ImageContent>
      </HomeSection>
      <HomeSection bgimage={foodBg}>
        <TextContent className='center'>
          <HomeFooter>
            <FontHomeTheme fontName={fontName}>
              <h2>{t('HOME_TITLE_FOOTER', 'Something for everyone')}</h2>
            </FontHomeTheme>
            <div>
              <Button color='primary'>
                {t('VIEW_MENU', 'View Menu')}
              </Button>
            </div>
          </HomeFooter>
        </TextContent>
      </HomeSection>
    </HomeContainer>
  )
}
