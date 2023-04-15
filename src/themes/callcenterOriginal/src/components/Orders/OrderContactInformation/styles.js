import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  position: relative;

  > svg {
    position: absolute;
    top: 32px;
    right: 10px;
    transition: all 0.3s;
  }
`

export const PhotoWrapper = styled.div`
  max-width: 48px;
  max-height: 48px;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;

  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`

const PhotoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`

export const Photo = (props) => {
  return (
    <PhotoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </PhotoStyled>
  )
}

export const InfoContent = styled.div`
  flex: 1;
  > div {
    display: flex;
    align-items: center;

    > p {
      margin: 0px;
      font-weight: 600;
      color: ${props => props.theme.colors?.headingColor};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

      &.name {
        max-width: 70%;
      }
    }

    > button {
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}
    }
  }

  > p {
    color: ${props => props.theme.colors?.lightGray};
    font-size: 12px;
    margin: 0px;
  }

  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
`

export const CustomerInfo = styled(BusinessInfo)``

export const DriverInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DriverInfo = styled(BusinessInfo)``

export const DriverSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  margin-bottom: 13px;
  > p {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 15px;
  }
  > div {
    width: 100%;
    border-radius: 8px;
    background-color: ${props => props.theme.colors?.secundary};

    > div {
      &:first-child {
        border: none;
        height: 50px;
      }
      > div:first-child {
        color: ${props => props.theme.colors?.headingColor};
      }
    }
  }

  @media (min-width: 768px) {
    > div {
      width: 50%;
    }
  }
  @media (max-width: 576px) {
    > div {
      p {
        max-width: initial;
      }
    }
  }
`
export const CutsomerDetail = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors?.secundary};
  padding-bottom: 15px;
  margin-bottom: 15px;
  width: 100%;
`

export const CustomerInfoTable = styled.table`
  width: 100%;

  tr {
    td {
      color: ${props => props.theme.colors?.lightGray};
      font-size: 12px;
      margin: 0px;

      &:first-child {
        color: ${props => props.theme.colors?.headingColor};
      }

      > a {
        color: ${props => props.theme.colors?.primary};
        transition: all 0.3s linear;
        &:hover {
          color: ${props => props.theme.colors?.headingColor};
        }
      }
    }
  }
`

export const ToggleItemWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors?.secundary};

  ${({ active }) => active && css`
    border-bottom: none;
    .down-arrow {
      transform: rotateZ(180deg);
    }
  `}
`
export const ReviewButton = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  text-decoration: underline;
`
