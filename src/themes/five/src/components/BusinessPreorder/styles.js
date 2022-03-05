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

export const DaysSwiper = styled.div`
  width: 100%;
  position: relative;
  border-top: 1px solid #E9ECEF;
  border-bottom: 1px solid #E9ECEF;

  .swiper-datelist {
    padding: 0 20px;
    .swiper-button-prev {
      background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
      width: 20px;
    }

    .swiper-button-prev::after {
      display: none;
    }
    .swiper-button-next {
      background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
      width: 18px;
    }

    .swiper-button-next::after {
      display: none;
    }

    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
      right: 0px;
      left: auto;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
      left: 0px;
      right: auto;
    }
  }
`

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

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  color: #B1BCCC;
  cursor: pointer;
  padding: 14px 0 13px 0;
  flex-direction: column;
  align-items: center;
  transition: background-color .16s ease -0.01s;

  ${({ selected }) => selected && css`
    color: #344050;
  `}

  :hover {
    background-color: #e9ecef;
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 10px;
  &:first-letter {
    text-transform: uppercase;
  }
`

export const DayNumber = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`

export const ClosedBusinessMsg = styled.div`
  text-align: center;
  font-size: 16px;
  width: 100%;
`
