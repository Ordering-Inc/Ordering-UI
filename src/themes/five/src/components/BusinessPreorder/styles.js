import styled, { css } from 'styled-components'
import React from 'react'

export const BusinessPreorderContainer = styled.div`
  padding: 0 10px;
`

export const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 27px;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > p {
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 65px;
  min-width: 65px;
  height: 65px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 65px;
  border-radius: 7.6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  margin-right: 25px;

  ${props => props.theme.rtl && css`
    margin-left: 25px;
    margin-right: 0;
  `}

  @media (min-width: 481px){
    width: 84px;
    height: 84px;
    min-width: 84px;
    min-height: 84px;
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

export const PreorderTypeWrapper = styled.div`
  margin-bottom: 30px;

  > p {
    font-weight: 600;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 13px;
  }
`

export const SelectWrapper = styled.div`
  width: 100%;
  > div {
    width: 100%;
    background-color: #F8F9FA!important;
    height: 44px;
    border: none;
    border-radius: 7.6px;
    color: #909BA9 !important;

    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
      justify-content: space-between;
    }
    > div#list {
      width: 100%;
      background-color: #F8F9FA!important;
      border: 1px solid #F8F9FA;
      border-radius: 7.6px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
  }
`

export const OrderTimeWrapper = styled.div`
  > p {
    font-weight: 600;
    font-size: 20px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 30px;

  button {
    height: 44px;
    width: 100%;
    position: relative;

    svg {
      position: absolute;
      top: 8px;
      font-size: 24px;
      right: 15px;

      ${props => props.theme.rtl && css`
        left: 15px;
        right: initial;
      `}
    }
  }
`

export const TimeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  width: calc(100% + 24px);
  margin-top: 30px;
  max-height: 250px;
  overflow: auto;
`

export const TimeItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E9ECEF;
  border-radius: 7.6px;
  padding: 5px 15px;
  margin: 12px;
  width: calc(50% - 24px);
  min-width: calc(50% - 24px);
  box-sizing: border-box;
  user-select: none;

  ${({ active }) => active && css`
    background: #F5F9FF;
    color: ${props => props.theme.colors.primary};
  `}

  span {
    font-size: 14px;
  }

  @media (min-width: 400px) {
    width: calc(33.33% - 24px);
    min-width: calc(33.33% - 24px);
  }

  @media (min-width: 576px) {
    width: calc(25% - 24px);
    min-width: calc(25% - 24px);
  }

  @media (min-width: 769px) {
    width: calc(16.66% - 24px);
    min-width: calc(16.66% - 24px);
  }
`

export const DateWrapper = styled.div``

export const MonthYearLayer = styled.div`
  margin-top: 0px;
  margin-bottom: 13px;

  span {
    font-size: 16px;
    line-height: 24px;
  }
`

export const TypeContent = styled.div`
  white-space: nowrap;
  color: #909BA9;
  font-size: 13px;
`

export const Layer = styled.div`
  ${({ nobg }) => !nobg && css`
    background-color: rgba(255, 255, 255, 0.7);
  `}
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({ height }) => height || '100vh'};
  ${props => props.theme?.rtl ? css`
    right: 0;
  ` : css`
    left: 0;
  `}
`

export const Days = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`

export const ContentDay = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 10px 0;
  padding: 3px 0;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d9d9d9;
  ${props => props.theme?.rtl && css`
    border-right: 0;
    border-left: 1px solid #d9d9d9;
  `}
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5px 0;
  align-items: center;
  font-weight: 300;
  color: #9A9A9A;
  width: calc(100% / 3);
  /**
    ** Modify this validation in case the dates to display change
   */
  &:nth-child(1) div,
  &:nth-child(2) div,
  &:nth-child(3) div {
    margin-bottom: 5px;
  }

  &:nth-child(3) div,
  &:nth-child(6) div {
    ${props => props.theme?.rtl ? css`
        border-left: 0      
    ` : css`
       border-right: 0;
    `}
  }

  &:nth-child(4) div,
  &:nth-child(5) div,
  &:nth-child(6) div {
    margin-top: 5px;
  }

  @media (min-width: 426px) {
    width: calc(100% / 6);
    &:nth-child(3) div.content-day {
      border-right: 1px solid #d9d9d9;
      ${props => props.theme?.rtl && css`
        border-right: 0;
        border-left: 1px solid #d9d9d9;
      `}
    }
  }

  ${({ selected }) => selected && css`
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
  `}


  :last-child {
    ${ContentDay} {
      ${props => props.theme?.rtl ? css`
        border-left: 0;
      ` : css`
        border-right: 0;
      `}
    }
  }

  :hover {
    background-color: #f9f9f9;
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 24px;
`

export const DayNumber = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 24px;
`

export const Hours = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Hour = styled.div`
  display: flex;
  width: calc(50% - 5px);
  justify-content: center;
  cursor: pointer;
  font-weight: 300;
  border: 1px solid #d9d9d9;
  border-radius: 1000px;
  padding: 5px 10px;
  margin-bottom: 7px;
  box-sizing: border-box;

  ${({ selected }) => selected && css`
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  `}

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}
`

export const MiddleLine = styled.span`
  display: block;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.disabled};

  ${props => props.theme?.rtl && css`
    left: initial;
    right: 50%;
    transform: translateX(50%);
  `}

  @media (min-width: 426px) {
    display: none;
  }
`
