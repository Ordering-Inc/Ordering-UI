import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  background: #FFF;
`

const AccordionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: initial;
  transition: background-color 0.6s ease;
  margin: 0px 10px;

  > p {
    color: ${props => props.theme.colors?.blackColor};
    font-size: 14px;
  }

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

  @media (min-width: 768px) {
    > p {
      font-sizex: 16px;
    }
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
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;

  @media (min-width: 481px){
    width: 55px;
    height: 55px;
    max-width: 55px;
    max-height: 55px;
    padding-bottom: 0 !important;
  }

  @media (min-width: 769px){
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
  }
`

const ProductImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`

export const ProductImage = (props) => {
  return (
    <ProductImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
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
  width: calc(100% - 55px);

  @media (min-width: 481px) {
    width: calc(100% - 60px);
  }

  @media (min-width: 769px) {
    width: calc(100% - 80px);
  }

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  h3 {
    font-size: 14px;
    margin: 0px;
    font-weight: 600;
    color: ${props => props.theme.colors?.blackColor};
  }

  span {
    display: flex;
    justify-content: space-between;

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
  color: ${props => props.theme.colors?.blackColor};

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
    font-weight: bold;
    margin: 0px;
  }

  h3 {
    font-weight: normal;
    text-transform: capitalize;
    margin: 0px 20px 0px 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${props => props.theme?.rtl && css`
      margin: 0px 40px 0px 20px
    `}
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  h1,
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

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
  }
`

export const ProductActions = styled.div`
  display: flex;
`

export const ProductActionsEdit = styled.span`
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors?.grayColor};
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
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
  display: flex;
  flex-direction: column;
`

export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

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
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  max-width: 55px;
  height: 50px;
  background-color: transparent;
  font-size: 17px;
  outline: none;
  margin-right: 5px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;

  background-image: url('https://res.cloudinary.com/dq4bhnmtt/image/upload/q_50/v1613334826/bzydg4yrmrz0hzihtsxs.png');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
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
    font-weight: 400;
    margin: 0px;
  }

  li span {
    font-weight: 300;
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
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`

export const ContentInfoLeftWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin: 0 15px;
  }
`
