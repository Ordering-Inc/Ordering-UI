import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;
  padding: 50px 20px 20px;

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
  margin-left: -20px;
  margin-top: 20px;
  width: calc(100% + 40px);
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  /* position: relative; */
  margin-top: 18px;

`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  margin-bottom: 20px;
  @media (min-width: 1201px) {
    width: calc(100% - 25px);
  }

  .price-discount {
    text-decoration: line-through;
  }
`

export const ProductEdition = styled.div`
  margin-top: 20px;
`

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 7px 0px;
  margin-bottom: 0px;
  margin-top: 15px;
  color: ${props => props.theme.colors.headingColor};
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 130px;

  textarea {
    margin-top: 8px;
  }

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
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  z-index: 999;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;

  div.price {
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  div.incdec-control {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }

  div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }

  svg.disabled {
    pointer-events: none;
    color: #CED4DA;
  }

  button:disabled,
  button.disabled {
    background: #E9ECEF;
    border: 1px solid #E9ECEF;
    color: #B1BCCC;
  }

  button.add {
    width: 90%;
    padding: 5px 10px;
    margin-top: 10px;
    position: relative;

    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 577px) {
    position: sticky;
  }

  @media (min-width: 1200px) {
    bottom: -20px;
    flex-direction: row;
    justify-content: space-between;

    div.price {
      width: 25%;
    }

    button.add {
      width: 40%;
      margin-top: 0;
    }

    div.incdec-control {
      width: 20%;
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
  border-bottom: 1px solid #E9ECEF;
  position: sticky;
  top: 60px;
  background: white;
  z-index: 900;

  > div {
    div {
      padding: 9px 15px;
      &:first-child {
        padding-left: 0px;
        ${props => props.theme?.rtl && css`
          padding-right: 0px;
          padding-left: 15px;
        `}
      }
    }
  }

  @media (min-width: 769px) {
    top: 0px;
  }
  @media (min-width: 1200px) {
    top: -20px;
  }
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

  > div {
    > svg {
      margin: 0px !important;
    }
  }

  @media (max-width: 768px) {
    > div {
      right: 16px;
      top: 25px;
      left: auto;
    }
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
