import styled, { css } from 'styled-components'
import React from 'react'

export const OrderTypeSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: left;
  padding-top: 10px;
  padding: 10px;
  box-sizing: border-box;
`

export const OrderTypeListItemContainerStyled = styled.div`
  border-radius: 7.6px;
  margin-bottom: 25px;
  background: #000000;
  cursor: pointer;
  width: 100%;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  ${({ active }) => active && css`
    opacity: 0.6;
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
  padding: 0px 15%;
  padding-top: 20px;
`

export const OrderTypeDescription = styled.p`
  font-size: 14px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0px 15%;
`

export const OrderStartWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding-bottom: 20px;
  padding-left: 15%;

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
`

export const OrderTypeListTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.colors.darkTextColor};
`

export const Logo = styled.div`
  width: 65px;
  height: 65px;
  margin-bottom: 20px;
  img {
    width: 100%;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
  }
`

export const TypeContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 85%;
  button: {
    width: 100%;
  }
`

export const ModalIcon = styled.div`

`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  input{
    width: 100%;
  }
`

export const Table = styled.div`
 display: flex;
 flex-direction: column;
`

export const PlaceName = styled.div`
  opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
`

export const PlaceNumber = styled.div`

`

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
