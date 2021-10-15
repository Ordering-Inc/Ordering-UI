import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: calc(100vh - 85px);

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 768px) {
    height: 45vh;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    height: 70vh;
  }

  @media (min-width: 1200px) {
    height: calc(100vh - 70px);
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
    align-items: center;
    height: 100%;
    text-shadow: 0px 0px 5px #fff;
    padding: 0px 20px 50px;
    box-sizing: border-box;
    ${props => props.theme?.rtl && css`
      padding: 0px 20px 50px;
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
  color: ${props => props.theme.colors.primary};
  opacity: 1;
  font-weight: bold;
  font-size: 48px;
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
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 0px 3px #dfdfdfa8;
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
  border: 2px solid #fff;
  border-radius: 7.6px;
  box-sizing: border-box;
  width: fit-content;
  background-color: #fff;
  overflow: hidden;
  position: relative;

`
export const OrderTypeItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 70px;
  padding: 6px 12px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryContrast};
  
  &:first-child {
    svg {
      height: 33px;
      width: 33px;
      fill: #fff;
    }
  }
  &:nth-child(2){
    background-color: #fff;
    border: 1.2px solid #878787;
    border-radius: 0 7px 7px 0;
    color: #000;
    svg {
      height: 33px;
      width: 25px;
      fill: #ef3e42;
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
    width: 173px;
    height: 65px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    width: 200px;
    height: 70px;
  }  
`
export const FoodLocation = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 1px -2px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  svg {
    width: 35px;
    height: fit-content;
    fill: gray;
  }
`
