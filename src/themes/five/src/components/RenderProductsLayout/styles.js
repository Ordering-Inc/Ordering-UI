import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-top: 0;
  margin-bottom: 18px;
`

export const WrappLayout = styled.div``

export const WrapContent = styled.div`
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};

  ${({ isGroceries }) => !isGroceries && css`
    margin-top: 70px;
  `}

  @media (min-width: 576px) {
    padding: 0px;
  }

  &#businessProductList {
    > div {
      margin-top: 30px;
    }
  }
`

export const BusinessContent = styled.div`
  margin-top: ${props => props.isCustomLayout ? 0 : 30}px;
  display: flex;
  flex-direction: column;

  @media (min-width: 993px) {
    flex-direction: row;
  }
`

export const BusinessCategoryProductWrapper = styled.div`
  width: 100%;

  /* Hide scrollbar for Chrome, Safari and Opera */
  .category-lists::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .category-lists {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (min-width: 1000px) {
    width: ${({ showCartOnProductList }) => showCartOnProductList ? '70%' : '85%'};
  }
`

export const BusinessCategoriesContainer = styled.div`
  margin: 0;
  margin-right: 10px;
  width: 100%;
  @media (min-width: 993px) {
    width: calc(31% - 25px);
  }
  position: sticky;
  top: 65px;
`

export const BusinessCartContainer = styled(BusinessCategoriesContainer)`
  display: none;
  margin-top: 70px;
  min-width: 325px;
  height: fit-content;
  @media (min-width: 769px) {
    ${({ isProfessional }) => isProfessional && css`
      margin-top: 0px;
    `}
  }
  @media (min-width: 1000px) and (min-height: 600px) {
    display: block;
  }
`

export const BusinessCartContent = styled.div`
  background: white;
  padding: 30px;
  position: relative;
  margin-bottom: 30px;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  overflow: auto;

  .product.accordion {
    margin: 0;
  }

  /* .accordion.active {
    padding-bottom: 10px;
  } */

  ${({ isModal }) => !isModal && css`
    border: 1px solid #E9ECEF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 7.6px;
  `}

  @media (min-width: 1200px) {
    position: sticky;
    top: 0;
  }

  @media (min-width: 768px) {
    padding: 35px 30px;
  }
`

export const EmptyCart = styled.div`
  .empty-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 45px;
      color: #B1BCCC;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      color: #B1BCCC;
      margin: 23px 0 0 0;
    }
  }
`

export const EmptyBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  span {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    color: #748194;
    background: #F8F9FA;
    border: 1px solid #F8F9FA;
    border-radius: 7.6px;
    height: 44px;
    font-size: 14px;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const MobileCartViewWrapper = styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);

  span {
    font-weight: 600;
    font-size: 16px;
  }

  button {
    height: 44px;
    border-radius: 7.6px;
  }
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    input {
      width: 100%;

      @media (min-width: 500px) {
        width: 250px;
      }
    }
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }
`

export const ProfessionalFilterWrapper = styled.div`
  padding-bottom: 35px;
  ${({ isTop }) => isTop && css`
    margin-top: 30px;
  `}
`

export const WrapperSearchAbsolute = styled.div`
  position: absolute;
  right: 5px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 40px;
  height: 52px;
  background-color: ${props => props.theme.colors.backgroundPage};
  box-sizing: border-box;
  padding-bottom: 5px;
`

export const NearBusiness = styled.div`
  width: 100%;
`
