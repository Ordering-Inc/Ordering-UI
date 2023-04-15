import { lighten } from 'polished'
import styled, { css } from 'styled-components'
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  position: relative;
  padding: 50px 0px 20px;
  color: ${props => props.theme.colors.secundaryFontColor};
  @media (min-width: 768px) {
    height: 100%;
  }
  @media (min-width: 769px) {
  }
  @media (min-width: 1201px) {
  }
`
export const WrapperImage = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  height: 150px;
  @media (min-width: 768px) {
    min-height: 200px;
    height: 200px;
  }
  @media (min-width: 1201px) {
    min-height: 300px;
    height: 300px;
  }
`
export const ProductImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 150px;
  height: 150px;
  overflow: hidden;
  img {
    box-sizing: border-box;
    width: 100%;
  }
  @media (min-width: 768px) {
    min-height: 200px;
    height: 200px;
  }
  @media (min-width: 1201px) {
    min-height: 300px;
    height: 300px;
  }
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  position: relative;
  p {
    font-size: 14px;
    font-weight: 200;
    margin-top: 0px;
    line-height: 1.5em;
    width: 100%;
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }
  @media (min-width: 381px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`
export const ProductMeta = styled.div`
  padding: 0 20px;
  margin: 25px 0 0 0;
  h1 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
    color: #263238;
    margin-top: 0px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: uppercase;
    color: ${props => props.theme.colors.secundaryFontColor};
  }
  h5 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 100;
    color: ${props => props.theme.colors.secundaryFontColor};
  }
`
export const ProductEdition = styled.div`
  padding: 20px;
  max-height: 34vh;
  overflow-y: scroll;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`
export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 20px;
  line-height: 30px;
  margin: 0px;
  font-weight: 600;
  color: #666666;
`
export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 40px;
  p {
    font-weight: 300;
    margin-bottom: 5px;
  }
  textarea {
    margin-top: 20px;
  }
`
export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;
  @media (min-width: 577px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    position: relative;
    bottom: initial;
    right: initial;
  }
`
export const ActionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div.incdec-control {
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.5;
  }
  svg.disabled {
    pointer-events: none;
  }
  button.add {
    width: 55%;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    &.soldout {
      pointer-events: none;
    }
  }
  .total-price {
    font-size: 20px;
    line-height: 30px;
    color: #666666;
    font-weight: 600;
  }
  @media (min-width: 577px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    &:first-child {
      width:40%;
    }
    &:last-child {
      width:60%;
    }
    div.incdec-control {
      width: 32%;
    }
    button.add {
      width: 45%;
    }
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
  flex-direction: column;
  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
  }
`
export const WrapperIngredients = styled.div`
  padding: 20px;
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`
export const CategoriesContainer = styled.div`
  box-sizing: border-box;
  overflow-x : scroll;
`
export const Hr = styled.div`
  width: 100%;
  height: ${({ height }) => height ? `${height}px` : '10px'};
  background: ${({ color }) => color ? `${color}` : '#DDDDDD'};
`
export const ProductTagsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 15px;
`
export const ProductTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;

  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin: 0 10px 0 20px;
    ` : css`
      margin: 0 20px 0 10px;
    `}
  }
`
