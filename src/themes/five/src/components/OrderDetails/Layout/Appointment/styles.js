import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  width: 100%;
`

export const InnerContainer = styled.div`
  margin: 0px auto;
  max-width: 904px;
`

export const HeaderSection = styled.div`
  > h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 7px;
    text-align: center;
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 13px;
    text-align: center;
  }
`

export const StatusBar = styled.div`
  height: 12px;
  width: 100%;
  margin-bottom: 15px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.grayDividerColor} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.grayDividerColor} ${props.percentage}%);
  `}
`

export const StatusBarWrapper = styled.div`
  margin-top: 40px;
`

export const StatusTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .status {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const ReviewOrderLink = styled.span`
  margin: 0;
  cursor: pointer;
  text-decoration-line: underline;
  user-select: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  ${({ active }) => active ? css`
    color: ${props => props.theme?.colors.primary};
  ` : css`
    color: ${props => props.theme?.colors.lightGray};
    cursor: not-allowed;
    span {
      pointer-events: none;
    }
  `}
`

export const BusinessCardWrapper = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 30px 24px;
  margin-top: 43px;
`

export const BusinessInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 85px;
  height: 85px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-width: 85px;
  border-radius: 7.6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  margin-right: 40px;
  ${props => props.theme.rtl && css`
    margin-left: 40px;
    margin-right: 0px;
  `}

  @media (min-width: 481px){
    min-width: 110px;
    min-height: 110px;
    height: 110px;
    width: 110px;
    min-height: 110px;
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

export const BusinessInfo = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }
  p {
    margin-top: 7px;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0px;
  }
`

export const Map = styled.div`
  margin-bottom: 10px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
  width: 100%;
  height: 165px;
`
