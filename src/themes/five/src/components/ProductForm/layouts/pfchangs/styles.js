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

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
    ${props => !props.useKioskApp && css`
      max-height: 90vh;
    `}
    padding-bottom: 0;
  }
`

export const WrapperImage = styled.div`
  width: 100%;
  height: 320px;
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  margin-top: 300px;
  /* position: relative; */
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;

  .price-discount {
    text-decoration: line-through;
  }
`

export const ProductEdition = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 7px 0px;
  margin-bottom: 0px;
  margin-top: 15px;
  color: #000;
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 130px;

  textarea {
    margin-top: 8px;
    height: 40px;
  }

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }

  @media (min-width: 370px){
    textarea{
      height: initial;
    }
  }

  @media (min-width: 577px) {
    margin-bottom: 90px;
  }

  @media (min-width: 769px) {
    margin-bottom: 0px;
    padding-bottom: 10px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  z-index: 9999997;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;
  box-sizing: border-box;
  div.price {
    color: #000;
    h4 {
      margin: 0;
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
    }
    span {
      font-size: 13px;
      color: #000;
      margin-right: 10px;

    }
  }

  div.incdec-control {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    span{
      display: flex;
      margin-right: 15px;
    }
    input {
      max-width: 100px;
    }
  }

  div.price-amount-block {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }

  svg {
    color: #000;
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
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
    position: relative;

    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }
  .qty {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    height: 38px;
    min-width: 60px;
    box-sizing: border-box;
    padding: 0;
    margin: 0 10px;
  }

  .qtyval {
    margin: 0 10px;
  }

  @media (min-width: 769px) {
    position: sticky;
  }

  @media (min-width: 1200px) {
    bottom: 0px;
    justify-content: flex-end;
    border-top: 1px solid #E9ECEF;
    width: calc(100% + 40px);
    transform: translateX(-20px);
    padding: 10px 20px;
    box-sizing: border-box;

    

    button.add {
      width: 100%;
      margin-top: 0;
    }

    div.incdec-control {
      &.show-weight-unit{
        width: 30%;
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
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }
`

export const SkuContent = styled.div`
  display: flex;
`

export const WrapperIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`

export const ProductName = styled.h1`
  font-size: 20px;
  line-height: 30px;
  color: #344050;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .calories, .qty {
    font-size: 16px;
    font-weight: 100;
    color: #909BA9;
    white-space: nowrap;
    display: flex;
    align-items: flex-end;
  } 
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 34px;
  }
`
export const Properties = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProductDescription = styled.p`
  margin-top: 0px;
  white-space: pre-wrap;
`

export const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    line-height: 24px;
    color: #909BA9;
    margin-bottom: 10px;
  }
`
export const EstimatedPersons = styled.div`
  display: flex;
`
export const ProductTagsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
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

export const ModalIcon = styled.span`
  z-index: 10;
  position: sticky;
  width: 30px;
  height: 30px;
  text-align: center;
  top: 30px;
  right: 0;
  cursor: pointer;
  float: right;
  svg {
    width: 30px;
    height: 30px;
    position: relative;
    top: 5px;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
  }
`

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;

  img{
    ${props => props.isSoldOut && css`
        filter: grayscale(1);
    `}
  }
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
      display: flex;
      opacity: 0.8;
      border-radius: 7.6px;
      height: auto;
      cursor: pointer;
      overflow: hidden;

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
