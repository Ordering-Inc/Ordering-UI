import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const SingleCard = styled.div`
  width: 100%;
  display: flex;
  max-height: 100px;
  height: auto;
  border: none;

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
    border-radius: 16px;
    margin-bottom: 15px;
  `}

  @media(min-width: 480px){
    height: 140px;
    ${props => (
      props.theme.colors.backgroundPage === '#FFF' ||
      props.theme.colors.backgroundPage === '#FFFFFF'
    ) && css`
      border-top: none !important;
    `}
    border-top: 1px solid #ccc;
  }
`

export const OrderPastContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 0;
  padding-right: 5px;
  min-width: 220px;

  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0px;
  `}
`

export const PastLogo = styled.div`
  width: 66px;
  height: 66px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: contain;
  }
  @media (min-width: 480px){
    width: 75px;
    height: 75px;
  }
`

export const WrapperBusinessTitle = styled.div`
  width: 95%
`

export const WrappButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;

  button {
    padding: 10px 0px;
    width: 100%;
  }

  button:hover{
    color: ${props => darken(0.07, props.theme.colors.primary)};
  }

  @media (min-width: 768px) {
    button {
      width: 60%;
    }
  }
`

export const OrderPrice = styled.div`
  width: 20%;
  h2{
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
  @media (min-width: 768px){
    h2{
      font-size: 16px;
    }
  }
`

export const OrderDetails = styled.div`
  display: flex;
  flex: 1
`
