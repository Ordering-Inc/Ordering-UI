import React from 'react'
import styled, { css } from 'styled-components'

export const MessagesListingContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0px auto;
  max-width: 96%;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: calc(100vh - 105px);
  }
`
export const OrderListItems = styled.div`
  border: 1px solid rgb(233, 236, 239);
  height: 100%;
  margin-top: 20px;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 330px;
    max-width: 330px;
    margin-top: 0px;
    border-top: none;
    border-bottom: none;
  }

  @media (min-width: 1300px){
    max-width: 500px;
    width: 500px;
  }
`
export const MessageContainer = styled.div`
  border: 1px solid rgb(233, 236, 239);
  overflow: hidden;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 0px;
    height: 100%;
    flex: 1 1 0%;
    border-top: none;
    border-bottom: none;
    border-left: none;
    ${props => props.theme?.rtl && css`
      border-right: none;
    `}
  }
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(233, 236, 239);
`
export const OrdersOrderByOptionContainer = styled.div`
  display: flex;
  overflow-x: auto;
`
export const InnerTabsContainer = styled.div`
  display: flex;

  button {
    font-size: 13px;
    white-space: nowrap;
    padding: 4px 10px;
    line-height: 14px;
    border-radius: 4px;
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
`
export const Title = styled.h2`
  margin: 0 5px;
`
export const OrderListContainer = styled.div`
  height: calc(100% - 63px);
  /* border: 1px solid; */
`
export const OrdersListContainer = styled.div`
  height: 100%;
  padding: 15px 15px 0px 15px;
  box-sizing: border-box;
  overflow-x: hidden;
`

export const OrderCard = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors?.secundary};
  margin-bottom: 20px;
  padding: 15px 20px;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primary}15;
    border: 1px solid ${props => props.theme.colors.primary};
  `}

  p,
  h2 {
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
  }
  
  h2 {
    font-size: 16px;
    font-weight: 600;
  }
`

export const OrderHeader = styled.div`
  > div {
    display: flex;
    margin: 5px 0 10px;
    > p {
      font-size: 12px;
    }
  }

  > p {
    font-size: 14px;
    margin-top: 5px;
    color: ${props => props.theme.colors.colorPage};
  }
`
export const ViewDetails = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  text-decoration: underline;
  margin: 0 10px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
`
export const BusinessInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 125px;

  }
  display: flex;
  align-items: center;

  div.info {
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
    p {
      margin: 0px;
      color: ${props => props.theme.colors?.headingColor};
      font-size: 12px;
    }
    p.bold {
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media (min-width: 1300px) {
    width: 45%;
  }
`
export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
    border-radius: 10px;
  `}

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`
export const UnreadMessageCounter = styled.div`
  position: absolute;
  top: 12px;
  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary}20;
  border-radius: 6px;
  font-size: 12px;
  height: 24px;
  color: ${props => props.theme.colors.primary};
  padding: 0 10px;
`
const ImageStyled = styled.div`
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
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const DriverSelectorWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  > div {
    > div:first-child {
      border: none;
      padding: 0px;
      > div:first-child {
        padding: 0px
      }
    }
  }

  @media (min-width: 1300px) {
    width: 55%;
    margin-top: 0px;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors?.secundary};
      padding-right: 15px;
    ` : css`
      border-left: 1px solid ${props => props.theme.colors?.secundary};
      padding-left: 15px;
    `}
  }
`
export const LoadMoreButtonWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
   
   button {
     width: 100%;
     padding: 5px;
     background: ${props => props.theme.colors?.primary} !important;
     color: #fff
   }
`

export const DriverInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 1300px) {
    margin-top: 0px;
  }
`

export const OptionContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
   margin-left: 10px;

`
export const DriverNameContainer = styled.div`
  line-height: 1.3;
  color: #263238;

  ${({ small }) => small && css`
    font-size: 8px;
  `}
`

export const DriverName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: ${props => props.theme.colors.headingColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
  margin: 0px;

  ${({ small }) => small && css`
    font-size: 11px;
  `}

  @media (max-width: 576px) {
    max-width: 90px;
  }
`
export const DriverText = styled.span`
  font-size: 12px;
  ${({ small }) => small && css`
    font-size: 8px;
  `}
`

export const NotFoundSourceWrapper = styled.div`
  display: flex;
  height: 100%;
`
