import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  background: ${isCheckout => isCheckout ? 'transparent' : '#FFF'};
`

const AccordionStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: initial;
  transition: background-color 0.6s ease;
  margin: 0 10px;
  ${({ isCheckout }) => isCheckout && css`
    margin: 0px;
  `}

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: initial;
    `}
  }

`

export const Accordion = (props) => {
  const style = {}
  if (!props.isValid) {
    style.opacity = '0.5'
  }
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const WrapperProductImage = styled.div`
  max-width: 48px;
  max-height: 48px;
  height: 48px;
  width: 48px;
`

const ProductImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`

export const ProductImage = (props) => {
  return (
    <ProductImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})`, width: '48px', height: '48px' }}
    >
      {props.children}
    </ProductImageStyled>
  )
}

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  margin-left: 10px;
  width: 60%;

  ${({ isOrderDetails }) => isOrderDetails && css`
     width: 80%;
  `}

  ${({ isOrderDetails }) => !isOrderDetails && css`
    @media (min-width: 411px) {
      width: calc(65% - 30px);
    }

    @media (min-width: 480px){
      width: 80%;
    }
  `}

  @media (min-width: 480px){
    width: 80%;
  }

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  h3 {
    font-size: 12px;
    margin: 0px;
    font-weight: 600;
  }

  div {
    span {
      font-size: 10px;
    }
    p{
      font-size: 10px;
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    margin: 0px;

    p {
      margin: 0px;
      font-size: 14px;
    }

    div {
      display: flex;

      span {
        height: 20px;
        svg {
          font-size: 20px;
          &:nth-child(1) {
            margin-right: 3px;
            ${props => props.theme?.rtl && css`
              margin-left: 3px;
              margin-right: 0px;
            `}
          }
        }
      }
    }
  }

  @media (min-width: 577px) {
    h3 {
      font-size: 18px;
    }
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
  margin: auto;

  @media (min-width: 481px) {
    width: 80%;
  }
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const ProductComment = styled.div`
  padding-left: 40px;
  ${props => props.theme?.rtl && css`
    padding-right: 40px;
    padding-left: 0px;
  `}
  p {
    font-weight: 600;
    font-size: 12px;
    margin: 0px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.darkTextColor};
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0px 20px 0px 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${props => props.theme?.rtl && css`
      margin: 0px 15px 0px 20px
    `}
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  h1,
  h3,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h3 {
    font-size: 12px;
    max-width: ${({ isOrderDetails }) => isOrderDetails ? '90%' : '50%'};
  }

  p {
    font-size: 12px;
    margin: 0px 5px;
    width: 80%;
  }

  @media (min-width: 360px){
    h3{
      max-width: ${({ isOrderDetails }) => isOrderDetails ? '98%' : '70%'};
    }
  }

  @media (min-width: 411px) {
    h3{
      max-width: 90%;
    }
  }
`

export const ProductError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 12px;
    text-align: center;
  }

  @media (min-width: 411px){
    width: 35%;

    span{
      text-align: right;
    }
  }
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ProductActionsEdit = styled.span`
  svg {
    font-size: 20px;
    margin-right: 5px;
    cursor: pointer;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const ProductActionsDelete = styled(ProductActionsEdit)`
  svg {
    margin-right: 0px;
  }

  @media (min-width: 411px){
    display: block;
  }
`

export const ProductPriceSection = styled.div`
  width: ${({ isOrderDetails }) => isOrderDetails ? '15px' : '25%'};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ isOrderDetails }) => isOrderDetails && css`
    position: relative;
    bottom: 14px;
  `}
`

export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  p,
  span {
    font-size: 12px;
  }

  span {
    font-weight: 500;
    white-space: nowrap;
  }

  p {
    margin: 0px 5px;
  }

  svg {
    cursor: pointer;
  }

  @media (min-width: 512px) {
    span,
    p {
      font-size: 12px;
    }
  }
`

export const ProductSelect = styled.select`
  background: ${isCheckout => !isCheckout ? '#FFFFFF' : '#F8F9FA'};
  border-radius: 7.6px;
  max-width: 42px;
  height: 22px;
  border: none;
  font-size: 12px;
  outline: none;
  margin: 0px 0px 0px 5px;
  padding: 2px 10px 2px 2px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  background-image: url('https://res.cloudinary.com/dq4bhnmtt/image/upload/q_50/v1613334826/bzydg4yrmrz0hzihtsxs.png');
  background-repeat: no-repeat,repeat;
  background-position: right 0.3em top 50%;
  background-size: 0.65em auto,100%;
  text-align: center;
`

export const ProductNotAvailable = styled.span`
  color: #D81212;
`

export const ProductOptionsList = styled.ul`
  list-style-type: none;

  .suboption {
    margin-left: -25px;
    ${props => props.theme?.rtl && css`
      margin-right: -25px;
      margin-left: 0px;
  `}
  }

  p:nth-child(1) {
    margin-bottom: 0;
  }

  p {
    font-size:12px;
    font-weight: 600;
    margin: 0px;
  }

  li span {
    font-size: 12px;
    font-weight: 500;
  }

  li.ingredient {
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-right: 15px;
      padding-left: 0px;
    `}
  }
`

export const ProductQuantity = styled.span`
  margin: 0 5px;
  font-size: 14px;
`
