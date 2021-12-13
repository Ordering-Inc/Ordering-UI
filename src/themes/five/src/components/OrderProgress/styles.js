import styled, { css } from 'styled-components'
import React from 'react'

export const OrderProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  margin: 45px 20px;
  padding: 15px;

  > div {
    width: 100%;
  }

  @media (min-width: 576px) {
    padding: 25px;
  }

  @media (min-width: 768px) {
    > div {
      width: 50%;
    }
  }
`

export const OrderInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`

export const ProgressLogoStyled = styled.div`
  width: 70px;
  min-width: 70px;
  height: 70px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 576px) {
    width: 91px;
    min-width: 91px;
    height: 91px;
  }
`

export const ProgressLogo = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <ProgressLogoStyled {...props} style={style}>
      {props.children}
    </ProgressLogoStyled>
  )
}

export const ProgressDescriptionWrapper = styled.div`
  margin-left: 20px;
  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 20px;
  `}

  h2 {
    font-weight: 600;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0px;
    margin-top: 0px;
    font-size: 12px;
    line-height: 25px;
    svg {
      margin-left: 5px;
      ${props => props.theme.rtl && css`
        margin-left: 0px;
        margin-right: 5px;
      `}
    }
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 576px) {
    h2 {
      font-size: 20px;
      margin-bottom: 6px;
    }
    p {
      font-size: 16px;
    }
    button {
      font-size: 16px;
      margin-top: 2px;
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    margin-left: 35px;

    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 35px;
    `}
  }
`

export const ProgressBarWrapper = styled.div`
  padding: 0px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-left: 15px;

    ${props => props.theme.rtl && css`
      padding-left: 0px;
      padding-right: 15px;
    `}
  }
`

export const ProgressContentWrapper = styled.div`
  width: 100%;
  height: 12px;
  background: #F8F9FA;
`

export const ProgressBar = styled.div`
  height: 12px;
  background: ${props => props.theme.colors.primary};
  width: 0px;
`

export const ProgressTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`

export const StatusWrapper = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  margin-right: 10px;

  ${props => props.theme.rtl && css`
    margin-right: 0px;
    margin-left: 10px;
  `}
`

export const TimeWrapper = styled.div`
  font-size: 12px;
  color: #909BA9;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
    font-size: 14px;
  }
`
