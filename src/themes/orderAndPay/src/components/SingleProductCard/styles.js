import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 10px;
  margin: 10px;
  border-radius: 7.6px;
  cursor: pointer;
  position: relative;
  border: ${({ soldOut }) => soldOut ? '1px solid #B8B8B8' : '1px solid #E9ECEF'};

  background: ${({ soldOut, theme }) => soldOut ? '#B8B8B8' : theme.colors.backgroundPage};

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  `}

  ${({ isCartOnProductsList }) => isCartOnProductsList ? css`
    @media (min-width: 993px) {
      width: calc(50% - 40px);
    }
  ` : css`
    @media (min-width: 993px) {
      width: calc(33% - 40px);
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
  max-width: calc(100% - 90px);
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 12px;
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '500'};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${props => props.theme.colors.darkTextColor};
    font-size: 12px;
  }

  p {
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '400'};
    text-align: left;
    font-size: 10px;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `};
    color: ${({ soldOut, theme }) => soldOut ? theme.colors.darkTextColor : theme.colors.textDisabled};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }

    span {
      font-size: 15px;
    }
  }
`

export const WrapLogo = styled.div`
  max-width: 86px;
  max-height: 86px;
  height: 86px;
  width: 86px;
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 86px;
  border-radius: 10px;
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

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  .off-price {
    font-size: 10px;
    color: #909BA9;
    margin-left: 5px;
    text-decoration: line-through;

    ${props => props.theme.rtl && css`
      margin-right: 5px;
      margin-left: 0;
    `}

    @media (min-width: 1024px) {
      font-size: 13px;
    }
  }
`
