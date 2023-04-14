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
      max-height: 70vh;
    `}
    padding-bottom: 0;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
 .favorite {
  cursor: pointer;
    svg {
      color: ${props => props.theme.colors.danger500};
      display: flex;
      font-size: 20px;
    }
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

  img{
    ${props => props.isSoldOut && css`
        filter: grayscale(1);
    `}
  }
  .mySwiper2 {
    height: 250px;
    width: 100%;
    ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
      height: 290px;
    `}
    .swiper-slide-active {
      border-radius: 0px;
      img {
        border-radius: 0px;
      }
    }

    @media (min-width: 480px){
      ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
        height: 340px;
      `}
    }

    @media (min-width: 576px) {
      height: 320px;
      ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
        height: 60vw;
      `}
    }
      ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
      @media (min-width: 768px) {
        height: 40vw;
      }
      @media (min-width: 993px) {
        height: 30vw;
      }
      @media (min-width: 1024px){
        height: 350px !important;
      }
      @media (min-width: 1200px) {
        height: 300px !important;
        width: 300px !important;
      }
    `}
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
    .active-img {
      ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
      `}
    }
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
        ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
          max-width: 80px;
          max-height: 80px;
        `}
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
    ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
      border-radius: 50% !important;
    `}
  }

  .active-img {
    ${({ theme }) => theme?.business_view?.components?.products?.components?.layout?.type === 'starbucks' && css`
      height: 60vw !important;
      width: 60vw !important;
      margin: 0 auto;
      @media (min-width: 768px) {
        height: 40vw !important;
        width: 40vw !important;
      }
      @media (min-width: 993px) {
        height: 30vw !important;
        width: 30vw !important;
      }
      @media (min-width: 1024px) {
        height: 350px !important;
        width: 350px !important;
      }
      @media (min-width: 1200px) {
        height: 300px !important;
        width: 300px !important;
      }
    `}
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
  z-index: 9999997;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;

  div.price {
    padding-top: 10px;
    color: ${props => props.theme?.colors.darkTextColor};
    h4 {
      margin: 0;
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
    }
    span {
      font-size: 13px;
      color: #D83520;
      line-height: 15px;
    }
  }

  div.incdec-control {
    width: 195px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  div.price-amount-block {
    display: flex;
    justify-content: space-between;
    width: 70%
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

  #address_control {
    button.add {
      width: calc(100% - 20px) !important;
      margin: 10px 10px 0 10px;
    }
  }
  
  div#address_list {
    padding: 0;
  }

  @media (min-width: 577px) {
    position: sticky;
  }

  @media (min-width: 1200px) {
    bottom: 0px;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #E9ECEF;
    width: calc(100% + 40px);
    transform: translateX(-20px);
    padding: 10px 20px;
    box-sizing: border-box;

    ${({ isColumn }) => isColumn && css`
      flex-direction: column;
      div.price-amount-block {
        margin-bottom: 15px;
      }
    `}

    div.price {
      width: 25%;
    }

    button.add {
      width: 35%;
      margin-top: 0;
    }

    div.incdec-control {
      margin-right: 18%;
      &.show-weight-unit{
        width: 40%;
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
  top: 50px;
  background: white;
  z-index: 9999996;
  overflow: scroll hidden;
  width: 100%;
  ::-webkit-scrollbar {
    height: 0px;
  }

  #optionList {
    > div {
      white-space: nowrap;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 10px 0px;
      margin-right: 25px;
      ${props => props.theme.rtl && css`
        margin-right: 0px;
        margin-left: 25px;
      `}
    }
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
  font-size: 20px;
  line-height: 30px;
  color: #344050;
  display: flex;
  justify-content: space-between;
  margin: 0;
  .calories {
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
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const ProductDescription = styled.p`
  margin-top: 0px;
  white-space: pre-wrap;
  color: #909BA9;
`
export const PriceContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > p {
    font-size: 18px;
    line-height: 27px;
    color: #344050;
    margin: 0;
  }
  .offer-price {
    text-decoration: line-through;
    font-size: 16px;
    color: #909BA9;
  }
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
export const WeightUnitSwitch = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: 10px;
  
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
 `}
`
export const WeightUnitItem = styled.span`
  display: inline-flex;
  width: fit-content;
  min-width: unset !important;
  font-size: 12px;
  line-height: 18px;
  padding: 2px 6px;
  cursor: pointer;
  
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primary}15;
    border-radius: 3px;
    color: ${props => props.theme.colors.primary};
  `}
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

export const GuestUserLink = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  cursor: pointer;
  margin: 15px 0;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
  margin-left: 10px;
  ${props => props.theme.rtl && css`
    margin-left: 0;
    margin-right: 10px;
  `}
`
