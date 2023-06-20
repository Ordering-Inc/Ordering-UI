import React from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);

  ${({ isSelectedOrders }) => isSelectedOrders && css`
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  height: calc(var(--vh, 1vh) * 100);
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  ${({ noAnimation }) => !noAnimation && css`
    transition: 0.3s;
  `}

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const SkeletonWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  > span {
    width: 100%;
  }
`

export const OrderDetailsContent = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  ${({ noScroll }) => noScroll && css`
    overflow: hidden;
  `}
`

export const OrderDetailsExtraContent = styled.div`
  max-width: 500px;
  position: relative;
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}
`

export const ChatContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  margin-top: 40px;
  height: calc(100% - 40px);
  overflow: hidden;
`

export const ButtonLink = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;

  &:hover {
    background-color: ${props => props.theme.colors?.secundary};
    border-radius: 5px;
  }

  svg {
    color: ${props => props.theme.colors?.secundaryContrast};
    font-size: 24px;
  }
`

export const OrderStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  h2 {
    color: ${props => props.theme.colors?.headingColor};
    margin: 0px;
    font-size: 16px;
  }

  p {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 14px;
    margin: 0px;
  }


  ${({ isDisabled }) => isDisabled && css`
    pointer-events: none;
  `}
`
export const OrderStatusSelectorWrapper = styled.div`
  min-width: 50%;
  > div {
    > div:first-child {
      border-color: ${props => props.theme.colors?.secundary};
      border-radius: 8px;
      background-color: ${props => props.theme.colors?.secundary};
      > div:first-child {
        padding-top: 5px;
        padding-bottom: 5px;
        > div:first-child {
          > div {
            border: none !important;
            p {
              color: ${props => props.theme.colors.headingColor} !important;
              padding: 0 !important;
            }
          }
        }
      }
    }

    .list-wrapper {
      > div {
        padding: 0 10px;
      }
    }
  }
`

export const StatusBarContainer = styled.div`
`

const StatusBarStyled = styled.div`
  height: 10px;
  border-radius: 10px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.borderColor} ${props.percentage}%)`};
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
    >
      {props.children}
    </StatusBarStyled>
  )
}

export const AdvancedLogistic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  > div {
    p {
      color: ${props => props.theme.colors?.headingColor};
      margin: 0px;

      &:first-child {
        font-weight: 500;
        font-size: 14px;
      }
      &:not(:first-child) {
        font-size: 12px;
        color: ${props => props.theme.colors.lightGray};
      }
    }
  }
`
export const OrderProducts = styled.div`
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #E9ECEF;
  h2 {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 18px;
  }
`

export const CloseButtonWrapper = styled.div`
  width: fit-content;
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 30px;
  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
`

export const PlaceSpotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  p {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 14px;
    margin: 0px;
  }
`
export const RejectReasonsContainer = styled.div`
  > p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    margin: 0;
  }
`
export const RejectReasonsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 10px);
  margin-left: -5px;
  margin-top: 10px;
`
export const RejectReasonWrapper = styled.div`
  padding: 4px 10px;
  border-radius: 50px;
  font-size: 12px;
  line-height: 18px;
  margin: 5px;
  width: fit-content;
  background-color: ${props => lighten(0.4, props.theme.colors.danger)};
  color: ${props => props.theme.colors.danger};
`

export const DetailBottom = styled.div`
  height: 20px;
`
