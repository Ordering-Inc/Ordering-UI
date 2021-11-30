import styled, { css } from 'styled-components'
import React from 'react'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const WrapperSearch = styled.div`
  margin: 10px 20px 0px;

  ${({ isCustomLayout }) => isCustomLayout && css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%; 
    padding: 0 20px;

    svg {
      font-size: 26px;
      color: ${props => props.theme?.colors?.primary};
      margin-left: 10px;
      cursor: pointer;
    }
    
    @media(min-width: 681px){
      width: 75%;
      padding: 0;
    }

    @media(min-width: 1201px){
      width: 50%;
    }
  `}
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const PreviousOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0px;
`

export const BusinessesTitle = styled.h1`
  font-size: 18px;
  margin: 0px 20px;
`
export const BusinessBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  @media (max-width: 481px) {
    margin-bottom: 0px;
  }
`

export const BusinessHeroImgStyled = styled.div`
  height: auto;
  width: 100%;
  height: calc(65vh - 98px);

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 821px) {
    height: 500px;
  }
`

export const BusinessHeroImg = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <BusinessHeroImgStyled {...props} style={style}>
      {props.children}
    </BusinessHeroImgStyled>
  )
}

export const BusinessFeatures = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`

export const AddressMenu = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #344050;
  font-weight: 600;
  border-radius: 50px;
  padding: 13px 19px;
  margin-bottom: 10px;
  svg {
    margin-right: 5px;
    color: #B1BCCC;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
  }
`
export const FeatureItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const ItemInline = styled.div`
  > span #select-input {
    background-color: #F8F9FA !important;
    border: none;
    border-radius: 7.6px;
    svg {
      font-size: 14px;
    }
    #list {
      background-color: #fff;
      border: none;
      border-radius: 7.6px;

      left: 0px;
      right: initial;

      ${props => props.theme.rtl && css`
        left: initial;
        right: 0px;
      `}
    }

    > div:first-child {
      font-size: 11px;
    }
  }

  .moment-popover {
    > div:first-child {
      font-size: 11px;
      padding: 4px 7px;
      svg {
        font-size: 14px;
      }
    }
  }
`

export const BusinessSearch = styled.div`
    display: flex;
    background-color: #f8f9fa;
    align-items: center;
    padding: 7px;
    border-radius: 7px;
    font-size: 11px;
    svg {
      font-size: 15px;
    }
`

export const BusinessItemsWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`
export const BusineessItems = styled.div`
  margin-top: 10px;
`
export const BusinessItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`

export const WrapperBusinessLogo = styled.div`
  align-self: center;
  width: 50px;
  height: 50px;
  min-height: 50px;
  max-width: 50px;
  ${({ isSkeleton }) => isSkeleton && css`
    width: auto;
    height: auto;
  `}
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

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 7.6px;
`
export const BusinessName = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: #344050;
  font-weight: 600;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;

`
export const BusinessInfo = styled.div`
  width: calc(100% - 60px);
  margin-left: auto;
  margin-top: 3px;
`
export const BusinessMeta = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  p {
    margin: 0;
    font-size: 12px;
    svg {
      font-size: 8px;
      margin: 0 3px;
    }
  }
`

export const SearchTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-top: -5px;
  margin-bottom: 15px;
`
