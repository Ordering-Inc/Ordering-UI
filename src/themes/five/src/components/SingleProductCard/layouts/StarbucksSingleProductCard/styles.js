import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  background: ${({ soldOut }) => soldOut ? '#B8B8B8' : '#FFF'};
  padding-bottom: ${({ soldOut }) => soldOut ? '0' : '20px'};

  @media (min-width: 681px) {
    display: flex;
  }
`

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  background: #D6D6D6 0% 0% no-repeat padding-box;
  border-radius: 23px;
  padding: 5px 10px;
  top: 8px;
  right: 6px;
  text-transform: uppercase;
  font-size: 14px;
  ${props => props.theme?.rtl && css`
    left: 6px;
    right: initial;
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: #263238;
  }

  p {
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '200'};
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${({ soldOut, theme }) => soldOut ? lighten(0.05, theme.colors.primary) : theme.colors.primary};
    font-weight: bold;
  }

  p, span {
    font-size: 13px;
  }

  @media (min-width: 768px) {
    height: 130px;
    h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }
  }

  @media (min-width: 1024px) {
    height: 150px;
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }

    span {
      font-size: 15px;
    }
  }

  @media (min-width: 1200px) {
    height: 195px;
  }
`

export const WrapLogo = styled.div`
  ${props => props.theme?.rtl && css`
    margin-left: 25px;
    margin-right: 0px;
  `}

  @media (min-width: 768px) {
    margin-right: 15px;
  }
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 75px;
  width: 130px;
  height: 130px;
  ${({ imgScale, imgSize }) => (imgScale && !isNaN(Number(imgScale))) && css`
    width: ${130 * Number(imgScale)}px;
    height: ${130 * Number(imgScale)}px;
  `
  }
  background-color: #dddddd;
  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;
    ${({ imgScale, imgSize }) => (imgScale && !isNaN(Number(imgScale))) && css`
      width: ${150 * Number(imgScale)}px;
      height: ${150 * Number(imgScale)}px;
    `
    }
  }

  @media (min-width: 1200px) {
    width: 195px;
    height: 195px;
    ${({ imgScale, imgSize }) => (imgScale && !isNaN(Number(imgScale))) && css`
      width: ${195 * Number(imgScale)}px;
      height: ${195 * Number(imgScale)}px;
    `
    }
  }
`
export const CardLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}

export const ProductInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    ${({ informationPosition }) => informationPosition && css`
        ${informationPosition === 'right'
          ? 'flex-direction: row-reverse;'
          : 'flex-direction: row;'
        }
    `}
    width: 70%;
    border-right: 2px solid ${props => props.theme.colors.borderColor};
    ${props => props.theme?.rtl && css`
      border-right: none;
      border-left: 2px solid ${props => props.theme.colors.borderColor};
    `}
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }

`
export const CartAction = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-around;
  
  button {
    padding: 7px 0;
    text-transform: uppercase;
    background-color: transparent;
    @media (min-width: 1440px) {
      padding: 11px 0;
    }
  }
  @media (min-width: 768px) {
    width: 30%;
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-right: 15px;
      padding-left: 0;
    `}
  }
  @media (min-width: 1024px) {
    height: 155px;
  }
  @media (min-width: 1200px) {
    height: 195px;
  }
`

export const ProductCost = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  color: ${props => props.theme.colors.primary};
  justify-content: ${({ textLeft }) => textLeft ? 'flex-start' : 'center'};
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${({ isSoldOut }) => isSoldOut ? '10px' : '0px'};
  ${props => props.theme?.rtl && css`
    margin-right: ${({ isSoldOut }) => isSoldOut ? 'unset' : '0px'};
    margin-left: ${({ isSoldOut }) => isSoldOut ? '10px' : '0px'};
 `}
  span {
    font-size: 16px;
    line-height: 26px;
    color: #000000;
  }
  input {
    width: 85px;
    height: 38px;
    box-sizing: border-box;
    text-align: center; 

    @media (min-width: 768px) {
      width: 45px;
      height: 33px;
    }
    
    @media (min-width: 1200px) {
      width: 85px;
      height: 38px;
    }
  }
`
