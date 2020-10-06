import React, { useEffect } from 'react'
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
  HomeFooter
} from './styles'

import locationSvg from '../../../template/assets/location-icon.svg'
import businessSvg from '../../../template/assets/store-icon.svg'
import productSvg from '../../../template/assets/product-icon.svg'
import deliverySvg from '../../../template/assets/delivery-icon.svg'
import burgerImage from '../../../template/assets/burger-image.png'
import socialMedia from '../../../template/assets/social-media.png'
import foodBg from '../../../template/assets/food-bg.png'

export const HomePage = (props) => {
  const { FontHomeTheme } = props
  const fontName = 'Lobster'

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
            Steps to place <span>an order</span>
          </h2>
        </HomeTitle>
        <StepsBlock>
          <div>
            <img src={locationSvg} />
            <h3>Add Address</h3>
          </div>
          <div>
            <img src={businessSvg} />
            <h3>Select your Business</h3>
          </div>
          <div>
            <img src={productSvg} />
            <h3>Choose your Product</h3>
          </div>
          <div>
            <img src={deliverySvg} width='88' height='88' />
            <h3>Your package arrives</h3>
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
                <h2>We deliver more than <span>food</span></h2>
              </FontHomeTheme>
              <p>With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorite right to your door.</p>
              <p>Download the app for iOS or Android for free.</p>
            </div>
          </WrapTextContent>
        </TextContent>
      </HomeSection>

      <HomeSection bgColor='#F8F8F8' className='reverse'>
        <TextContent>
          <WrapTextContent>
            <div>
              <FontHomeTheme fontName={fontName}>
                <h2>Download <span>our apps</span></h2>
              </FontHomeTheme>
              <p>The best ordering experience on your smartphone.</p>
              <p>For speedy ordering and delivery updates, get the apps now.</p>
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
              <h2>Something for everyone</h2>
            </FontHomeTheme>
            <div>
              <Button color='primary'>
                View Menu
              </Button>
            </div>
          </HomeFooter>
        </TextContent>
      </HomeSection>
    </HomeContainer>
  )
}
