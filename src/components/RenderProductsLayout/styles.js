import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 18px;
`

export const WrappLayout = styled.div`
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    display: flex;
    flex-direction: column;
    width: 100%;

    .bp-list,
    .cart {
      width: 100%;
    }

    @media (min-width: 870px) {
      flex-direction: row;
      .bp-list {
        width: 55%;
      }
      .cart {
        width: calc(45% - 20px);
        margin-left: 20px;
      }
    }

    @media (min-width: 1024px) {
      .bp-list {
        width: 60%;
      }
      .cart {
        width: calc(40% - 20px);
      }
    }  

    @media (min-width: 1200px) {
      .bp-list {
        width: 70%;
      }
      .cart {
        width: calc(30% - 20px);
      }
    }  
  `}
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
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }
`

export const WrapContent = styled.div`
  background: ${props => props.theme.colors.backgroundPage};
`

export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 701px) {
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

  @media (min-width: 1024px) {
    width: 70%;
  }
`

export const BusinessCategoriesContainer = styled.div`
  margin: 0;
  width: 100%;

  @media (min-width: 701px) {
    width: 30%;

    ${props => props.theme?.rtl && css`
      margin-right: 25px;
      margin-left: 0;
    `}
  }
`

export const BusinessCartContainer = styled(BusinessCategoriesContainer)`
  display: none;

  @media (min-width: 500px) {
    display: block;
  }
`

export const BusinessCartContent = styled.div`
  background: white;
  padding: 30px;
  position: relative;

  .product.accordion {
    margin: 0;
  }

  .accordion.active {
    padding: 10px 0;
  }

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
