import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  background: ${props => props.theme.colors?.backgroundPage};
  display: flex;
  cursor: pointer;
  padding: 10px;
  border-radius: 7.6px;

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
  }
`
const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 86px;
  width: 86px;
  min-width: 86px;
  min-height: 86px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.1);
`
export const CardLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}

export const CardInfo = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}

  flex: 1;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    span.name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  
  p.date {
    font-size: 14px;
    color: ${props => props.theme.colors.darkGray};
    margin: 7px 0;
    line-height: 24px;
  }
  p.status {
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.primary};
    margin: 0;
  }
`
