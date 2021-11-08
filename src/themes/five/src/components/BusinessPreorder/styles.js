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

export const MenuWrapper = styled(PreorderTypeWrapper)`
  margin-bottom: 35px;
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

  > div {
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

    span {
      font-size: 14px;
    }

    @media (min-width: 576px) {
      width: calc(33.33% - 24px);
      min-width: calc(33.33% - 24px);
    }

    @media (min-width: 993px) {
      width: calc(20% - 24px);
      min-width: calc(20% - 24px);
    }

    @media (min-width: 1200px) {
      width: calc(16.66% - 24px);
      min-width: calc(16.66% - 24px);
    }
  }
`

export const DateWrapper = styled.div`
  .Datepicker--Strip {
    width: 100%;

    .Datepicker--DateList {
      display: flex;
      flex: 1;
      margin: 2px 0 2px 0;
      justify-content: space-between;
    }
  }
`
