import React from 'react'
import { VscLocation, VscHome } from 'react-icons/vsc'
import { BiDrink } from 'react-icons/bi'
import { GrDeliver } from 'react-icons/gr'
import { RiAppleLine } from 'react-icons/ri'
import { AiOutlineAndroid } from 'react-icons/ai'
import { HomeHero } from '../HomeHero'

import { Button } from '../../styles/Buttons'

import {
  HomeContainer,
  HomeSection,
  HomeTitle,
  StepsBlock,
  ImageContent,
  // TriangleShape,
  WrapTextContent,
  TextContent,
  Icons
} from './styles'

export const Home = (props) => {
  return (
    <HomeContainer>
      <HomeHero />

      <HomeSection bgColor='#F8F8F8' column>
        <HomeTitle>
          <h1>
            Steps to place <span>an order</span>
          </h1>
        </HomeTitle>
        <StepsBlock>
          <div>
            <VscLocation />
            <h3>Add Address</h3>
          </div>
          <div>
            <VscHome />
            <h3>Select your Business</h3>
          </div>
          <div>
            <BiDrink />
            <h3>Choose your Product</h3>
          </div>
          <div>
            <GrDeliver />
            <h3>Your package arrives</h3>
          </div>
        </StepsBlock>
      </HomeSection>

      <HomeSection>
        <ImageContent>
          <div>
            <img src='https://picsum.photos/1024/768' alt='img' />
          </div>
        </ImageContent>
        <TextContent>
          <div>
            <h1>We deliver more than <span>food</span></h1>
            <p>With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorite right to your door.</p>
            <p>Download the app for iOS or Android for free.</p>
          </div>
        </TextContent>
      </HomeSection>

      <HomeSection bgColor='#F8F8F8'>
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
            <img src='https://picsum.photos/1024/768' alt='img' />
          </div>
        </ImageContent>
      </HomeSection>

      <HomeSection bgimage='https://picsum.photos/1024/768'>
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
