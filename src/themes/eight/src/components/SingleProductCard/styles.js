import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  cursor: pointer;
  position: relative;
  background: ${({ soldOut }) => soldOut ? '#B8B8B8' : '#FFF'};
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 7.6px;

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;
    background-color: ${props => props.theme.colors.third};
  }

  ${({ isCartOnProductsList }) => isCartOnProductsList ? css`
    @media (min-width: 993px) {
      width: calc(50% - 20px);
    }
  ` : css`
    @media (min-width: 681px) {
      width: calc(50% - 20px);
    }

    @media (min-width: 993px) {
      width: calc(33% - 20px);
    }
  `}
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
  h1 {
    font-size: 16px;
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '500'};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: ${props => props.theme.colors.secundary};
    margin: 0px;
    padding-top: 10px;
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

  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }

    span {
      font-size: 15px;
    }
  }
`

export const WrapLogo = styled.div`
  width: 100%;
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 75px;
  width: 100%;
  padding-top: 100%;
  border-radius: 7.6px;
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

export const QuantityContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
  position: absolute;
  left: 100%;
  bottom: 100%;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
  transform: translate(-50%, 50%);
`
