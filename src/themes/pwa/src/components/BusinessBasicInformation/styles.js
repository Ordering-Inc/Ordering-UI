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
  justify-content: start;
  align-items: flex-end;

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

  @media (min-width: 576px) {
    border-radius: 7.6px;
  }


`

export const BusinessContent = styled.div`
  margin: 0;
  margin-left: 35px;
  margin-bottom: -35px;
  max-height: 80px;
  width: 80px;
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
  max-width: 80px;
  max-height: 80px;
  width: 80px;
  height: 80px;
  
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
  min-height: 80px;
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

  .review {
    color: #909BA9;
    margin: 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 14px;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }

    span {
      font-size: 14px;
    }
  }

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
      &:first-child {
        margin-right: 5px;
        ${props => props.theme?.rtl && css`
          margin-left: 5px;
          margin-right: 0;
        `}
      }
    }
  }
`

export const BusinessInfoContainer = styled.div`
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;

  @media (min-width: 576px) {
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 25px;
  }
`

export const BusinessInfoContent = styled.div`
  /* width: 100%; */
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    margin-left: 20px;
    color: #748194;
    font-size: 24px;
    cursor: pointer;
  }

  .search-bar {
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
    @media (min-width: 681px) {
      input {
        width: 212px;
        &:focus{
          width: 100%;
        }
      }
    }
    
    @media(max-width: 480px){
      input {
        padding: 7px;
        padding-left: 30px;
        padding-right: 50px;
        width: 240px;
        &:focus{
          margin-left: 20px;
          width: 100%;
          border-bottom: 1px solid #E9ECEF;
        }
      }
    }
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }
`

export const BusinessDetail = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    color: #909BA9;
    margin: 0 5px 0 0;
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


`

export const BusinessMoreDetail = styled.div`
  top: 30px;
  right: 30px;
  position: absolute;
  
  svg {
    cursor: pointer;
    font-size: 24px;
    color: white;
  }
`
export const BusinessInfoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export const BusinessName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

  h2 {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 10px 0;
    font-weight: 600;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

`
