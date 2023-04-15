import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  margin: 20px 20px;
  width: calc(100% - 40px);

  @media (min-width: 681px) {
    width: calc(50% - 40px);
  }

  @media (min-width: 993px) {
    width: calc(33% - 40px);
    ${({ isPickup }) => isPickup && css`
      width: calc(100% - 40px);
    `}
  }
`

export const WrapperBusinessCard = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`

`

const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 175px;
  justify-content: center;
  align-items: center;

  h1 {
    color: #FFF;
    opacity: 0.7;
  }

  @media (min-width: 481px) {
    min-height: 200px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const BusinessTags = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 15px;
  width: calc(100% - 35px);

  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #FFC917;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  span {
    background-color: #6C6C6C;
    font-size: 12px;
    color: #FFF;
    padding: 8px;
    border-radius: 10px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
    ` : css`
        margin-right: 0px;
    `
    }
    }
  }
`

export const BusinessContent = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 30px 20px 20px;
`

export const WrapperBusinessLogo = styled.div`
  align-self: center;
  width: 65px;
  height: 65px;
  min-height: 65px;
  max-width: 65px;

  ${({ isSkeleton }) => isSkeleton && css`
    width: auto;
    height: auto;
  `}

  @media (min-width: 481px){
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
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
  border-radius: 10px;

  @media (min-width: 481px){
    width: 100%;
    height: 100%;
    min-height: 75px;
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

export const BusinessInfo = styled.div`
  display: flex;
  width: 100%;
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;

  button {
    width: 186px;
    height: 48px;
    background-color: transparent;
  }

  .reviews {
    display: flex;
    align-items: center;
    svg {
      margin-right: 3px;
      font-size: 22px;
      color: #414954;      
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    polygon {
      fill: #414954;
    }
    }
  }


  div {
    display: flex;
    justify-content: space-between;
    p {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      img {
        margin-right: 4px;
        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
       `}
      }
    }
    p.bold {
      font-weight: bold;
    }
  }
  
  @media (min-width: 481px){
    font-size: 16px;
  }

  @media (min-width: 1201px) {
    width: 95%;
  }
`

export const BusinessName = styled.h6`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${props => props.theme.colors.primaryDark};
`

export const Categories = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #6C6C6C;

  @media (min-width: 481px) {
    font-size: 16px;
  }
`

export const Medadata = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 12px;
  ${({ isCustomerMode }) => isCustomerMode && css`
    > div {
      flex-direction: column;
    }
  `}
  p {
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
  }

  @media (min-width: 481px) {
    font-size: 14px;
  }
`

export const CallCenterInformation = styled.div`
  display: flex;
  flex-direction: column;
  div{
    justify-content: space-evenly;
  }
`

export const CallCenterInformationBullet = styled.div`
  display: flex;
  padding: 2px;
  margin-bottom: 2px;
  border-radius: 16px;
  background: ${({ bgcolor }) => bgcolor};
  width: 50px;
  color: #fff;
  svg{
    font-size: 18px;
  }
`
export const BuinessMeta = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  margin: 9px 0 27.8px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const MetaItem = styled.span`

`
