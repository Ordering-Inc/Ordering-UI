import styled from 'styled-components'

export const ProductsContainer = styled.div`
  width: 95%;
  margin: 20px auto 0px;
`

export const WrapContent = styled.div`
  padding: 5px;
  background: #F8F8F8;

  @media (min-width: 381px) {
    padding: 15px;
  }
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
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
  margin: 0px auto 10px;
`
