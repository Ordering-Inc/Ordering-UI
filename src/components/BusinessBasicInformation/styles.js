import React from 'react'
import styled, { css } from 'styled-components'

const BusinessContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 260px;
  height: 260px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 10px;
`
export const BusinessContainer = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.isSkeleton) {
    style.backgroundColor = '#F8F8F8'
  }
  return (
    <BusinessContainerStyled {...props} style={style}>
      {props.children}
    </BusinessContainerStyled>
  )
}

export const BusinessContent = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  max-height: 75px;
  width: 340px;

  @media (max-width: 380px) {
    margin: 0px 1px 1px;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
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
  border-radius: 10px;
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
  width: calc(100% - 75px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 16px;
  ${props => props.theme?.rtl && css`
    padding: 0px 16px 0px 5px;
  `}
  div {
    display: flex;
    justify-content: space-between;

    h5 {
      font-weight: 300;
      svg {
        color: #CCC;
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

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`
