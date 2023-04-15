import styled, { css } from 'styled-components'

export const ProductsList = styled.div`
  display: flex;
  box-sizing: border-box;

  .product-card {
    width: 270px;
    max-width: 270px;
  }

  @media(min-width: 480px){
    .product-card {
      width: 400px;
      max-width: 400px;
    }
  }
`

export const ProductsListContainer = styled.div`
    margin-top: 10px;
    display: flex;
    overflow: scroll hidden;
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ${({ isLoading }) => isLoading && css`
      ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
    `}
`
