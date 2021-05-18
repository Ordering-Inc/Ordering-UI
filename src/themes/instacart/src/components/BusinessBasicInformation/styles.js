import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 380px;
  height: 380px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 300px;
  justify-content: center;
  align-items: center;

  ${props => props.isSkeleton && css`
    background-color: #F8F8F8;
  `}

  ${props => props.bgimage && !props.isClosed && css`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 80%), url(${props.bgimage});
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
`

export const BusinessInnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 45px;
`

export const BusinessContent = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  width: 280px;
`

export const WrapperBusinessLogo = styled.div`
  max-width: 120px;
  max-height: 120px;
  height: 120px;
  width: 120px;
  display: flex;

  span {
    border-radius: 100% !important;
  }

  @media (min-width: 768px) {
    max-width: 150px;
    max-height: 150px;
    height: 150px;
    width: 150px;
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
  min-height: 120px;
  border-radius: 100%;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 16%);

  @media (min-width: 768px) {
    min-height: 150px;
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
  div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #FFF;

    h2 {
      font-size: 24px;
      margin: 0px;
      width: 100%;
      text-align: center;
    }

    h5 {
      font-weight: 300;
      svg{
        margin-bottom: 1px;
      }
    }

    h5,
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;

      svg {
        margin-right: 4px;

        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
        `}

        &.start {
          color: #FFC917;
        }

        &.popup {
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
          transform: rotate(180deg);
          background: rgba(255, 255, 255, 0.8);
          border-radius: 100%;
        }
      }

      &.bold {
        font-weight: 600;
      }

      &.type {
        font-weight: 300;
      }
    }

    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;

  #select-input {
    background-color: #FFF !important;
    color: #000 !important;
  }

  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }

  @media (min-width: 992px) {
    min-width: 600px;
  }
`
