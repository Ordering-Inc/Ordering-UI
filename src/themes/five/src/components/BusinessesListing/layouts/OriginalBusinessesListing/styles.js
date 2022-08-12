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
  display: flex;
  justify-content: flex-end;

  svg{
    align-self: center;
    cursor: pointer;
    font-size: 26px;
    color: ${props => props.theme?.colors?.primary};
    margin-left: 10px;
  }
  button {
    width: 250px;
    margin-left: 10px;
  }
  ${({ isCustomLayout, isCustomerMode }) => isCustomLayout && css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%; 
    padding: 0 20px;
    ${isCustomerMode ? css`
      margin-right: 20px;
    ` : css`
      margin: 0 auto;
    `}
    svg {
      align-self: auto;
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
  ${({ isCustomerMode }) => isCustomerMode ? css`
    font-size: 18px;
    margin: 0px 20px;
  ` : css`
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 42px 20px 5px 20px;
  `}
`

export const BusinessHeroImgStyled = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 230px;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  @media (min-width: 450px) {
    height: 370px;
  }

  @media (min-width: 821px) {
    height: 650px;
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

export const HightestRatedWrapper = styled.div`
  padding: 50px 0 30px 0;
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: 100%;
`

export const OrderProgressWrapper = styled.div`
  padding: 45px 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BusinessCityList = styled.div`
  
`

export const CityItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0px;
  border-top: 1px solid #E9ECEF;
  span {
    margin-right: 15px;
  }
  .city-checked{
    color: ${props => props.theme.colors.primary};
  }
`

const BusinessLogoStyled = styled.div`
  display: flex;
  min-width: 75px;
  min-height: 75px;
  height: 75px;
  width: 75px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 7.6px;
  margin-right: 15px;
  cursor: pointer;
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

export const BusinessLogosContainer = styled.div`
  display: flex;
  overflow: auto;
  padding-bottom: 10px;
  span {
    margin-right: 15px;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
`
