import React from 'react'
import styled, { css } from 'styled-components'

export const PromotionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 993px){
    width: 60%;
    padding: 0px;
  }
`

export const PromotionTitle = styled.h1`
  align-self: flex-start;
`

export const SingleOfferContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  p, h2{
    margin: 0;
  }
  h2{
    font-size: 16px;
  }
  p{
    font-size: 12px;
    font-weight: 400;
  }

  button{ 
    height: 45px;
    font-size: 14px;
  }

  @media (min-width: 720px){
    button{
      font-size: 16px;
    }
  }
`

export const Description = styled.p`
  color: #909BA9;
`
export const ExpiresAt = styled.p`
  color: #414954;
`

export const OfferInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  ${({ isSkeleton }) => isSkeleton && css`
    width: 100%;
  `}
  h2{
    font-size: 14px;
  }
  @media (min-width: 720px){
    width: 80%;
    h2{
      font-size: 16px;
    }
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 20px;
  .search-bar {
    justify-content: flex-start;
    input {
      width: 100%;
    }
  }
  .clear {
    right: 0;
  }
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
  border-radius: 7.6px;

  @media (min-width: 481px){
    min-width: 75px;
    min-height: 75px;
    height: 75px;
    width: 75px;
    min-height: 75px;
    ${({ isCustomerMode }) => isCustomerMode && css`
      width: 100%;
      height: 100%;
    `}
  }
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

export const SingleBusinessOffer = styled.div`
  display: flex;
  button{
      font-size: 12px;
    }
  @media (min-width: 720px){
    button{
      font-size: 16px;
    }
  }
`

export const AvailableBusinesses = styled.div`
  display: flex;
  white-space: pre;
  width: 80%;
  p:nth-child(2){
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const OfferData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p{
    color: #909BA9;
    margin: 3px;
    font-size: 14px;
  }
`

export const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    margin-bottom: 20px;
  }
  p{
    font-size: 16px;
  }
`

export const ValueOfOffer = styled.div`
  p{
    font-size: 16px;
  }
  span{
    font-size: 20px;
  }
`

export const BusinessInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  button{
    height: 44px;
  }
  p{
    font-size: 12px;
    width: 50%;
    text-align: left;
  }
  @media(min-width: 720px){
    p{
      font-size: 16px;
      width: 70%;
    }
  }
`

export const OfferView = styled.div`
  margin-top: 20px;
  text-align: center;
  h2 {
    font-size: 16px;
  }
  @media(min-width: 720px){
    h2 {
      font-size: 20px;
    }
  }
`
