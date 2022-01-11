import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;
  padding: 30px 20px 40px;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 769px) {
    padding: 20px;
  }

  @media (min-width: 1201px) {
    flex-wrap: nowrap;
    overflow: auto;
    max-height: 70vh;
  }
`

export const WrapperImage = styled.div`
  width: calc(100% + 40px);
  margin-top: 20px;
  margin-left: -20px;
  position: relative;
  height: 320px;
`

export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 0 20px;
  box-sizing: border-box;
  h1 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .price-wrapper {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      color: ${props => props.theme?.colors.darkTextColor};
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-right: 0px;
        margin-left: 5px;
      `}
    }

    .price-discount {
      font-size: 14px;
      color: #909BA9;
    }
  }
  p {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  padding: 0 20px;
  margin-top: 20px;
`

export const ProductEdition = styled.div`

`

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 16px;
  padding: 15px 0px;
  margin: 0px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkTextColor};
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 130px;

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }

  @media (min-width: 577px) {
    margin-bottom: 62px;
  }

  @media (min-width: 769px) {
    margin-bottom: 0px;
    padding-bottom: 10px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isIOS }) => isIOS ? '10px 40px 20px' : '10px 40px'};
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #E9ECEF;
  position: fixed;
  bottom: -5px;
  right: 0;
  background-color: #FFF;

  div.price {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme?.colors.darkTextColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div.incdec-control {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.5;
  }

  svg.disabled {
    pointer-events: none;
    color: #B1BCCC;
  }

  button.add {
    width: 45%;
    margin-top: 0;
    padding: 5px 10px;
    position: relative;
    font-size: 14px;
    &.soldout {
      width: 70%;
      pointer-events: none;
    }
  }

  @media (min-width: 769px){
    position: relative;
  }
  @media (min-width: 1200px){
    bottom: -21px;
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin: auto;

  span {
    margin-bottom: 10px;
  }
`

export const WrapperSubOption = styled.div`
  border-radius: 10px;
  &.error {
    background-color: ${lighten(0.58, '#A52121')};
  }
  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }
`

export const SkuContent = styled.div`
  display: flex;
`

export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`

export const ProductTabContainer = styled.div`
  position: sticky;
  top: -20px;
  border-bottom: 1px solid #E9ECEF;
  ${({ theme }) => theme.colors.white ? css`
    background: ${({ theme }) => theme.colors.white};
  ` : css`
    background: #fff;
  `} 
`

export const Divider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #F8F9FA;
`

export const ProductShareWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  ${props => props.theme?.rtl && css`
    padding-left: 20px;
    padding-right: 0;
  `}

  @media (max-width: 768px) {
    > div {
      right: 16px;
      top: 33px;
      left: auto;
    }
  }

`

export const ModalIcon = styled.span`
  position: fixed;
  left: 25px;
  top: 15px;
  font-size: 30px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 85%;
  ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  svg{
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
  }

  h1{
    font-size: 14px;
    margin-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(min-width: 576px){
    h1{
      font-size: 16px;
    }
  }

  @media(min-width: 769px){
    position: absolute;
    top: 0px;
  }
`
export const ProductName = styled.h1`
  font-size: 24px;
  line-height: 36px;
  color: #344050;
  margin-bottom: 10px;
`
export const Properties = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProductDescription = styled.p`
  margin-top: 10px;
`
export const PriceContent = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #344050;
  margin: 0;
`
export const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    line-height: 24px;
    color: #909BA9;
  }
`
export const EstimatedPersons = styled.div`

`
