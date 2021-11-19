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
    height: 550px;
  }

  @media (min-width: 1200px) {
    height: 620px;
  }

  @media (min-width: 1440px) {
    height: 70vh;
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    text-shadow: 0px 0px 5px #fff;
    padding: 30px 20px 38vh;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 33px 3.5vw;
      flex-direction: row;
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  letter-spacing: 0px;
  color: ${props => props.theme.colors.primary};
  opacity: 1;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 15px;
  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 4vw;
    margin-bottom: 25px;
  }

  @media (min-width: 1450px) {
    font-size: 66px;
  }

`

export const DiscountBars = styled.div`
  display: flex;
  width: calc(100% + 40px);
  overflow: hidden;
  justify-content: flex-end;
  img {
    width: 80%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 3vh;
    right: 0;
    width: 100%;
    img {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 42%;
    }
  }
`

export const SloganContent = styled.div`
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`

export const WrapOrderyType = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;

  >div{
    &:first-child{
      svg {
        width: 45px;
      }
    }
    &:nth-child(2) {
      svg {
        height: 33px;
      }
    }
  }
`
export const OrderTypeItem = styled.div`
  position: relative;
  display: flex;
  width: 120px;
  height: 65px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  background-color: #fff;
  border: 2px inset ${props => props.theme.colors.primary};
  border-radius: 7.6px;
  box-shadow: rgb(177 177 177) 3px 3px 6px 0px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;
  svg {
    height: 33px;
    width: 25px;
    fill: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    font-size: 14px;
    width: 125px;
    height: 70px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    width: 135px;
    height: 73px;
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
