import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  padding: 25px 35px;
  border-bottom: 1px dashed ${props => props.theme.colors.grayMedium};
  justify-content: space-between;

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;
    background-color: ${props => props.theme.colors.third};
  }

  > svg {
    color: ${props => props.theme.colors.secundary};
  }
  
  @media (min-width: 681px) {
    justify-content: initial;
    padding: 20px;
    border-radius: 7.6px;
    border-bottom: none;
    margin: 10px;
    flex-direction: column;
    align-items: initial;

    > svg {
      display: none;
    }
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.colors.secundary};
    margin: 0px;
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

  width: calc(100% - 150px);

  @media (min-width: 681px) {
    width: 100%;

    h1 {
      padding-top: 10px;
      text-align: center;
    }
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
  position: relative;
  width: 90px;
  @media (min-width: 681px) {
    width: 100%;
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
  width: 100%;
  padding-top: 100%;
  border-radius: 7.6px;

  ${({ isSkeleton }) => isSkeleton && css`
    > span {
      position: absolute;
      width: 100%;
      top: 0;
      height: 100%;

      span {
        height: 100%;
      }
    }
  `}
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
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
  z-index: 1;
  top: -10px;
  ${props => props.theme?.rtl ? css`
    left: -10px;
  ` : css`
    right: -10px;
  `}
`
