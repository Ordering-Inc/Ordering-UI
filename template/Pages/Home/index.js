import React from 'react'
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
  Icons
} from './styles'

import locationSvg from '../../../template/assets/location-icon.svg'
import businessSvg from '../../../template/assets/store-icon.svg'
import productSvg from '../../../template/assets/product-icon.svg'
import deliverySvg from '../../../template/assets/delivery-icon.svg'
import burgerImage from '../../../template/assets/burger-image.png'
import socialMedia from '../../../template/assets/social-media.png'
import foodBg from '../../../template/assets/food-bg.png'

export const HomePage = (props) => {
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
          <h1>
            Steps to place <span>an order</span>
          </h1>
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
              <h1>We deliver more than <span>food</span></h1>
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
              <h1>Download <span>our apps</span></h1>
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
          <div>
            <h1>Something for everyone</h1>
            <div>
              <Button color='primary'>
                View Menu
              </Button>
            </div>
          </div>
        </TextContent>
      </HomeSection>
    </HomeContainer>
  )
}
