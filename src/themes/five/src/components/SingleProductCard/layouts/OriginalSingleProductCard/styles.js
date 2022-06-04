import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ informationPosition, imageShowed }) => informationPosition && css`
      ${informationPosition === 'left' || (informationPosition === 'right' && !imageShowed)
        ? `
          flex-direction: row;
        `
        : informationPosition === 'right'
        ? `
          flex-direction: row-reverse;
        `
        : informationPosition === 'top'
        ? `
          flex-direction: column;
          justify-content: center;
        `
        : `
          flex-direction: column-reverse;
          justify-content: center;
        `
      }
  `}
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 7.6px;
  cursor: pointer;
  position: relative;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;

  background: ${({ soldOut }) => soldOut ? '#6c757d33' : '#FFF'};

  @media (min-width: 576px) {
    margin: 10px;
    width: calc(100% - 40px);
  }

  ${({ isCartOnProductsList }) => isCartOnProductsList ? css`
    @media (min-width: 993px) {
      width: calc(50% - 40px);
      margin: 10px 20px 10px 0px;
      ${props => props.theme?.rtl && css`
        margin: 10px 0px 10px 20px;
      `}
    }
  ` : css`
    @media (min-width: 681px) {
      width: calc(49% - 40px);
    }

    @media (min-width: 1200px) {
      width: calc(33% - 40px);
      margin: 10px 20px 10px 0px;
      ${props => props.theme?.rtl && css`
        margin: 10px 0px 10px 20px;
      `}
    }
  `}
`

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  background: #495057 0% 0% no-repeat padding-box;
  padding: 5px 10px;
  top: 7px;
  border-radius: 2px 0px 0px 2px;
  right: 0px;
  color: white;
  font-size: 12px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}
  &:first-letter {
    text-transform: uppercase;
  }

  ${({ isBottom }) => isBottom && css`
    bottom: 7px;
    top: initial;
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ informationPosition }) => informationPosition && css`
      ${informationPosition === 'top' || informationPosition === 'bottom' ? 'align-items: center;' : ''}
    `
  }

  max-width: calc(100% - 90px);
  > * {
    margin: 3px;
  }
  > svg {
    margin: auto;
  }
  h1 {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: #909BA9;
    text-align: left;
    font-size: 10px;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: pre-wrap;
  }

  span {
    color: ${props => props.theme.colors.darkTextColor};
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 12px;
    }

    span {
      font-size: 14px;
    }
  }
`

export const WrapLogo = styled.div`
  position: relative;
  max-width: 86px;
  max-height: 86px;
  height: 86px;
  width: 86px;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
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

export const RibbonBox = styled.div`
  position: absolute;
  padding: 2px 8px;
  box-sizing: border-box;
  z-index: 10;
  color: ${props => props.theme.colors.colorTextSignForm};
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  top: -4px;
  right: -3px;
  background-color: ${props => props.theme.colors.primary};
  max-width: 50px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  ${props => props.theme.rtl && css`
    left: -3px;
    right: initial;
  `}

  ${({ bgColor }) => bgColor && css`
    background-color: ${bgColor};
  `}

  ${({ isRoundRect }) => isRoundRect && css`
    border-radius: 7.6px;
  `}

  ${({ isCapsule }) => isCapsule && css`
    border-radius: 50px;
  `}
`
