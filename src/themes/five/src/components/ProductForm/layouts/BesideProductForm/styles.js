import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;
  padding: 70px 20px 20px;

  @media (min-width: 769px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding:  20px 0 20px 10px;
  }
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  position: relative;

  ${({ layout }) => layout && (layout === 'right') && css`
    flex-direction: row-reverse;
  `}

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 1201px) {
    flex-wrap: nowrap;
    overflow-y: auto;
    max-height: 70vh;
  }
`
export const ProductShareWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  top: 11.5px;
  ${props => props.theme?.rtl && css`
    padding-left: 20px;
    padding-right: 0;
  `}

  > div {
    left: unset;
    top: 24px;
    > svg {
      margin: 0px !important;
    }
    @media (min-width: 769px) {
      top: 0;
    }
  }

  @media (min-width: 1201px) {
    padding-right: 50px;
    top: 0;
  }
`
export const WrapperImage = styled.div`
  width: 100%;
  position: relative;
  border-radius: 16px;

  .mySwiper2 {
    height: 250px;
    margin-left: -10px;
    margin-top: 0px;
    width: calc(100% + 20px);

    .swiper-slide-active {
      border-radius: 0px;
      img {
        border-radius: 0px;
      }
    }
  }

  @media (min-width: 576px) {
    .mySwiper2 {
      height: 320px;
    }
  }

  @media (min-width: 768px) {
    .mySwiper2 {
      margin-top: 10px;
    }
  }

  @media (min-width: 1201px) {
    width: calc(50% - 10px);
    padding: 0 10px;
    position: sticky;
    top: 0;

    .mySwiper2 {
      height: 70%;
      margin-left: 0px;
      width: 100%;
      margin-top: 50px;
      .swiper-slide-active {
        border-radius: 7.6px;
        img {
          border-radius: 7.6px;
        }
      }
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
    margin: 0px;

    .swiper-slide {
      opacity: 0.8;
      border-radius: 7.6px;
      height: auto;
      cursor: pointer;
      overflow: hidden;
      & > div {
        height: 100%;
      }
      img {
        border-radius: 7.6px;
        max-height: 70px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  position: relative;
  margin-top: 10px;

  @media (min-width: 411px) {
    padding: 10px 0px;
  }

  @media (min-width: 1201px) {
    width: calc(50% - 20px);
    padding: 0px 10px;
    top: 0;
    margin-top: 0px;
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
  margin: 0px;
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
  padding: 10px 0px;
  width: 100%;
  z-index: 99;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;

  div.incdec-control {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 35px;
      height: 35px;
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
    width: 90%;
    padding: 5px 10px;
    margin: 10px 0px 0px;
    position: relative;

    span:last-child {
      position: absolute;
      right: 0;
      margin-right: 10px;

      ${props => props.theme?.rtl && css`
        position: absolute;
        left: 0;
        right: initial;
        margin-left: 10px;
        margin-right: 0px;
      `}
    }
    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 577px) {
    justify-content: space-between;
    flex-direction: row;

    div.incdec-control {
      width: 25%;
    }
    div:last-child {
      width: 75%;
    }
    button.add {
      width: 75%;
      margin: 0 10px;
    }
  }

  @media (min-width: 769px) {
    position: relative;
    bottom: initial;
    right: initial;

    button.add {
      width: 100%;
      margin: 0px;
    }
  }

  @media (min-width: 1201px) {
    position: sticky;
    top: 100%;
    padding: 10px 0px;

    div.incdec-control {
      width: 30%;
    }
    div:last-child {
      width: 70%;
      button {
        width: 100%;
      }
    }
    button.add {
      width: 68%;
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

export const ProductMeta = styled.div`
  display: flex;
  span {
    font-size: 16px;
    line-height: 24px;
    color: #909BA9;
    margin-bottom: 10px;
  }
`

export const SkuContent = styled.div`
  display: flex;

`
export const PriceContent = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #344050;
  margin: 0;
  margin-bottom: 10px;
  .offer-price {
    text-decoration: line-through;
    font-size: 16px;
    color: #909BA9;
  }
`

export const EstimatedPersons = styled.div`

`

export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`
export const ProductName = styled.h1`
  font-size: 24px;
  line-height: 36px;
  color: #344050;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .calories {
    font-size: 16px;
    font-weight: 100;
    color: #909BA9;
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
  } 
  @media (min-width: 1201px) {
    width: calc(100% - 25px);
  }
`

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductDescription = styled.p`
  margin-top: 0px;
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
export const VideoGalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    fill: #fff;
    font-size: 28px;
  }
`
