import styled, { css } from 'styled-components'
import React from 'react'

export const OrderTypeSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: left;
  padding-top: 10px;
  padding: 30px 40px;
  box-sizing: border-box;
`

export const OrderTypeListItemContainerStyled = styled.div`
  border-radius: 7.6px;
  margin-bottom: 25px;
  background: rgba(0,0,0,0.2);
  cursor: pointer;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

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

export const OrderTypeWrapper = styled.div`
  border-radius: 7.6px;
  background: rgba(0,0,0,0.5);
`

export const OrderTypeTitle = styled.h2`
  font-weight: 600;
  font-size: 12px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 5px;
  padding: 0px 40px;
  padding-top: 20px;
`

export const OrderTypeDescription = styled.p`
  font-size: 10px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0px 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const OrderStartWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;

  span {
    color: #FFFFFF;
    font-size: 10px;
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
  font-size: 18px;
  color: ${props => props.theme.colors.darkTextColor};
  text-align: left;
  margin: 0
`

export const Logo = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 20px;
  img {
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
    border-radius: 7.6px;
    width: 100%;
    box-shadow: 0px 1px 4px 0px #0000001A;
  }
`

export const TypeContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  button: {
    width: 100%;
    border-radius: 7.6px;
    height: 44px;
  }
  h1{
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.darkTextColor};
    margin-bottom: 25px;
  }
  label{
    font-size: 12px;
    margin-bottom: 10px;
  }
`

export const ModalIcon = styled.div`

`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  input{
    width: 100%;
    border-radius: 7.6px;
    border: 1px solid #DEE2E6;
  }
`

export const Table = styled.div`
 display: flex;
 flex-direction: column;
 h2{
   font-weight: 500;
   font-size: 16px;
   display: flex;
   align-items: center;
   color: ${props => props.theme.colors.darkTextColor};
   margin-bottom: 20px;
 }
`

export const PlaceName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
  font-weight: 400;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 10px;
  p{
    font-size: 10px;
    color: ${props => props.theme.colors.darkTextColor};
  }
  span{
    font-size: 12px;
    color: #909BA9;
  }
`

export const PlaceNumber = styled.div`

`

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const LogoutButtonContainer = styled.div`
  position: relative;
  top: 3px;
  margin-left: 10px
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`
