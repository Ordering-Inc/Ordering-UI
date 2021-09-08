import styled, { css } from 'styled-components'
import React from 'react'

export const HelpContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  box-sizing: border-box;
  min-height: calc(100vh - 280px);

  @media (min-width: 769px) {
    width: 70%;
  }
`

export const BreadCrumbContainer = styled.div`
  margin-bottom: 23px;
  display: flex;
  align-items: center;

  svg {
    font-size: 13px;
    color: #909BA9;
    margin: 0 7px;

    ${props => props.theme?.rtl && css`
      transform: rotateZ(180deg);
    `}
  }

  span {
    font-size: 12px;
    color: #344050;

    &.deactive {
      color: #909BA9;
      cursor: pointer;
    }
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 30px;
  margin-top: 0;
`

export const SubTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 18px;
`

export const HelpContentWrapper = styled.div``

export const SubPageList = styled.div`
  margin-bottom: 60px;
`

export const SubPage = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 5px;

  span {
    font-size: 14px;
    color: #344050;
    user-select: none;
    cursor: pointer;
  }
`

export const OrdersInfoWrapper = styled.div`
  margin-bottom: 80px;

  h2 {
    font-weight: 500;
    font-size: 20px;
    color: #344050;
    margin-bottom: 10px;
    margin-top: 0;
  }
`

const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 145px;
  align-items: center;
  border-radius: 7.6px;

  h1 {
    color: #FFF;
    opacity: 0.7;
  }

  @media (min-width: 481px) {
    height: 150px;
  }

  @media (min-width: 1200px) {
    height: 170px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const OrderInfoBlock = styled.div`
  margin-left: 20px;
  ${props => props.theme.rtl && css`
    margin-right: 20px;
    margin-left: 0;
  `}

  @media (min-width: 769px) {
    margin-left: 40px;
    ${props => props.theme.rtl && css`
      margin-right: 40px;
      margin-left: 0;
    `}
  }


  h4 {
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #FFFFFF;
    margin: 0;
  }
`
