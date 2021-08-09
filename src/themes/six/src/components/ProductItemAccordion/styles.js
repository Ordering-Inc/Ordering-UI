import React from 'react'
import styled, { css } from 'styled-components'
export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background: #FFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  margin-bottom: 20px;
  box-sizing: border-box;
  @media (min-width: 411px){
    min-height: 130px;
  }

  @media (min-width: 1024px){
    min-height: 152px;
  }
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
export const WrapperProductImage = styled.div`
  min-width: 55px;
  min-height: 55px;
  height: 55px;
  width: 55px;
  padding: 3px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  box-sizing: border-box;
  @media (min-width: 361px) {
    height: 80px;
    width: 80px;
  }
  @media (min-width: 411px) {
    height: 100px;
    width: 100px;
  }
  @media (min-width: 1024px) {
    height: 120px;
    width: 120px;
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
  border-radius: 50%;
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
  padding-left: 10px;
  width: calc(100% - 55px);
  overflow: hidden;
  padding-top: 20px;
  box-sizing: border-box;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0px;
  `}
  h3 {
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      margin: 0;
      margin-bottom: 8px;
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
  @media (min-width: 361px) {
    width: calc(100% - 80px);
  }
  @media (min-width: 411px) {
    width: calc(100% - 100px);
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    h3 {      
      ${({ isSidebar }) => isSidebar
        ? css`
            max-width: 150px;
          `
        : css`
          max-width: 350px;
        `
      }
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  @media (min-width: 1024px) {
    width: calc(100% - 120px);
    padding-left: 25px;
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
  margin: auto;
  @media (min-width: 361px) {
  }
  @media (min-width: 411px) {
    width: calc(100% - 120px);
    margin-left: auto;
    margin-right: 0px;
    margin-top: -50px;
  }
  @media (min-width: 1024px) {
    width: calc(100% - 145px);
    margin-top: -70px;

  }
`
export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`
export const ProductComment = styled.div`
  p {
    margin: 0px;
    font-size: 14px;
    line-height: 24px;
    color: #343A40;
  }
  span {
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;
    padding-left: 25px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    color: #000000;
    font-weight: 500;
    ${props => props.theme?.rtl && css`
    padding-right: 25px;
    `}
  }
`
export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 411px) {
  }
  @media (min-width: 481px) {
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
`
export const ProductActionsEdit = styled.span`
  svg {
    font-size: 22px;
    margin-right: 10px;
    cursor: pointer;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
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
export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p,
  span {
  }
  span {
    font-weight: bold;
    font-size: 1rem;
    line-height: 20px;
  }
  p {
    margin: 0px 5px;
  }
  svg {
    cursor: pointer;
  }
  @media (min-width: 512px) {
    width: fit-content;
  }
`
export const ProductNotAvailable = styled.span`
  color: #D81212;
`
export const ProductOptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  .suboption {
    padding-left: 25px;
    ${props => props.theme?.rtl && css`
      padding-right: 25px;
      padding-left: 0px;
  `}
  }
  p:nth-child(1) {
    margin-bottom: 0;
  }
  p {
    margin: 0px;
    font-size: 14px;
    line-height: 24px;
    color: #343A40;
  }
  li span {
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    color: #000000;
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
  display: inline-block !important;
  margin-right: 5px !important; 
  font-size: 1.1rem;
  color: #585858;
`
export const CartActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  .disabled {
    pointer-events: none;
    color: ${props => props.theme.colors.disabled};
  }
  .incdec-control {
    display: flex;
    align-items: center;
    color: #6C757D;
    margin-right: 20px;
    margin-bottom: 5px;
    ${props => props.theme?.rtl && css`
      margin-right: 0px;
      margin-left: 20px;
    `}
    svg {
      font-size: 20px;
      cursor: pointer;
    }
    span {
      margin: 0 8px;
      font-size: 22px;
      line-height: 24px;
    }
  }

  @media (min-width: 411px) {
    width: calc(100% - 120px);
    margin-left: auto;
    margin-right: 0px;
    ${props => props.theme?.rtl && css`
      margin-left: 0px;
      margin-right: auto;
    `}
  }

  @media (min-width: 1024px) {
    width: calc(100% - 145px);
  }
`
