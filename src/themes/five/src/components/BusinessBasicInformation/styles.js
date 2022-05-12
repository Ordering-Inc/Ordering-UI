import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 324px;
  height: 324px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 7.6px;

  ${props => props.isSkeleton && css`
    background-color: #cccccc;
  `}

  ${props => props.bgimage && !props.isClosed && css`
    background-image: url(${props.bgimage});
  `}

  ${props => props.bgimage && props.isClosed && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage});
  `}

  h1 {
    color: #FFF;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 10px;
    padding: 0;
  }

  @media (min-width: 490px) {
    justify-content: flex-start;
  }
`

export const BusinessContent = styled.div`
  border-radius: 10px;
  margin: 10px;
  max-height: 124px;
  width: 124px;

  @media (min-width: 426px) {
    margin: 25px;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 124px;
  max-height: 124px;
  height: 124px;
  width: 124px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 124px;
  border-radius: 7.6px;
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
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right:5px;
  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0;
  `}

  .type {
    font-size: 14px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0 0 5px 0;
  }

  .preorder-Reviews {
    span {
      user-select: none;
      cursor: pointer;
      font-size: 14px;
      color: ${props => props.theme?.colors.primary};
      text-decoration: underline;
      &:not(:last-child) {
        margin-right: 5px;
        ${props => props.theme?.rtl && css`
          margin-left: 5px;
          margin-right: 0;
        `}
      }

      &.dot {
        font-size: 12px;
        text-decoration: none;
        color: #909BA9;
      }
    }
  }
`

export const BusinessInfoContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const BusinessInfoContent = styled.div``

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    input {
      width: 100%;

      @media (min-width: 500px) {
        width: 250px;
      }
    }
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }

  #select-input {
    background-color: transparent !important;
    border: none;
    color: #748194 !important;

    #list {
      border-radius: 8px;
    }
  }
`

export const BusinessDetail = styled.div`
  display: flex;
  align-items: center;

  h5 {
    font-size: 14px;
    color: #909BA9;
    margin: 0 5px 0 0;
    font-weight: normal;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}

    span {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }
  }

  .review {
    color: #909BA9;
    margin: 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 15px;
      margin-bottom: 1px;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }

    p {
      font-size: 14px;
      margin: 0px;
    }
  }

  .dot {
    color: #909BA9;
    font-size: 12px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  ${({ isSkeleton }) => isSkeleton && css`
    > span {
      display: flex;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }
  `}
`

export const BusinessMoreDetail = styled.div`
  top: 30px;
  right: 30px;
  position: absolute;
  min-width: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: white;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin: 0 0 10px 0;
  }
`

export const RibbonBox = styled.div`
  padding: 2px 8px;
  box-sizing: border-box;
  z-index: 10;
  color: ${props => props.theme.colors.colorTextSignForm};
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  background-color: ${props => props.theme.colors.primary};
  max-width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-left: 5px;
  margin-bottom: 10px;

  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 5px;
  `}

  ${({ bgColor }) => bgColor && css`
    background-color: ${bgColor};
  `}

  ${({ isRoundRect }) => isRoundRect && css`
    border-radius: 7.6px;
  `}

  ${({ isCapsule }) => isCapsule && css`
    border-radius: 50px;
  `}
`
