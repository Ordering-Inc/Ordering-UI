import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 95%;
  margin: 20px auto 0px;
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
