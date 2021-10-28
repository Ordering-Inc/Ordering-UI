import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  border-radius: 7.6px;
  border-radius: 10px;
  margin: 10px 20px;

  width: calc(100% - 40px);

  @media (min-width: 681px) {
    margin: 20px 20px;
    width: calc(50% - 40px);
  }

  @media (min-width: 993px) {
    width: calc(33% - 40px);
  }

  @media (min-width: 1200px) {
    width: calc(25% - 40px);
  }
`

export const WrapperBusinessCard = styled.div`
  height: 100%;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`
  border-radius: 10px;
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
  min-height: 145px;
  justify-content: center;
  align-items: center;
  border-radius: 7.6px 7.6px 0px 0px;

  h1 {
    color: #FFF;
    opacity: 0.7;
  }

  @media (min-width: 481px) {
    min-height: 165px;
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
    font-size: 11px;
    padding: 3px 8px;
    color: #748194;
    background: #DEE2E6;
    border-radius: 50px;
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
  flex-direction: column;
  justify-content: space-between;
  max-height: 170px;
  padding: 0 20px 20px 20px;

  @media (min-width: 481px){
    max-height: 150px;
  }
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

  @media (min-width: 1350px){
    width: calc(100% - 75px);
  }
`

export const BusinessInfoItem = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;

  div {
    display: flex;
    p {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
    `}
      text-transform: capitalize;
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p.bold {
      font-weight: bold;
    }
  }

  @media (min-width: 1201px) {
    width: 95%;
  }
`

export const BusinessName = styled.h6`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${props => props.theme.colors.darkTextColor};
`

export const Categories = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #6C6C6C;
  display: block !important;

  @media (min-width: 481px) {
    display: none !important;
  }
`

export const Medadata = styled.div`
  margin-top: 5px;
  display: flex;
  font-weight: 300;
  font-size: 12px;
  color: #909BA9;
  ${({ isCustomerMode }) => isCustomerMode && css`
    > div {
      flex-direction: column;
    }
  `}
  p {
    color: #909BA9;
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }

    span {
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
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

export const BusinessLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -20px;
  margin-bottom: 10px;
`

export const BusinessStarInfo = styled.div`
  display: flex;
  align-items: center;

  .reviews {
    display: flex;
    align-items: center;
    margin-top: 7px;
    svg {
      margin-right: 3px;
      font-size: 22px;
      color: #414954;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
    span {
      font-size: 15px;
      color: #414954;
    }
  }
`
