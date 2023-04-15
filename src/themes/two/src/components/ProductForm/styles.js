import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;
  padding-top: 50px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 769px) {
    padding-top: 10px;
  }

  @media (min-width: 1201px) {
    overflow: auto;
    max-height: 90vh;
  }
`

export const ProductInfoContent = styled.div`
  padding: 0 15px 15px 15px;
`

export const WrapperImage = styled.div`
  margin-left: -15px;
  margin-top: 0px;
  width: calc(100% + 30px);
  position: relative;
`

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;

  .mySwiper2 {
    height: 250px;
    width: 100%;

    .swiper-slide-active {
      border-radius: 0px;
      img {
        border-radius: 0px;
      }
    }

    @media (min-width: 576px) {
      height: 320px;
    }

    @media (min-width: 1201px) {
    }
  }


  .swiper {
    width: 100%;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .product-thumb {
    box-sizing: border-box;
    padding: 30px 0px;
    margin: 0px 20px;

    .swiper-slide {
      opacity: 0.8;
      border-radius: 7.6px;
      height: auto;
      cursor: pointer;
      overflow: hidden;

      img {
        border-radius: 7.6px;
      }
    }

    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next {
    background-image: url(${props => props.theme.images.general.rightArrow});
    background-color: #d1d0d04d;
    background-repeat: no-repeat;
    background-position: 55% center;
    width: 32px;
    height: 32px;
    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .swiper-button-prev {
    background-image: url(${props => props.theme.images.general.leftArrow});
    background-color: #d1d0d04d;
    background-repeat: no-repeat;
    background-position: 45% center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    display: none;
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
`

export const ProductEdition = styled.div``

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px 0px;
  margin: 10px 0 0 0;
  font-weight: 600;
  color: #333333;
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 115px;

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }

  @media (min-width: 577px) {
    margin-bottom: 62px;
  }

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  width: 100%;
  box-shadow: 0px -2px 3px #ccc;
  z-index: 99;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;

  div.incdec-control {
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
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
  }

  button.add {
    padding: 5px 15px;
    margin: 10px 0px 0px;
    width: 91%;

    &.soldout {
      position: relative;
      pointer-events: none;
    }

    > span.total {
      ${props => props.theme?.rtl ? css`
        padding-right: 20px;
      ` : css`
        padding-left: 20px;
      `}
    }
  }

  @media (min-width: 577px) {
    flex-direction: row;

    div:last-child {
      width: 75%;
    }
    button.add {
      width: initial;
      margin: 0 10px;

      &.soldout {
        width: 100%;
      }
    }

    button {
      position: absolute;
  
      ${props => props.theme?.rtl ? css`
        left: 0px;
      ` : css`
        right: 0px;
      `}
    }
  }

  @media (min-width: 769px) {
    position: sticky;
    bottom: 0px;
    right: initial;
  }

  @media (min-width: 1201px) {
    padding: 10px 0px;

    div:last-child {
      width: 70%;
      button {
        width: 100%;
      }
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

  > div:last-child {
    border-bottom: none;
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

export const WrapProductShare = styled.div`
  position: absolute;
  top: 10px;
  ${props => props.theme?.rtl ? css`
    right: 10px;
  ` : css`
    left: 10px;
  `}
`

export const ProductQuantity = styled.span`
  background: #F7F7F7;
  border-radius: 8px;
  width: 65px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
`
export const ProductName = styled.h1`
  font-size: 24px;
  line-height: 36px;
  color: #344050;
  margin-bottom: 10px;
  @media (min-width: 1201px) {
    width: calc(100% - 25px);
  }
`
export const Properties = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProductDescription = styled.p`
  margin-top: 10px;
  white-space: pre-wrap;
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
