import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const ProductContainer = styled.div`
  position: relative;
  padding: 30px 0px;
  ${({ isExistBottom }) => !isExistBottom && css`
    margin-bottom: 130px;
  `}

  @media (min-width: 681px) {
    padding: 50px 0px;
  }
`

export const WrapperImage = styled.div`
  width: 100%;
  position: relative;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;

  > div {
    position: absolute;
    margin: 10px;
    z-index: 1;
  }

  img {
    object-fit: contain;
    height: 100%;
    box-sizing: border-box;
    border-radius: 7.6px;
  }

  @media (min-width: 1201px) {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 15px;
  position: relative;
  margin-top: 10px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.grayDark};
    margin: 0 0 5px 0;
  }

  h4 {
    font-size: 16px;
    margin: 0 0 20px 0;
    font-weight: 400;
  }

  p {
    font-size: 14px;
    font-weight: 200;
    margin-top: 0px;
    line-height: 1.5em;
    width: 100%;
    text-align: left;
    color: ${props => props.theme.colors.grayDark};
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }

  @media (min-width: 381px) {
    h1 {
      font-size: 24px;
    }

    h4 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    padding: 10px 0px;
  }

  @media (min-width: 1201px) {
    top: 0;
    margin-top: 0px;
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  margin-top: 20px;

  @media (min-width: 681px) {
    margin-top: 50px;
  }
`

export const ProductEdition = styled.div`
`

export const ProductOptionInfo = styled.div`
  margin-bottom: 30px;
  background-color: ${props => props.theme.colors.third};
  padding: 20px 0 40px 0;
`

export const ProductInnerContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

export const ProductCartTotalPrice = styled(ProductInnerContainer)`
  justify-content: flex-end;
  margin: 0px;
  ${({ isMobile }) => !isMobile && css`
    width: 100%;
    padding: 40px 0 20px 0;
    margin: 0 auto;
  `}
  color: ${props => props.theme.colors.grayDark};
  font-weight: 500;
  font-size: 16px;

  ${({ isMobile }) => !isMobile && css`
    display: none;
  `}

  span:first-child {
    margin: 0 5px;
  }

  @media (min-width: 681px) {
    ${({ isMobile }) => isMobile ? css`
      display: none;
    ` : css`
      display: flex;
    `}
  }
`

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 15px;
  margin: 0px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayDark};
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  width: 100%;

  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 90%;
    margin: 10px auto;
    position: relative;
    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 769px) {
    button.add {
      margin: 0px;
      width: fit-content;
    }
    justify-content: space-between;
    flex-direction: row;

    > div {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  @media (min-width: 769px) {
    position: relative;
    bottom: initial;
    right: initial;

    button.add {
      margin: 0px;
    }
  }

  @media (min-width: 1201px) {
    position: sticky;
    top: 100%;
    padding: 10px 0px;
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
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`

export const IncDecActions = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
  border-radius: 30px;
  button {
    cursor: pointer;
    outline: none;
    height: 42px;
    border: none;
    font-size: 24px;
    background: #FFF;
    transition: all .3s ease-in-out;
    padding: 0 20px;

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
    min-width: 50px;
    height: 42px;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 769px) {
    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}
  }
`
export const ProductActionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 10px 0;

  @media (min-width: 681px) {
    margin: 0px;
    width: initial;
  }
`
export const ProductTabContainer = styled.div`
  position: sticky;
  top: 0px;
  background: white;
  z-index: 900;
  padding-top: 15px;
  border-bottom: 1px solid #E9ECEF;

  > div {
    max-width: 700px;
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    top: 0;
  }
`
export const ProductTagsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
