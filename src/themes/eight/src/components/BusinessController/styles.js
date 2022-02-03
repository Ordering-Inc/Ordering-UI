import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  padding: 15px 0;

  ${({ isStore }) => isStore && css`
    width: 80%;
  `}

  background-image: linear-gradient(to right, ${props => props.theme.colors.grayMedium} 20%, rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 10px 2px;
  background-repeat: repeat-x;
  `

export const WrapperBusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const BusinessContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  flex: 1;

  ${({ isStore }) => isStore && css`
    justify-content: flex-start;
    width: 50%;
  `}
`

export const WrapperBusinessLogo = styled.div`
  width: 70px;
  height: 70px;
  min-height: 70px;
  max-width: 70px;
  ${({ isStore }) => isStore && css`
    margin-right: 10px;
  `}

  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid ${props => props.theme.colors.gray};
  `}
  border-radius: 50%;

  ${({ isSkeleton }) => isSkeleton && css`
    width: auto;
    height: auto;

    span {
      border-radius: 50%;
    }
  `}
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 70px;
  border-radius: 50%;
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
  width: calc(100% - 90px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`

export const BusinessName = styled.h6`
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${props => props.theme.colors.secundary};

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const Categories = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayDark};
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
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.grayDark};
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

export const BusinessActions = styled.div`
  ${({ isStore }) => isStore ? css`
    justify-content: flex-end;
    display: flex;
    align-items: center;
    width: 50%;
  ` : css`
    margin-top: 10px;
    ${props => props.theme?.rtl ? css`
      padding-right: 76px;
    ` : css`
      padding-left: 76px;
    `}
  `}

`

export const BusinessAddress = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayDark};
  margin-bottom: 10px;
`

export const GreenDataItem = styled.div`
  color: ${props => props.theme.colors.green};
  font-size: 14px;
  font-weight: 500;
`

export const BusinessClosed = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
`
