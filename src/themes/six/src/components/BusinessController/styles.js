import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div` 
  width: 100%;
  position: relative;
`

export const WrapperBusinessCard = styled.div`
  border-radius: 10px;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`
  border-radius: 10px;
`

const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 175px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  h1 {
    color: #FFF;
    opacity: 0.5;
  }

  @media (min-width: 481px) {
    min-height: 200px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const BusinessTags = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 15px;
  width: calc(100% - 35px);
      
  ${({ theme }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
    width: 100%;
  `}
  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #FFC917;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  span {
    background-color: #6C6C6C;
    font-size: 12px;
    color: #FFF;
    padding: 8px;
    border-radius: 10px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
    ` : css`
        margin-right: 0px;
    `
  }
    }
  }
`

export const BusinessContent = styled.div`
  display: flex;
  margin: 12px 24px;
  max-height: 115px;
`

export const WrapperBusinessLogo = styled.div`
  align-self: center;
  width: 65px;
  height: 65px;
  min-height: 65px;
  min-width: 65px;
  min-height: 65px;
  ${({ isSkeleton }) => isSkeleton && css`
    width: auto;
    height: auto;
  `}

  @media (min-width: 481px){
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
    min-width: 75px;
    min-height: 75px;
  }
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 65px;
  border-radius: 10px;

  @media (min-width: 481px){
    width: 100%;
    height: 100%;
    min-height: 75px;
  }
`

export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessInfo = styled.div`
  display: flex;
  width: calc(100% - 65px);

  @media (min-width: 481px){
    width: calc(100% - 75px);
    ${({ theme }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
    `}
  }
`

export const BusinessInfoItem = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 10px;
  font-size: 12px;
  ${props => props.theme?.rtl && css`
    padding: 0px 10px 0px 5px;
  `}
  .reviews {
    display: flex;
    align-items: center;
    svg {
      margin-right: 3px;
      font-size: 22px;
      color: #FDC918;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
      align-items: center;
    `}
    p {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      img {
        margin-right: 4px;
        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
       `}
      }
    }
    p.bold {
      font-weight: bold;
    }
  }

  @media (min-width: 1201px) {
    width: 95%;
  }

  @media (min-width: 481px){
    ${({ theme }) => theme?.business_listing_view?.components?.layout?.type === 'mapview' && css`
      min-width: 100%;
      width: 100%;
    `}
    padding: 0px 5px 0px 16px;
    font-size: 16px;

    ${props => props.theme?.rtl && css`
        padding: 0px 16px 0px 5px;
    `}
  }
`

export const BusinessName = styled.h6`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
`

export const Categories = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #6C6C6C;

  @media (min-width: 481px) {
    font-size: 16px;
  }
`

export const Medadata = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 12px;
  .schedule{
    font-size: 12px;
    color: #ADB5BD;
  }
  ${({ isCustomerMode }) => isCustomerMode && css`
    > div {
      flex-direction: column;
    }
  `}
  p {
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
  }

  @media (min-width: 481px) {
    font-size: 14px;
  }
`

export const CallCenterInformation = styled.div`
  display: flex;
  flex-direction: column;
  div{
    justify-content: space-evenly;
  }
`

export const CallCenterInformationBullet = styled.div`
  display: flex;
  padding: 2px;
  margin-bottom: 2px;
  border-radius: 16px;
  background: ${({ bgcolor }) => bgcolor};
  width: 50px;
  color: #fff;
  svg{
    font-size: 18px;
  }
`
export const NameWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const BusinessInfomation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  .reviews {
    margin-right: 10px;
  }
  .favorite {
    margin-right: 10px;
    svg {
      color: #E63757
    }
  }
  ${props => props.theme?.rtl && css`
    right: unset;
    left: 0;
  `}

  svg {
    font-size: 20px;
  }

  &:hover svg{
    font-size: 21px;
  }
`

export const Address = styled.p`
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 14px;
`

export const SelectStoreContainer = styled.div`
  button{ 
    background: transparent;
    color: ${({ theme }) => theme?.colors?.primary};
    border-color: ${({ theme }) => theme?.colors?.primary};
    height: 27px;
    line-height: 0;
    font-size: 14px;
    white-space: nowrap;
  }
`
