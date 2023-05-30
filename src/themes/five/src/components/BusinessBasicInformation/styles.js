import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 324px;
  height: 150px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 150px;
  justify-content: start;
  align-items: flex-end;

  ${props => props.isSkeleton && css`
    background-color: #cccccc;
  `}

  ${props => props.bgimage && props.isChew && css`
    height: 180px;
  `}

  ${props => props.bgimage && (!props.isClosed && !props.isChew) && css`
    background-image: url(${props.bgimage});
  `}

  ${props => props.bgimage && (props.isClosed && !props.isChew) && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage});
  `}

  ${props => props.bgimage && props.isChew && css`
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${props.bgimage});
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

  @media (min-width: 576px) {
    border-radius: 7.6px;
    height: 324px;
    min-height: 200px;
  }


`

export const BusinessContent = styled.div`
  margin: 0;
  margin-left: 35px;
  margin-bottom: -35px;
  max-height: 70px;
  width: 70px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (min-width: 576px) {
    border-radius: 10px;
    margin: 10px;
    max-height: 124px;
    width: 124px;
  }

  @media (min-width: 768px) {
    margin: 25px;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 70px;
  max-height: 70px;
  width: 70px;
  height: 70px;

  @media (min-width: 576px) {
    max-width: 124px;
    max-height: 124px;
    height: 124px;
    width: 124px;
  }
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
  min-height: 70px;
  border-radius: 7.6px;
  @media (min-width: 576px) {
    min-height: 124px;
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
      &:not(:last-child) {
        margin-right: 5px;
        ${props => props.theme?.rtl && css`
          margin-left: 5px;
          margin-right: 0;
        `}
      }
      &:hover {
        text-decoration: underline;
      }

      &.dot {
        font-size: 12px;
        text-decoration: none;
        color: #909BA9;
      }
    }
  }

  ${({ isInfoShrunken }) => isInfoShrunken && css`
    color: #FFFFFF;
    span, p, h5, svg {
      color: #FFFFFF !important;
    }
  `}
`

export const BusinessInfoContainer = styled.div`
  width: ${props => props.isChew && '100%'};
  padding-top: 40px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: ${props => props.isFlexEnd ? 'flex-end' : 'space-between'};
  flex-direction: column;
  box-sizing: border-box;
  align-items: ${props => props.isFlexEnd ? 'flex-end' : 'space-between'};

  #business_name {
    ${({ isChew }) => isChew && css`
        background: none;
      `
    }
  }

  @media (min-width: 576px) {
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 25px;
    margin-left: ${props => props.isChew && '25px'};
  }
`

export const BusinessInfoContent = styled.div`
  width: 100%;
`

export const SearchWrapper = styled.div`
  display: flex;
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  z-index: 1002;

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
  &.fixed-search {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10001;
    width: fit-content;
    margin-top: 0px;
    background-color: ${props => props.theme.colors.backgroundPage};
    padding: 10px;
  }

  @media (min-width: 993px) {
    &.fixed-search {
      left: 0;
      width: 100vw;
      z-index: 10000;
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
  ${({ position }) => position ? css`
    width: 100% !important;
    justify-content: flex-end !important;
    top: 0px;
    right: 0px;
  ` : css`
    top: 30px;
    right: 30px;
  `}
  position: ${props => props.position ?? 'absolute'};
  min-width: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${props => props.position ? 'black' : 'white'};
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 10px 0;
    font-weight: 600;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: ${({ theme }) => theme?.colors?.backgroundPage};
    &.fixed-name {
      z-index: 10001;
      position: fixed;
      top: 0;
      padding: 10px 0;
      font-size: 18px;
      ${({ isCustomLayout }) => !isCustomLayout ? css`
        width: calc(100vw - 200px);
        ${props => props.theme?.rtl ? css`
        right: 50px;
        ` : css`
        left: 50px;
        `}
      ` : css`
      ${props => props.theme?.rtl ? css`
          right: 10px;
          ` : css`
          left: 10px;
        `}
      `}
    }
    @media (min-width: 768px) {
      font-size: 32px;
    }
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

  ${({ colorText }) => colorText && css`
    color: ${colorText ? 'black' : 'white'};
  `}

  ${({ borderRibbon }) => borderRibbon && css`
    border: 1px solid ${borderRibbon ? 'black' : 'white'};
  `}
`
export const SearchIconWrapper = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.gray200};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 18px;
  }
`

export const SearchComponentContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 60px;
  color: ${({ theme }) => theme.colors.white};
  #select-input {
    color: #FFFFFF !important;
  }
  svg {
    color: #FFFFFF;
  }
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-left: -3px;
  ${props => props.theme.rtl && css`
    margin-right: -3px;
    margin-left: 0px;
  `}
`

export const CategorySelectedContainer = styled.div`
  display: inline;
  margin-left: 10px;
  color: ${({ theme }) => theme?.colors?.primary};
  padding-right: 5px;
  cursor: pointer;
  p{
    margin: 0;
  }
  svg {
    position: relative;
    top: 2px;
    margin-right: 3px;
    width: 14px;
    height: 14px;
  }
`

export const IconWrapper = styled.a`
  margin: 0px 3px 10px 3px;
  border-radius: 3px;
  border: 0.5px solid ${props => props.theme.colors.gray200};
  width: 27px;
  height: 27px;
  min-width: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;

  ${({ isSkeleton }) => isSkeleton && css`
    border: none;
  `}

  svg {
    height: 18px;
    font-size: 18px;
    transition: all 0.2s ease-in;
    color: ${props => props.theme.colors.headingColor};
  }
  &:hover {
    background-color: ${props => props.theme.colors.gray200};
    svg {
      transform: scale(1.07);
    }
  }
`

export const BusinessInfoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export const WrapperFloatingSearch = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  background: rgba(0,0,0,0.2);
  top: 80px;
  right: 10px;
  width: 80%;
  border-bottom: 1px solid #FFFFFF;
  #select-input {
    color: #FFFFFF !important;
    background: transparent;
  }
  svg, span {
    color: #FFFFFF !important;
  }
  @media (min-width: 681px){
    top: 23px;
    right: 60px;
    width: 300px;
    input {
      width: 80%;
    }
  }
`

export const BackButton = styled.div`
  button {
    display: flex;
    flex-direction: row;
    align-items: center;}
    margin-top: 10px;
    svg {
      margin-right: 10px;
    }
  }
`
