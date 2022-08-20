import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 97px);
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
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

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font-weight: 500;
  font-size: 50px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 400px) {
    font-size: 65px;
  }

  @media (min-width: 576px) {
    font-size: 72px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 24px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 37px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 480px) {
    font-size: 24px;
  }
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 25px;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  margin-right: 10px;

  ${({ withIcon }) => withIcon && css`
    box-sizing: border-box;
    flex: 1;
    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;

      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }
  `}
  
  p {
    color: ${props => props.theme.colors.darkTextColor};
    position: relative;
    margin: 0;
  }

  svg {
    color: ${props => props.theme.colors.primary};
    width: 22px;
    height: 22px;
    min-width: 22px;

    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}

  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: relative;

`

export const SearchLocationsContainer = styled.div`
  padding: 40px 20px 20px;
  overflow: auto;
  height: calc(100vh - 97px);
  box-sizing: border-box;

  div {
    margin: 20px 0 0;
    p{
      color: ${({ theme }) => theme.colors.titleHomeColor};
    }
  }
  @media (min-width: 768){
    width: 50%;
  }

  @media (min-width: 1024px){
    width: 500px;
  }
`

export const DeliveryPickupContainer = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
  border-radius: 0px;
  border: 1px solid rgb(161, 124, 50);
  height: 52px;
  background-color: transparent;

  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    z-index: 1;
  }

  &::after {
    ${({ orderTypeSelected }) => orderTypeSelected === 2 ? css`
      content: "";
      background: rgb(161, 124, 50);
      position: absolute;
      transition: all 0.2s linear 0s;
      left: 6px;
      bottom: 5px;
      height: calc(100% - 10px);
      width: calc(50% - 6px);
    ` : css`
      content: "";
      background: rgb(161, 124, 50);
      position: absolute;
      transition: all 0.2s linear 0s;
      bottom: 5px;
      height: calc(100% - 10px);
      width: calc(50% - 6px);
      left: 50%;
      
    `
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  button {
    height: 46px;
    margin-left: 10px;
  }
`

export const ViewLocationsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  button { 
    width: 100%;
  }
`

export const Diviver = styled.hr`
  background-color: rgb(230, 230, 230);
  display: block;
  height: 1px;
  margin: 24px 0px;
`
