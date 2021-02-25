import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 350px;
  height: 350px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 300px;
  border-radius: 5px;

  ${props => props.isSkeleton && css`
    background-color: #F8F8F8;
  `}

  ${props => props.bgimage && css`
    background-image: url(${props.bgimage});
  `}

  @media (max-width: 767px) {
    border-radius: initial;
  }
`
export const WrapperBusinessLogo = styled.div`
  position: absolute;
  max-width: 90px;
  max-height: 90px;
  height: 90px;
  width: 90px;
  bottom: -45px;
  left: 45px;

  > span {
    > span {
      border-radius: 50%;
    }
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
  min-height: 75px;
  border-radius: 50%;
  box-shadow: 0px 3px 6px #00000029;
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
  margin-top: 70px;

  @media (max-width: 767px) {
    width: 91%;
    margin: 70px auto 0 auto;
  }
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.theme?.rtl && css`
    padding: 0px 16px 0px 5px;
  `}
  div {
    font-size: 14px;
    display: flex;

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
      text-transform: capitalize;
      overflow: hidden;
      white-space: nowrap;
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
export const BusinessName = styled.h1`
  margin: 0px;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`
export const BusinessDetail = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  flex-wrap: wrap;
  margin: 15px 0;

  > p {
    &: first-child {
      color: ${props => props.theme.colors.greenColor};
      font-weight: 500;
    }
  }
`
export const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  padding-bottom: 20px;

  @media (max-width: 767px){
    width: 91%;
    margin: 0 auto;
    > div {
      width: 100%;
    }
  }
`
export const DeliveryAndMin = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 10px 0;
  > div {
    width: 50%;
    min-width: 130px;
    padding: 0 15px;
    &.delivery {
      border-right: 1px solid ${props => props.theme.colors.secondary};
    }

    p {
      text-align: center;
      margin: 0px;
      &:frist-child {
        font-weight: 500;
      }
      &:last-child {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`
export const GroupAndSelector = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;

  button {
    font-weight: 500;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 767px){
    justify-content: space-between;
  }
`
