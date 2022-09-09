import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

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

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 5px;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  align-items: center;
  margin-bottom: 27px;
  margin-right: 10px;
  display: flex;
  overflow: hidden;
  white-space: nowrap;

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
    color: #000 !important;
    position: relative;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: flex-end;
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
  flex-direction: column;
  position: relative;
  @media (min-width: 768px){
    flex-direction: row;
    min-height: 100vh;
  }
`

export const SearchLocationsContainer = styled.div`
  padding: 40px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 97px);
  box-sizing: border-box;
  h1 {
    color: #fff;
  }
  div {
    margin: 20px 0 0;
    p{
      color: ${({ theme }) => theme.colors.titleHomeColor};
    }
  }
  @media (min-width: 768px){
    width: 50%;
  }

  @media (min-width: 1024px){
    width: 500px;
  }
`

export const DeliveryPickupContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  border-radius: 0px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
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
    ${({ orderTypeSelected }) => orderTypeSelected === 1 ? css`
      content: "";
      background:  ${({ theme }) => theme.colors.gold};
      position: absolute;
      transition: all 0.2s linear 0s;
      left: 6px;
      bottom: 5px;
      height: calc(100% - 10px);
      width: calc(50% - 6px);
    ` : css`
      content: "";
      background: ${({ theme }) => theme.colors.gold};
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
  position: relative;
  button {
    height: 46px;
    margin-left: 10px;
  }
  .geolocation-button {
    position: absolute;
    top: 30px;
    right: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
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

export const WrapperMap = styled.div`
  flex: 1;
  height: calc(100vh - 97px);
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
  .btn-choose-store {
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 80px;
    height: 38px;
    font-size: 14px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
    &:active {
      background: ${props => darken(0.07, props.theme.colors.primary)};
    }
  }
  .btn-address-map {
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`

export const ActiveMapContainer = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
  }
  svg {
    margin-right: 20px;
    width: 30px;
    height: 30px;
  }
  p{
    margin-top: 21px;
  }

  @media (min-width: 1024px){
    button{ 
      width: 40%;
      font-size: 18px;
    }
  }
`
