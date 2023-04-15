import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  background: #FFF;
  border-bottom: 1px solid #D9D9D9;
`

const AccordionStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: initial;
  transition: background-color 0.6s ease;
  margin: 0px 10px;

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
  position: relative;
  max-width: 55px;
  max-height: 55px;
  height: 55px;
  width: 55px;

  ${({ isBigSize }) => isBigSize && css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
  `}

  @media (min-width: 361px) {
    max-width: 65px;
    max-height: 65px;
    height: 65px;
    width: 65px;
  }

  @media (min-width: 411px) {
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
  }

  @media (min-width: 768px) {
    ${({ isBigSize }) => isBigSize && css`
      max-width: 120px;
      max-height: 120px;
      height: 120px;
      width: 120px;
    `}
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
  border-radius: 7.6px;
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
  width: calc(65% - 60px);

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  h3 {
    font-size: 14px;
    margin: 0px;
    font-weight: 400;
    color: ${props => props.theme.colors.secundary};
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

  ${props => props.theme?.rtl ? css`
    margin-right: 95px;
  ` : css`
    margin-left: 95px;
  `}

  @media (min-width: 361px) {
    ${({ isCustomMode }) => isCustomMode ? css`
      ${props => props.theme?.rtl ? css`
        margin-right: 105px;
      ` : css`
        margin-left: 105px;
      `}
    ` : css`
      ${props => props.theme?.rtl ? css`
        margin-right: 90px;
      ` : css`
        margin-left: 90px;
      `}
    `}
  }

  @media (min-width: 411px) {
    ${props => props.theme?.rtl ? css`
      margin-right: 115px;
    ` : css`
      margin-left: 115px;
    `}
  }
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const ProductComment = styled.div`
  ${({ isCustomMode }) => !isCustomMode && css`
    padding-left: 40px;
    ${props => props.theme?.rtl && css`
      padding-right: 40px;
      padding-left: 0px;
    `}
  `}
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.colors.grayDark};
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
    margin: 0px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${props => props.theme.colors.grayDark};
  }

  @media (min-width: 681px) {
    p, h3 {
      font-size: 14px;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 70%;

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
  width: 100%;
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
`

export const ProductPriceSection = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  p,
  span {
    font-size: 14px;
  }

  span {
    color: ${props => props.theme.colors.grayDark};
  }

  p {
    margin-top: 0px;
    margin-bottom: 0px;
    ${props => props.theme?.rtl ? css`
      margin-right: 5px;
    ` : css`
      margin-left: 5px;
    `}
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
  font-size: 14px;
  padding: 0px;
  max-width: 40px;
  height: 25px;
  border: none;
  background-color: #FFF;
  border-radius: 7.6px;
  outline: none;
  margin-left: 5px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;

  background-image: url('https://res.cloudinary.com/dq4bhnmtt/image/upload/q_50/v1613334826/bzydg4yrmrz0hzihtsxs.png');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;

  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}

  @media (min-width: 681px) {
    font-size: 17px;
    padding: 0 5px;
    max-width: 55px;
  }
`

export const ProductNotAvailable = styled.span`
  color: #D81212;
`

export const ProductOptionsList = styled.ul`
  list-style-type: none;
  color: ${props => props.theme.colors.grayDark};
  font-size: 12px;

  ${({ isCustomMode }) => isCustomMode && css`
    padding: 0px;
    margin: 0px;
  `}

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
    color: ${props => props.theme.colors.grayDark};
  }

  li span {
    font-weight: 400;
    color: ${props => props.theme.colors.grayDark};
  }

  li.ingredient {
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-right: 15px;
      padding-left: 0px;
    `}
  }

  @media (min-width: 681px) {
    font-size: 14px;
  }
`

export const ProductQuantity = styled.span`
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`

export const ProductCardContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #ACB2B6;

  @media (min-width: 681px) {
    padding: 20px 30px 30px 30px;
    border-bottom: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    margin-bottom: 40px;
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 75px);
  flex-direction: row;

  > div:last-child {
    flex-direction: column;
    width: 100%;
    align-items: center;

    > div {
      span {
        font-size: 14px;
        margin: 0 5px;
      }
    }
  }

  @media (min-width: 361px) {
    width: calc(100% - 85px);
  }

  @media (min-width: 411px) {
    width: calc(100% - 95px);
  }

  @media (min-width: 768px) {
    width: calc(100% - 140px);
    flex-direction: row;

    > div:last-child {
      width: 25%;
      align-items: flex-end;
      > div {
        span {
          font-size: 16px;
        }
      }
    }
  }
`

export const ProductInfoContent = styled.div`
  width: 60%;
  h1 {
    color: ${props => props.theme.colors.secundary};
    font-weight: 500;
    font-size: 16px;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    width: calc(75% - 20px);
    h1 {
      font-size: 20px;
    }
  }
`

export const IncDecActions = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
  border-radius: 30px;
  position: absolute;
  bottom: -10px;
  background-color: #FFF;
  button {
    cursor: pointer;
    outline: none;
    height: 24px;
    border: none;
    font-size: 20px;
    background: #FFF;
    transition: all .3s ease-in-out;
    padding: 0 5px;
    display: flex;
    align-items: center;
    &:active {
      background: ${() => darken(0.07, '#FFF')};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  button.decrease {
    color: ${props => props.theme.colors.grayDark};
    ${props => props.theme?.rtl ? css`
      border-radius: 0 30px 30px 0;
      border-left: 1px solid ${props => props.theme.colors.gray};
    ` : css`
      border-radius: 30px 0 0 30px;
      border-right: 1px solid ${props => props.theme.colors.gray};
    `}    
  }
  
  button.increase {
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl ? css`
      border-radius: 30px 0 0 30px;
      border-right: 1px solid ${props => props.theme.colors.gray};
    ` : css`
      border-radius: 0 30px 30px 0;
      border-left: 1px solid ${props => props.theme.colors.gray};
    `}
  }

  span {
    min-width: 30px;
    height: 24px;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 681px) {
    button {
      padding: 0 10px;
    }
  }
`
