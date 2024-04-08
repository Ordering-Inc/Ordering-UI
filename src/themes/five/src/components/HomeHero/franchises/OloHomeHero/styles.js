import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  ${({ mb }) => mb && css`
    margin-bottom: ${mb};
  `}
  padding: 40px;
  box-sizing: border-box;
  @media (min-width: 375px) {
    height: 374px;
  }

  @media (min-width: 567px) {
    height: 660px;
    margin-bottom: 0;
  }
`

export const HeroContainer = (props) => {
  return (
    <HeroContainerStyled {...props}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const ContentWrapper = styled.div`
    display: flex;

    height: 100%;
    padding: 0px 10vw 0px;

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 576px) {
      justify-content: center;
      padding: 0px 40px 0px;
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  line-height: 36px;
  letter-spacing: 0px;
  color: #000;
  opacity: 1;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 18px;
  font-size: 400;
  color: #000;
  opacity: 1;
  margin-bottom: 30px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const HeroContent = styled.div`
  width: 35%;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
`

export const HomeImage = styled.div`
  width: 65%;
  height: 100%;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
`

export const OrderTypeListItemContainer = styled.div`
  width: 100%;
  height: 75px;
  border-radius: 7.6px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 15px;
  cursor: pointer;
`

export const OrderTypeTitle = styled.p`
  font-size: 16px;
  box-sizing: border-box;
`

export const IconTypeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: ${({ activated, theme }) => activated ? theme?.colors?.white : '#F3F9FF'};
  border-radius: 44px;
  margin-right: 30px;
`
