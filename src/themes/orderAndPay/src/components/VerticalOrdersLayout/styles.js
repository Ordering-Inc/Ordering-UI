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
  width: 64px;
  height: 64px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 7.6px;
    object-fit: contain;
    box-shadow: 0px 1px 4px 0px #0000001A;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  }
`

export const WrapperBusinessTitle = styled.div`
  width: 75%
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
  width: 40%;
  position: absolute;
  right: 0;
  text-align: right;
  padding-right: 40px;
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
