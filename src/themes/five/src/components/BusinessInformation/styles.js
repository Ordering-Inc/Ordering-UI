import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`

export const BussinessTitle = styled.div`
  z-index: 1000;
  display: inline-flex;
  width: 50%;
  background: #ffffff;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  padding: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}
`

export const HeaderImage = styled.div`
  width: 20%;
  margin-top: auto;
  > img {
    width: 100%;
    height: 100%;
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

export const Information = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  > h5 {
    margin-block-end: 0.8em;
    margin-block-start: 0.8em;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 0.3em;
    > svg {
      vertical-align: middle;
    }
  }
`

export const BusinessContent = styled.div`
  padding: 0 10px;
  background: #FFF;
  @media(min-width: 768px){
    padding: 0 20px;
    padding-top: 30px;
  }
`

export const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.darkTextColor};
  margin: 10px 0 10px 0;
`

export const Map = styled.div`
  width: calc(100% + 20px);
  margin-left: -10px;
  height: 250px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
  @media(min-width: 768px){
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`

export const ScheduleSection = styled.div`
  width: 100%;
  margin-bottom: 35px;
`

export const ScheduleContainer = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    width: 300px;
  }
`

export const ScheduleBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: ${props => props.theme.colors.darkTextColor};

    &.close {
      color: #E63757;
      margin-right: 20px;
      ${props => props.theme?.rtl && css`
        margin-left: 20px;
        margin-left: 0;
      `}
    }
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      margin: 0 5px;
    }
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;

  h5 {
    font-size: 16px;
  }

  div {
    width: 100%;
    &:last-child {
      h5:not(:last-child) {
        margin-top: 0px;
      }
    }
  }

  @media (min-width: 769px) {
    flex-wrap: nowrap;
    div {
      width: 50%;
      &:last-child {
        h5:not(:last-child) {
          margin-top: 22.1776px;
        }
      }
    }
  }
`
export const BusinessMediaContent = styled.div`
  padding-bottom: 20px;
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    > img,
    > iframe {
      object-fit: cover;
      border-radius: 10px;
      margin: 10px 10px;
      width: calc(100% - 12px);
      cursor: pointer;

      @media (min-width: 681px) {
        width: calc(50% - 20px);
      }

      @media (min-width: 993px) {
        width: calc(25% - 20px);
      }
    }
  }
`

export const ModalIcon = styled.span`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: ${props => props.theme?.colors.headingColor};
  border-radius: 50%;
  left: 5px;
  top: 5px;
  z-index: 1;
  ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  @media (min-width: 578px){
    right: 10px;
    ${props => props.theme?.rtl && css`
    left: 10px;
    right: initial;
  `}
  }
  @media (min-width: 768px){
    left: 25px;
    top: 30px;
    ${props => props.theme?.rtl && css`
    right: 25px;
    left: initial;
  `}
  }
`

export const Description = styled.p`
  margin: 0 10px;
`

export const ImageContainer = styled.div` 
  max-height: 500px;
  img{
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`

export const BusinessTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.colors.darkTextColor};
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
  padding-top: 25px;
  ${props => props.theme?.rtl && css`
    padding-right: 30px;
    padding-left: 0;
  `}
`

export const BusinessAddress = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.darkTextColor};
  margin: 15px 0;
`
export const BusinessAddressNotes = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.darkTextColor};
  margin: 15px 0 25px 0;
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: calc(100% + 20px);
  margin-left: -10px;

  @media (min-width: 768px) {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`
