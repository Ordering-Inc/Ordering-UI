import styled, { css } from 'styled-components'
import React from 'react'

export const LastOrdersContainer = styled.div`
  margin-bottom: 10px;
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
  margin-bottom: 15px;

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
  cursor: pointer;
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
    transition: all 0.3s;
  }

  p {
    font-size: 14px;
    color: #FFFFFF;
    margin: 0;
    transition: all 0.3s;
  }

  &:hover {
    h4, p {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
