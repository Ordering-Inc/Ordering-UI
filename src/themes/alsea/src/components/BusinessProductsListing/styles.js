import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ProductsContainer = styled.div`
  width: 100%;
`

export const WrapContent = styled.div`
  width: 91%;
  margin: 0 auto;
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 381px) {
    padding: 15px;
  }
`

export const ProductsNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 45px);
  margin: auto;

  h1 {
    font-size: 20px;
    opacity: 0.5;
    text-align: center;
  }

  @media (min-width: 411px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const ProductLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SkeletonItem = styled.div`
  width: 80%;
  margin: 30px auto;

  span {
    margin-bottom: 10px;
  }
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

export const BusinessMetaInfo = styled.div`
  display: flex;
  align-items: center;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => darken(0.07, props.theme.colors.secundary)};  
  color: ${props => props.theme.colors.primary};
  border-radius: 30px;
  padding: 3px 15px;
  white-space: nowrap;
  font-weight: 500;

  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : `
    margin-right: 20px;
  `}

  svg {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : `
      margin-right: 10px;
    `}
  }
`

export const BusinessCategoryContainer = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;
  z-index: 1000;
  position: sticky;
  top: 0;
  background-color: #FFF;
  margin-top: 10px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    top: -30px;
  }
`
