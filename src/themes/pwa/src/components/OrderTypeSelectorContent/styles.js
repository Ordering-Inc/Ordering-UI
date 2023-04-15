import styled, { css } from 'styled-components'
import React from 'react'

export const OrderTypeSelectorContainer = styled.div`
  padding: 0;

  @media (min-width: 576px) {
    padding: 0 3px;
  }
`

export const OrderTypeListItemContainerStyled = styled.div`
  border-radius: 7.6px;
  margin-bottom: 25px;
  background: #000000;
  padding: 30px;
  cursor: pointer;
  opacity: 0.6;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  ${({ active }) => active && css`
    opacity: 1;
  `}
`

export const OrderTypeListItemContainer = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <OrderTypeListItemContainerStyled {...props} style={style}>
      {props.children}
    </OrderTypeListItemContainerStyled>
  )
}

export const OrderTypeTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 5px;
`

export const OrderTypeDescription = styled.p`
  font-size: 13px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 5px;
  @media (min-width: 576px) {
    margin-bottom: 20px;
    font-size: 14px;
  }
`

export const OrderStartWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-size: 13px;

  span {
    color: #FFFFFF;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  svg {
    font-size: 16px;
    color: #FFFFFF;
  }

  @media (min-width: 576px) {
    font-size: 14px;
  }
`

export const OrderTypeListTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  line-height: 21px;
  color: ${props => props.theme.colors.darkTextColor};
  margin: 0 0 30px;

  @media (min-width: 576px) {
    padding-left: 30px;
    font-size: 20px;
    ${props => props.theme.rtl && css`
      padding-right: 30px;
      padding-left: 0;
    `}
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
    
`
