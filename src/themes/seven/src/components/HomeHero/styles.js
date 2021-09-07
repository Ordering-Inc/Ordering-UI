import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 43.562132vh;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 768px) {
    height: 55vw;
    max-height: 55vw;
    overflow: hidden;
  }

  @media (min-width: 1200px) {
    height: 65.562132vh;
  }
`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0px 20px 0px;

    ${props => props.theme?.rtl && css`
      padding: 0px 20px 0px;
    `}

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      max-width: 94%;
      margin: auto;
      padding: 0;
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 1vw;
  }

  @media (min-width: 1024px) {
    font-size: 5vw;
  }

  @media (min-width: 1450px) {
    font-size: 66px;
  }

`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 15px;
  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 23px;
  }

  @media (min-width: 1024px) {
    font-size: 2vw;
  }

  @media (min-width: 1450px) {
    font-size: 24px;
  }
`

export const WrapOrderyType = styled.div`
  display: flex;
  border: 1px inset ${props => props.theme.colors.borderColor};
  border-radius: 4.6px;
  padding: 1px;
  box-sizing: border-box;
  width: fit-content;
  background-color: #fff;
`
export const OrderTypeItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryContrast};

  &:before {
    background-color: initial;
    background-image: linear-gradient(#fff 0,rgba(255,255,255,0) 100%);
    border-radius: 2px;
    content: "";
    height: 47%;
    left: 1%;
    opacity: .5;
    position: absolute;
    top: 1%;
    transition: all .3;
    width: 98%;
  }

  &:after {

  }
  
  &:first-child {
    border-radius: 4px 0px 0px 4px;
  }
  &:nth-child(2){
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.secundaryContrast};
    border-radius: 0px 4px 4px 0px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    width: 120px;
    height: 45px;
  }

  @media (min-width: 1024px) {
    width: 12vw;
    height: 4vw;
  }

  @media (min-width: 1450px) {
    width: 140px;
    height: 45px;
  }
  
`
