import styled, { css } from 'styled-components'
import React from 'react'

export const OrdersContainer = styled.div`
  width: 91%;
  margin: 0 auto;
`

export const SingleCard = styled.div`
  width: 100%;
  display: flex;
  border: none;
  padding: 20px 0;
  border-top: 1px solid #ccc;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const OrderPastContent = styled.div`
  display: flex;
  flex: 1;
  column-gap: 20px;
  padding-right: 5px;
  min-width: 220px;

  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0px;
  `}

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  align-items: center;
  font-size: 0.8em;
  margin-right: 25px;

  ${props => props.theme?.rtl && css`
      margin-left: 25px;
      margin-right: 0;
  `}

  p {
    color: ${props => props.theme.colors.darkGreen};
    margin-block-start: 0;
    margin-block-end: 0;
  }
  button {
    margin: 5px 0;
    width: 100%;
    max-width: 200px;
    font-size: 0.9em;
    white-space: nowrap;
  }

  @media (min-width: 480px){
    font-size: 1em;
  }

  @media (min-width: 768px){
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
  }

  @media (max-width: 700px) {
    width: 100%;

    button {
      max-width: initial;
    }
  }
`

export const WrappButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  button {
    padding: 10px 0px;
    width: 100%;
  }

  @media (min-width: 768px) {
    button {
      width: 60%;
    }
  }
`

const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  height: 100px;
  justify-content: center;
  align-items: center;

  h1 {
    color: #FFF;
    opacity: 0.8;
    font-size: 24px;
  }

  @media (min-width: 481px) {
    height: 125px;
  }

  @media (min-width: 1024px) {
    height: 150px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const ProductsContainer = styled.div`
  span,
  h3 {
    font-size: 14px;
  }

  div {
    background: transparent;
    border-bottom: none;
  }
`
export const BusinessInformation = styled.div`
  flex: 1;
  max-width: 450px;
  
  p {
    margin: 0px;
    font-size: 14px;
  }
`
export const WrapperBusinessTitle = styled.div`
  width: 95%;
  h2 {
    font-size: 18px;
    margin: 0px;
  }
`

export const ViewOrderButton = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.darkGreen};
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
`

export const ReceiptWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  a {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
  }
`
