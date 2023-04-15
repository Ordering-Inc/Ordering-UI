import styled, { css } from 'styled-components'
import React from 'react'
export const Container = styled.div`
  display: flex;
  width: 100%;
`
export const WrappSumarry = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (min-width: 1024px) {
    width: 40vw;
    padding: 2vw;
    height: calc(100vh - 75px);
    ${({ skeleton }) => skeleton
      ? css`
         background-color: transparent; 
        `
      : css`
         background-color: ${props => props.theme.colors.primaryDarkBackground};
      `
    } 
    ${({ skeleton }) => skeleton && css`
      padding: 20px 5%;
      align-items: flex-start;
    `}    
  }
`
export const WrappContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 5%;
  box-sizing: border-box;
 
  @media (min-width: 1024px) {
    width: 60vw;
    height: calc(100vh - 75px);
    overflow-y: scroll;
  }

  .selected-option {
    z-index: 0;
  }
`
export const WrapperUserDetails = styled.div`
  width: 100%;
`
export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 20px;
  flex-wrap: wrap;
`
export const BusinessDetailsContainer = styled(UserDetailsContainer)`
  div {
    h1 {
      text-transform: capitalize;
      margin: 0px;
      font-size: 24px;
    }
  }
`
export const BusinessDetailInfo = styled.div`
  h2 {
    color: ${props => props.theme.colors.fontSecundary};
    font-weight: 200;
    margin: 0px 0 10px;
  }
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h2 {
    color: ${props => props.theme.colors.fontSecundary};
    font-weight: 200;
    margin: 0px 0 10px;
  }
  .selected-option {
    font-weight: 300;
  }
`
export const DriverTipContainer = styled(PaymentMethodContainer)``
export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  h2 {
    color: ${props => props.theme.colors.fontSecundary};
    font-weight: 200;
    margin: 0px 0 10px;
  }
`
export const WrapperPlaceOrderButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 513px) {
    position: relative;
    padding: 0px;
    margin-bottom: 15px;
  }

  button {
    width: 45%;
    padding: 5px 20px;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
`
export const WarningMessage = styled.div`
  width: 100%;
  height: fit-content;
  max-height: fit-content;
  min-height: 150px;
  background-color: #F2BB40;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: 10px;
  position: relative;
  svg {
    position: absolute;
    font-size: 30px;
    top: 0;
    left: 0;
    margin: 11px;
    ${props => props.theme?.rtl && css`
        right: 0;
        left: initial;
    `}
  }
  h1 {
    font-size: 20px;
    margin: 0px 60px;
    text-align: center;
  }
`
export const NotFoundImage = styled.div`
  max-width: 300px;
  img {
    width: 300px;
  }
`
export const CartsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  @media (min-width: 381px) {
    width: 80%;
  }
`
export const WarningText = styled.p`
  margin: 10px auto;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
export const WrapBusinessLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const BusinessLogoStyled = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 65px;
  border-radius: 5px;
  border: 1px solid #909090;
`
export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}
export const BusinessName = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
  span:first-child {
    color: ${props => props.theme.colors?.grayColor};
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.fontSecundary};
  }
  span:last-child {
    font-weight: 500;
    font-size: 20px;
    color: #fff;
  }
`
export const ConfirmInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  color: #fff;
  margin-bottom: 10px;
  .confirmInfo-title{    
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    width: 100%;
  }
  h4 {
    margin: 10px 0;
  } 
`
export const InfoWrapper = styled.div`
  display: flex;
  svg {
    font-size: 24px;
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
  svg path {
    fill: ${props => props.theme.colors.fontSecundary};
  }
`

export const MomentWrapper = styled.div`
`

export const SectionTitle = styled.div`
  display: flex;
  width: 100%;
  h2 {
    font-size: 18px;
    line-height: 21px;
    color: #495057;
    font-weight: 300;
  }
`
