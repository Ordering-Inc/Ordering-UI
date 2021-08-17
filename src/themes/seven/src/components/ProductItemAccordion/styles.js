import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid #D9D9D9;
`

const AccordionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: initial;
  transition: background-color 0.6s ease;

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

  @media (min-width: 411px){
    flex-direction: row;
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

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  margin-left: 10px;
  width: 55%;

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  h3 {
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin: 0px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: uppercase;
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
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
  margin: auto;
  @media (min-width: 481px) {
    margin-left: 71px;
  }
`
export const SubOption = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 25px;
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const ProductComment = styled.div`
  p {
    font-size: 12px;
    line-height: 22px;
    color: #666666;
    margin: 0;
    margin-top: 10px;
  }

  span {
    font-size: 12px;
    line-height: 22px;
    color: #666666;
    margin-left: 25px;
    ${props => props.theme?.rtl && css`
        margin-right: 25px;
        margin-left: 0;
    `}
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  p {
    font-size: 20px;
    margin: 0px 5px;
  }

  @media (min-width: 411px) {
    width: 80%;
  }

  @media (min-width: 481px) {
    width: 70%;
  }
`

export const ProductError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 18px;
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
  margin-top: -5px;
`

export const ProductActionsEdit = styled.span`
  svg {
    font-size: 19px;
    margin-right: 5px;
    cursor: pointer;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const ProductActionsDelete = styled(ProductActionsEdit)`
  display: none;
  svg {
    margin-right: 0px;
  }

  @media (min-width: 411px){
    display: block;
  }
`

export const ProductPriceSection = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0px !important;

  p,
  span {
    font-size: 14px;
  }

  span {
    font-weight: 500;
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
      font-size: 18px;
    }
  }
`

export const ProductSelect = styled.select`
  max-width: 55px;
  height: 38px;
  padding: 0 10px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: transparent;
  font-size: 14px;
  outline: none;
  margin-right: 5px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;

  background-image: url('https://res.cloudinary.com/dq4bhnmtt/image/upload/q_50/v1613334826/bzydg4yrmrz0hzihtsxs.png');
  background-repeat: no-repeat, repeat;
  background-position: right .5em top 50%, 0 0;
  background-size: .65em auto, 100%;

  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`

export const ProductNotAvailable = styled.span`
  color: #D81212;
`

export const ProductOptionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;

  p {
    font-size: 12px;
    line-height: 22px;
    color: #666666;
    margin: 0;
    margin-top: 10px;
  }

  li span {
    font-size: 12px;
    line-height: 22px;
    color: #666666;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  margin-right: 20px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  ${props => props.theme?.rtl && css`
    margin-left: 20px;
    margin-right: 0px;
  `}
`
