import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
  max-height: 150px;
  height: 150px;
  box-shadow: 1px 1px 5px #00000029;
  border-radius: 9px;
  margin: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;

  width: calc(100% - 40px);

  @media (min-width: 681px) {
    width: calc(50% - 40px);
  }

  @media (min-width: 993px) {
    width: calc(33% - 40px);
    margin: 20px;
  }
`

export const WrapperBusinessCard = styled.div`
  border-radius: 10px;
  width: 100%;
`

export const BusinessTags = styled.div`
  display: flex;
  position: absolute;
  justify-content: ${({ isFeatured }) => isFeatured ? 'space-between' : 'flex-end'};
  align-items: center;
  top: 0;
  margin: 7px 15px;
  width: calc(100% - 35px);

  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
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
    padding: 4px 8px;
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
  padding: 10px;

  @media (min-width: 992px) {
    padding: 20px 15px;
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
  span {
    border-radius: 100%;
  }

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
  border-radius: 100%;
  border: 1px solid #CCCCCC;

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
  width: calc(100% - 65px);

  @media (min-width: 481px){
    width: calc(100% - 75px);
  }
`

export const BusinessInfoItem = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 10px;
  font-size: 12px;
  ${props => props.theme?.rtl && css`
    padding: 0px 10px 0px 5px;
  `}
  .reviews {
    display: flex;
    align-items: center;
    svg {
      margin-right: 3px;
      font-size: 22px;
      color: #FDC918;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
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

  @media (min-width: 1201px) {
    width: 95%;
  }

  @media (min-width: 481px){
    padding: 0px 5px 0px 16px;
    font-size: 16px;

    ${props => props.theme?.rtl && css`
        padding: 0px 16px 0px 5px;
    `}
  }
`

export const BusinessName = styled.h6`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
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

export const CLosedMark = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  ${({ isClosed }) => isClosed && css`
    background: rgb(0 0 0 / 30%);
    h1 {
      color: #FFF;
      text-transform: uppercase;
      font-size: 24px;
    }
  `}
`
