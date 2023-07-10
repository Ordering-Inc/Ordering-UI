import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  overflow: scroll hidden;
`

export const ProductsList = styled.div`
  display: flex;
  box-sizing: border-box;

  .product-card {
    width: 270px;
    max-width: 270px;
    margin: 10px;
    border: 1px solid #E9ECEF;
  }

  @media(min-width: 480px){
    .product-card {
      width: 400px;
      max-width: 400px;
    }
  }
`
export const PaginationWrapper = styled.div`
  margin: 20px 0;
`
