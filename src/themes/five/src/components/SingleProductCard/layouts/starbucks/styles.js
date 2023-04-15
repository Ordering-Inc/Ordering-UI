import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  ${({ isShowAddButt }) => css`
    min-height: ${isShowAddButt ? '230px' : '200px'};
    max-height: ${isShowAddButt ? '230px' : '200px'};
  `}
  background: ${({ soldOut }) => soldOut ? '#6c757d33' : '#FFF'};
  padding: 10px;
  border-radius: 7.6px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  ${({ productsRows }) => productsRows ? css`
    width: ${() => productsRows === 3 ? 'calc(33% - 20px)' : 'calc(50% - 20px)'};
    margin: 10px;
  ` : css`
  width: 100%;
  margin: 10px 0px;

  @media (min-width: 380px) {
    margin: 10px;
    width: calc(100% - 20px);
  }
  @media (min-width: 480px) {
    margin: 10px;
    width: calc(50% - 20px);
  }
  ${({ isCartOnProductsList }) => isCartOnProductsList ? css`
    @media (min-width: 993px) {
      width: calc(25% - 20px); // 4 per row
      margin: 10px 20px 10px 0px;
      ${props => props.theme?.rtl && css`
        margin: 10px 0px 10px 20px;
      `}
    }
  ` : css`
    @media (min-width: 681px) {
      width: calc(33% - 20px);
    }

    @media (min-width: 993px) {
      width: calc(25% - 20px);
    }

    @media (min-width: 1440px) {
      width: calc(20% - 20px);
      margin: 10px 20px 10px 0px;
      ${props => props.theme?.rtl && css`
        margin: 10px 0px 10px 20px;
      `}
    }
  `}
  
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
  width: 100%;
  > * {
    margin: 3px;
  }
  ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'pfchangs' && css`
    
  `}
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
    text-align: center;
  }

  span {
    color: ${props => props.theme.colors.darkTextColor};
    font-size: 14px;
  }

  ${({ oneLine }) => oneLine && css`
    p {
      -webkit-line-clamp: 1;
    }
  `}

  h1 {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.colors.headingColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    svg {
      color: ${props => props.theme.colors.danger500};
      font-size: 16px;
    }
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
  max-width: 100px;
  max-height: 100px;
  height: 100px;
  align-self: center;
  ${({ isBgimage }) => isBgimage && css`
    width: 100px;
  `}
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
  min-height: 100px;
  border-radius: ${({ theme }) => theme?.business_view?.components?.products?.components?.photo?.components?.style?.borderRadius || '10px'};
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
  justify-content: center;
  .off-price {
    ${({ hasOffer }) => !hasOffer && css`
      display: none;
    `}
    font-size: 10px;
    color: #909BA9;
    text-decoration: line-through;
    text-align: center;
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
  color: #fff;
  position: absolute;
  left: 100%;
  bottom: 100%;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
  transform: translate(-20px, 80%);
  z-index: 100;
  span{
    color: #fff
  }
  @media (min-width: 768px) {
    transform: translate(-50%, 80%);
  }
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
  background-color: ${props => props.theme.colors.primary};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-width: 70px;
  word-break: break-all;

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

export const LastOrder = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 400;
  font-size: 10px !important;
  margin: 0px 3px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: ${props => props.theme.colors.headingColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      color: ${props => props.theme.colors.danger500};
      font-size: 16px;
    }
  }
`
export const SkeletonCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  > * {
    margin: 3px;
  }
`
export const SkeletonCardLogo = styled.div`
  max-width: 100px;
  max-height: 100px;
  width: 100px;
  height: 100px;
  margin-left: 5px;
  span{
    border-radius: ${({ theme }) => theme?.business_view?.components?.products?.components?.photo?.components?.style?.borderRadius || '10px'};
  }
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`

export const AddButton = styled.div`
  display: flex;
  width: 100%;
  
  svg {
    width: 30px;
    height: 30px;
    color: #016341;
  }
`

export const SkeletonWrapper = styled.div`
  text-align: center;
`
